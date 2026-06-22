const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("boss is running");
});

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.t5hegw6.mongodb.net/?appName=Cluster1`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();

    const database = client.db("FoodCornerDB");
    const menuCollection = database.collection("menu");
    const userCollection = database.collection("users");
    const cartCollection = database.collection("cart");

    // user related api
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await userCollection.insertOne(user);
      res.send(result);
    });

    app.post("/menu", async (req, res) => {
      try {
        const newItem = req.body;
        console.log("Adding new item to Cluster1:", newItem);
        const result = await menuCollection.insertOne(newItem);
        res.send(result);
      } catch (error) {
        console.error("Error inserting data:", error);
        res.status(500).send({ message: "Data যোগ করতে সমস্যা হয়েছে" });
      }
    });

    app.get("/menu", async (req, res) => {
      try {
        const result = await menuCollection.find().toArray();
        res.send(result);
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send({ message: "Data লোড করতে সমস্যা হয়েছে" });
      }
    });

    // cart collection
    app.get("/cart", async (req, res) => {
      const email = req.query.email;
      const query = { email: email };
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
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB! 🎉"
    );
  } catch (error) {
    console.error("Database Connection Error ❌:", error);
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`food-corner is sitting on port ${port}`);
});
