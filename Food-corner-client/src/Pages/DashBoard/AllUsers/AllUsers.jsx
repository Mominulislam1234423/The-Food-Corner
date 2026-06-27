import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

export default function AllUsers() {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      // ১. লোকাল স্টোরেজ থেকে টোকেনটি নিয়ে একটি ভ্যারিয়েবলে রাখুন
      const token = localStorage.getItem("access-token");

      // ২. কনসোলে দেখার জন্য এই লগটি চেক করুন
      console.log("ফ্রন্টএন্ড থেকে পাঠানো টোকেন:", token);

      const res = await axiosSecure.get("/users", {
        headers: {
          // ৩. 'Bearer' এর 'B' বড় হাতের করে দিন
          authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    },
  });

  const handleDelete = async (id) => {
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
        axiosSecure
          .delete(`/users/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => {
            console.error("Error deleting user:", err);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while deleting.",
              icon: "error",
            });
          });
      }
    });
  };

  const handleRoleChange = async (id) => {
    Swal.fire({
      title: "Make Admin?",
      text: "Are you sure you want to make this user an admin?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#D1A054",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/role/${id}`, { role: "admin" })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                title: "Updated!",
                text: "User role has been updated to admin.",
                icon: "success",
              });
            } else {
              Swal.fire({
                title: "No Change",
                text: "The user is already an admin.",
                icon: "info",
              });
            }
          })
          .catch((err) => {
            console.error("Error updating role:", err);
            Swal.fire({
              title: "Error!",
              text: "Failed to update user role.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="text-center mb-8">
        <p className="text-yellow-600 text-sm italic font-medium">
          ---How many??---
        </p>
        <div className="inline-block border-y border-gray-300 py-2 px-10 mt-1">
          <h2 className="text-2xl font-semibold tracking-wide text-gray-800 uppercase">
            Manage All Users
          </h2>
        </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-sm border-4 border-blue-400 shadow-sm">
        <div className="mb-4">
          <h3 className="text-xl font-serif font-bold text-gray-900 uppercase tracking-wide">
            Total Users: {users.length}
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#D1A054] text-white uppercase text-xs font-semibold tracking-wider">
                <th className="p-4 rounded-tl-xl w-16 text-center">#</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4 text-center">Role</th>
                <th className="p-4 text-center rounded-tr-xl">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {users.map((user, index) => (
                <tr
                  key={user._id || user.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="p-4 font-bold text-gray-800 text-center w-16">
                    {index + 1}
                  </td>
                  <td className="p-4 text-gray-600 font-medium">{user.name}</td>
                  <td className="p-4 text-gray-500">{user.email}</td>
                  <td className="p-4 text-center">
                    {user.role === "admin" ? (
                      <span className="text-green-600 font-bold uppercase text-xs bg-green-100 px-3 py-1.5 rounded-full inline-block">
                        Admin
                      </span>
                    ) : (
                      <button
                        onClick={() => handleRoleChange(user._id || user.id)}
                        className="bg-[#D1A054] hover:bg-[#b5853b] text-white p-2.5 rounded shadow-sm inline-flex items-center justify-center transition-colors"
                        title="Make Admin"
                      >
                        <FaUsers className="text-lg" />
                      </button>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    <button
                      onClick={() => handleDelete(user._id || user.id)}
                      className="bg-[#B91C1C] hover:bg-red-800 text-white p-2.5 rounded shadow-sm inline-flex items-center justify-center transition-colors"
                      title="Delete User"
                    >
                      <FaTrashAlt className="text-base" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No users found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
