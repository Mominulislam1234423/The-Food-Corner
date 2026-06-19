import React from "react";
import menuBg from "../../../assets/authentication.png";
import menuCover from "../../../assets/banner2.jpg";
import SharedCover from "../../Componants/SharedCover/SharedCover";
import { Helmet } from "react-helmet-async";

const AddMenu = () => {
  const handleAddFood = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const price = parseFloat(form.price.value);
    const category = form.category.value;
    const image = form.image.value;
    const recipe = form.recipe.value;

    const foodItem = { name, price, category, image, recipe };
    console.log("Sending complete data to server:", foodItem);

    fetch("https://llmf56-5000.csb.app/menu", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(foodItem),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
        if (data.insertedId) {
          alert("খাবারটি সফলভাবে ডাটাবেজে যোগ হয়েছে! 🎉");
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        alert(
          "ডাটা পাঠাতে সমস্যা হয়েছে! কোডক্যান্ডবক্সের নতুন ট্যাবে ট্রাই করুন।"
        );
      });
  };

  return (
    <div>
      <Helmet>
        <title>Add Menu | Food Corner</title>
      </Helmet>
      <SharedCover
        img={menuCover}
        title="Add New Food Item"
        name="Add Menu"
      ></SharedCover>
      <div
        className={`min-h-screen bg-[url(${menuBg})] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8`}
      >
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-2xl shadow-md border border-gray-100">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Add New Food Item
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Input food details to display on your menu card
            </p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={handleAddFood}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Food Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="e.g., Chicken and Walnut Salad"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-800 focus:outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price ($)
                </label>
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  placeholder="e.g., 13.5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-800 focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="e.g., salad, pizza"
                  className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-800 focus:outline-none"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                name="image"
                placeholder="Paste food image online link"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-800 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Recipe / Description
              </label>
              <textarea
                name="recipe"
                rows="3"
                placeholder="Pan roasted pork belly with gratin potato, braised Savoy cabbage..."
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-slate-800 focus:outline-none resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-4 rounded-xl transition duration-200 shadow-sm"
            >
              Add Item to Menu
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddMenu;
