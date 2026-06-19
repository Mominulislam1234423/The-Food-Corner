import chefService from "../../../../assets/home/chef-service.jpg"; // আপনার ইমেজের পাথ অনুযায়ী পরিবর্তন করুন

export default function ChefService() {
  return (
    <div
      className="my-20 w-5/6 mx-auto p-10 md:p-24 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${chefService})` }}
    >
      <div className="bg-white text-center p-8 md:p-16 max-w-5xl mx-auto rounded-sm shadow-lg">
        <h2 className="text-4xl uppercase mb-3 font-serif">Bistro Boss</h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
}
