import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import salade from "../../../../assets/home/slide5.jpg";
export default function Carts() {
  return (
    <section>
      <SectionTitle
        subHeading={"Should Try"}
        heading={"CHEF RECOMMENDS"}
      ></SectionTitle>
      <div className="w-5/6 mx-auto grid md:grid-cols-3 gap-8 mb-8">
        <div className=" bg-base-100 border">
          <figure>
            <img className="h-[300px]  w-full" src={salade} alt="Shoes" />
          </figure>
          <div className="text-center py-8 space-y-2 bg-[#1F293707]">
            <h2 className="text-center text-2xl font-bold">Caeser Salad</h2>
            <p className="text-gray-700 text-sm">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn">add to cart</button>
            </div>
          </div>
        </div>
        <div className=" bg-base-100 border">
          <figure>
            <img className="h-[300px]  w-full" src={salade} alt="Shoes" />
          </figure>
          <div className="text-center py-8 space-y-2 bg-[#1F293707]">
            <h2 className="text-center text-2xl font-bold">Caeser Salad</h2>
            <p className="text-gray-700 text-sm">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn">add to cart</button>
            </div>
          </div>
        </div>
        <div className=" bg-base-100 border">
          <figure>
            <img className="h-[300px] w-full" src={salade} alt="Shoes" />
          </figure>
          <div className="text-center py-8 space-y-2 bg-[#1F293707]">
            <h2 className="text-center text-2xl font-bold">Caeser Salad</h2>
            <p className="text-gray-700 text-sm">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn">add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
