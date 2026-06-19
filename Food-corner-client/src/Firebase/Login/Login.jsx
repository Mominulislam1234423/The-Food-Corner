import React, { useContext, useEffect, useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import loginImg from "../../../assets/authentication2.png";
import loginBg from "../../../assets/authentication.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import AuthContext from "../AuthContext/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const [error, setError] = useState("");
  const { singInGoogle, singInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleSingGoogle = () => {
    setError("");
    singInGoogle()
      .then((result) => {
        console.log("Google Login Success:", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.error("Google Login Error:", error.message);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (validateCaptcha(captchaInput) !== true) {
      setError("Captcha Does Not Match. Please try again.");
      setCaptchaInput("");
      return;
    }

    singInUser(email, password)
      .then((result) => {
        console.log("User Login Success:", result.user);
        setCaptchaInput("");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
        console.error("Login Error:", err.message);
      });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div
        className="w-full max-w-[1100px] rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 p-6 md:p-12 gap-8 items-center border border-gray-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${loginBg})` }}
      >
        <div className="flex justify-center items-center">
          <img
            src={loginImg}
            alt="Restaurant Illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>

        <div className="w-full max-w-[450px] mx-auto bg-white/90 p-6 rounded-lg backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-8">
            Login
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-700 mb-1.5"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Type here"
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm outline-none focus:border-[#d2b48c] transition-colors"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-gray-700 mb-1.5"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm outline-none focus:border-[#d2b48c] transition-colors"
                required
              />
            </div>

            <div className="mt-4">
              <div className="w-full bg-[#f9fafb] border border-gray-300 rounded-md p-2 select-none">
                <LoadCanvasTemplate />
              </div>
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                placeholder="Type the captcha text above"
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm outline-none focus:border-[#d2b48c] transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#d2b48c] hover:bg-[#c1a27a] text-white font-semibold py-3.5 rounded-md transition-colors duration-200 mt-2 shadow-sm text-center"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center space-y-4">
            <p className="text-sm text-gray-600">
              New here?{" "}
              <Link
                to="/signUp"
                className="text-[#d2b48c] font-bold hover:underline"
              >
                Create a New Account
              </Link>
            </p>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="flex-shrink mx-4 text-gray-500 text-sm">
                Or sign in with
              </span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <FaFacebookF size={16} />
              </button>
              <button
                onClick={handleSingGoogle}
                type="button"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <FaGoogle size={16} />
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <FaGithub size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
