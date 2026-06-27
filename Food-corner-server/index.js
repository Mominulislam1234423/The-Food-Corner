const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("boss is running");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.t5hegw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  await client.connect();

  const database = client.db("FoodCornerDB");
  const menuCollection = database.collection("menu");
  const userCollection = database.collection("users");
  const cartCollection = database.collection("cart");

  // jwt api
  app.post("/jwt", async (req, res) => {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1h",
    });
    res.send({ token });
  });
  // middlewares
  const varifyToken = (req, res, next) => {
    console.log(req.headers.authorization);
    if (!req.headers.authorization) {
      return res.status(401).send({ message: "forbidden access" });
    }
    const token = req.headers.authorization.split("")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).send({ message: "forbiden acces" });
      }
      req.decoded = decoded;
      next();
    });

    // next();
  };

  // user api
  app.get("/users", async (req, res) => {
    console.log("inside varify token", req.headers);
    const result = await userCollection.find().toArray();
    res.send(result);
  });

  app.post("/users", varifyToken, async (req, res) => {
    const user = req.body;

    const query = { email: user.email };
    const existingUser = await userCollection.findOne(query);

    if (existingUser) {
      return res.send({
        message: "user already exists",
        insertedId: null,
      });
    }

    const result = await userCollection.insertOne(user);
    res.send(result);
  });

  app.delete("/users/:id", async (req, res) => {
    const id = req.params.id;

    const query = {
      _id: new ObjectId(id),
    };

    const result = await userCollection.deleteOne(query);
    res.send(result);
  });

  app.patch("/users/role/:id", async (req, res) => {
    const id = req.params.id;
    const { role } = req.body;

    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: {
        role: role,
      },
    };

    const result = await userCollection.updateOne(filter, updateDoc);
    res.send(result);
  });

  app.get("/menu", async (req, res) => {
    const result = await menuCollection.find().toArray();
    res.send(result);
  });

  app.post("/menu", async (req, res) => {
    const newItem = req.body;
    const result = await menuCollection.insertOne(newItem);
    res.send(result);
  });

  app.get("/cart", async (req, res) => {
    const email = req.query.email;

    const query = {
      email: email,
    };

    const result = await cartCollection.find(query).toArray();
    res.send(result);
  });

  app.post("/cart", async (req, res) => {
    const cartItem = req.body;
    const result = await cartCollection.insertOne(cartItem);
    res.send(result);
  });

  app.delete("/cart/:id", async (req, res) => {
    const id = req.params.id;

    const query = {
      _id: new ObjectId(id),
    };

    const result = await cartCollection.deleteOne(query);
    res.send(result);
  });

  await client.db("admin").command({ ping: 1 });
  console.log("MongoDB Connected Successfully");
}

run();

app.listen(port, async () => {
  console.log(`food-corner is sitting on port ${port}`);
});
