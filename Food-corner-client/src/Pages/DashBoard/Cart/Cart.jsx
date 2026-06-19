import { FaTrashAlt } from "react-icons/fa";
import useCort from "../../../hooks/useCort";
import Swal from "sweetalert2";
import axios from "axios";

export default function Cart() {
  const [cart, refetch] = useCort();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://llmf56-5000.csb.app/cart/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6 font-serif">
        <h2 className="text-3xl font-bold uppercase">
          Total Items: {cart.length}
        </h2>
        <h2 className="text-3xl font-bold uppercase">
          Total Price: ${totalPrice}
        </h2>
        <button className="btn bg-[#D1A054] text-white hover:bg-[#b0833e] px-6 text-lg font-semibold uppercase">
          Pay
        </button>
      </div>

      <div className="overflow-x-auto rounded-t-xl border">
        <table className="table w-full text-left">
          <thead className="bg-[#D1A054] text-white uppercase text-sm">
            <tr>
              <th className="py-4 pl-6 w-16">#</th>
              <th className="py-4">Item Image</th>
              <th className="py-4">Item Name</th>
              <th className="py-4">Price</th>
              <th className="py-4 text-center w-24">Action</th>
            </tr>
          </thead>

          <tbody className="text-gray-600 font-medium">
            {cart.map((item, index) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="py-4 pl-6 font-bold text-black">{index + 1}</td>
                <td className="py-4">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </div>
                </td>
                <td className="py-4 text-gray-500">{item.name}</td>
                <td className="py-4">${item.price}</td>
                <td className="py-4 text-center">
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost bg-[#B91C1C] text-white hover:bg-red-800 btn-md"
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}

            {cart.length === 0 && (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-8 text-xl text-gray-400"
                >
                  Your cart is empty!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
