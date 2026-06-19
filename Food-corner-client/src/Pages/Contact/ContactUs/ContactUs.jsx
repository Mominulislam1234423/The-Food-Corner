import { FaClock, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";

export default function ContactUs() {
  return (
    <div className="w-4/6 mx-auto md:flex gap-8 mb-8">
      <div>
        <div className="px-20 text-white py-4 bg-[#D1A054] flex justify-center">
          <FaPhoneVolume />
        </div>
        <div className="p-12 border bg-gray-300 text-center">
          <h1 className="font-bold">PHONE</h1>
          <p>+38 (012) 34 56 789</p>
        </div>
      </div>
      <div>
        <div className="px-16 text-white py-4 bg-[#D1A054] flex justify-center">
          <FaLocationDot />
        </div>
        <div className="p-12 border bg-gray-300 text-center">
          <h1 className="font-bold">ADDRESS</h1>
          <p>+38 (012) 34 56 789</p>
        </div>
      </div>
      <div>
        <div className="px-16 text-white py-4 bg-[#D1A054] flex justify-center">
          <FaClock />
        </div>
        <div className="p-12 border bg-gray-300 text-center">
          <h1 className="font-bold">WORKING HOURS</h1>
          <p>Mon - Fri: 08:00 - 22:00</p>
        </div>
      </div>
    </div>
  );
}
