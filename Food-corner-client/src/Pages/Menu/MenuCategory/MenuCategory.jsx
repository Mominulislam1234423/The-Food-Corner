import { Link } from "react-router";
import MenuItem from "../../../Componants/MenuItem/MenuItem";

export default function MenuCategory({ items }) {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 my-8">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <Link to="/order">
          <button className="btn btn-sm border-0 border-b-4 my-8 btn-outline">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    </div>
  );
}
