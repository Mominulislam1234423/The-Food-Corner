import FoodCard from "../../../Componants/FoodCard/FoodCard";

export default function OrderTab({ items }) {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
}
