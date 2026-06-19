import SectionTitle from "../../../Componants/SectionTitle/SectionTitle";
import featured from "../../../../assets/home/featured.jpg";

export default function ReadMenu() {
  return (
    <div className="my-12 text-white bg-[url('../../../../assets/home/featured.jpg')] bg-cover bg-fixed bg-center">
      <section className="bg-slate-500 bg-opacity-60 pt-12 pb-20 px-4 md:px-36">
        <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />

        <div className="md:flex gap-10 justify-center items-center py-8 px-4">
          <div>
            <img
              className="rounded-lg shadow-2xl"
              src={featured}
              alt="Featured Item"
            />
          </div>

          <div className="text-white space-y-2">
            <h5 className="text-lg">March 20, 2023</h5>
            <h1 className="text-xl font-bold uppercase">
              WHERE CAN I GET SOME?
            </h1>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>

            <button className="btn btn-outline border-0 border-b-4 mt-4 text-white hover:bg-slate-800 transition-all">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
