import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUsers, FaTrashAlt } from "react-icons/fa";

export default function AllUsers() {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = async (id) => {
    console.log(`Delete user with id: ${id}`);
  };

  const handleRoleChange = async (id) => {
    console.log(`Change role for user with id: ${id}`);
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
                    <button
                      onClick={() => handleRoleChange(user._id || user.id)}
                      className="bg-[#D1A054] hover:bg-[#b5853b] text-white p-2.5 rounded shadow-sm inline-flex items-center justify-center transition-colors"
                      title="Change Role"
                    >
                      <FaUsers className="text-lg" />
                    </button>
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
