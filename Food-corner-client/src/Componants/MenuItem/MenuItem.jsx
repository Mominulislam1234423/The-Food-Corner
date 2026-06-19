export default function MenuItem({ item }) {
  const { name, image, price, recipe } = item;
  return (
    <div className="w-5/6 mx-auto flex space-x-4">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}</h3>
        <p className="text-sm text-gray-600">{recipe}</p>
      </div>
      <p className="text-[#BB8506]">{price}</p>
    </div>
  );
}
