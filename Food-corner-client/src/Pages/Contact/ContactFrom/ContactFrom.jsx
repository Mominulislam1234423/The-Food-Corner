import React from "react";
import { FaPaperPlane } from "react-icons/fa"; // react-icons ইনস্টল করা থাকলে

export default function ContactFrom() {
  return (
    <div className="w-full mb-8 max-w-[850px] mx-auto p-5 md:p-10 bg-[#f4f4f4]">
      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-[#4a4a4a] mb-2"
            >
              Names my name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              className="w-full p-3.5 border border-[#e2e8f0] rounded-md bg-white text-sm outline-none focus:border-[#a17a26] transition-colors"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-[#4a4a4a] mb-2"
            >
              Email*
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              className="w-full p-3.5 border border-[#e2e8f0] rounded-md bg-white text-sm outline-none focus:border-[#a17a26] transition-colors"
            />
          </div>
        </div>

        {/* Phone Row */}
        <div className="flex flex-col">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-[#4a4a4a] mb-2"
          >
            Phone*
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            required
            className="w-full p-3.5 border border-[#e2e8f0] rounded-md bg-white text-sm outline-none focus:border-[#a17a26] transition-colors"
          />
        </div>

        {/* Message Row */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="text-sm font-semibold text-[#4a4a4a] mb-2"
          >
            Message*
          </label>
          <textarea
            id="message"
            rows="6"
            placeholder="Write your message here"
            required
            className="w-full p-3.5 border border-[#e2e8f0] rounded-md bg-white text-sm outline-none resize-y focus:border-[#a17a26] transition-colors"
          ></textarea>
        </div>

        {/* Dummy reCAPTCHA Box */}
        <div className="flex justify-between items-center bg-[#f9f9f9] border border-[#d3d3d3] rounded-[3px] w-[300px] h-[74px] px-3 shadow-[0_0_4px_rgba(0,0,0,0.05)]">
          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              id="captcha"
              className="w-6 h-6 cursor-pointer"
            />
            <label
              htmlFor="captcha"
              className="text-sm text-black cursor-pointer select-none"
            >
              I'm not a robot
            </label>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
              alt="reCAPTCHA"
              className="w-8 h-8"
            />
            <p className="text-[8px] text-[#555] leading-tight mt-0.5">
              reCAPTCHA
              <br />
              <span className="text-[#999]">Privacy - Terms</span>
            </p>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#9c7329] hover:bg-[#835f20] text-white font-medium px-8 py-3.5 rounded flex items-center gap-2.5 transition-colors duration-200"
          >
            Send Message <FaPaperPlane />
          </button>
        </div>
      </form>
    </div>
  );
}
