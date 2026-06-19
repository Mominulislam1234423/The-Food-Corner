import { useContext } from "react";
import AuthContext from "../../Firebase/AuthContext/AuthContext";
import Swal from "sweetalert2";
import { Form, useLocation, useNavigate } from "react-router";
import axios from "axios";
import useCort from "../../hooks/useCort";

export default function FoodCard({ item }) {
  const { name, image, price, recipe, _id } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [cart, refetch] = useCort();
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axios.post("https://llmf56-5000.csb.app/cart", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "you are not login",
        text: "please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 w-96 shadow-sm mt-4 border">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-2 mt-2 px-4 bg-black text-white">
        {price}
      </p>

      <div className="card-body text-center flex flex-col justify-center items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-sm text-gray-600">{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleAddToCart}
            className="btn btn-outline border-0 border-b-4"
          >
            Add to card
          </button>
        </div>
      </div>
    </div>
  );
}
