import React, { useContext, useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import singUpImg from "../../../assets/authentication2.png";
import singUpbg from "../../../assets/authentication.png";
import AuthContext from "../AuthContext/AuthContext";
import useAxiousPublic from "../../hooks/useAxiousPublic";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const axiosPublic = useAxiousPublic();

  const { creatUser, singInGoogle, updateUserProfile } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    creatUser(email, password)
      .then((result) => {
        console.log("User Created Successfully:", result.user);

        const userInfo = {
          name: name,
          email: email,
        };

        if (updateUserProfile) {
          updateUserProfile({ displayName: name })
            .then(() => console.log("Firebase Profile Updated"))
            .catch((err) => console.error("Profile Update Error:", err));
        }

        axiosPublic
          .post("/users", userInfo)
          .then((res) => {
            console.log("Server Response:", res.data);
            if (res.data.insertedId) {
              console.log("user added to the database");
            }
            clearFormAndNavigate();
          })
          .catch((err) => {
            console.error("Database Error:", err);
            setError("Failed to save user info to database.");
          });
      })
      .catch((err) => {
        console.error("Firebase Auth Error:", err.message);
        setError(err.message);
      });
  };

  const clearFormAndNavigate = () => {
    setName("");
    setEmail("");
    setPassword("");
    navigate("/");
  };

  const handleGoogleSignIn = () => {
    singInGoogle()
      .then((result) => {
        console.log("Google Sign In Success:", result.user);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
        };
        axiosPublic.post("/users", userInfo).then(() => {
          navigate("/");
        });
      })
      .catch((err) => setError(err.message));
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${singUpbg})` }}
    >
      <div
        className="w-full max-w-[1100px] rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 p-6 md:p-12 gap-8 items-center border border-gray-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${singUpbg})` }}
      >
        <div className="w-full max-w-[450px] mx-auto order-2 md:order-1 bg-white/90 p-6 rounded-lg backdrop-blur-sm shadow-sm md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none">
          <h2 className="text-3xl font-bold text-center text-[#1f2937] mb-6">
            Sign Up
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-700 mb-1.5"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type here"
                className="w-full p-3 border border-gray-300 rounded-md bg-white text-sm outline-none focus:border-[#d2b48c] transition-colors"
                required
              />
            </div>

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

            <button
              type="submit"
              className="w-full bg-[#d2b48c] hover:bg-[#c1a27a] text-white font-semibold py-3.5 rounded-md transition-colors duration-200 mt-4 shadow-sm text-center"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-6 text-center space-y-4">
            <div className="text-sm text-gray-600">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-[#d2b48c] font-bold hover:underline inline-block"
              >
                Go to log in
              </Link>
            </div>

            <p className="text-sm text-gray-500 font-medium">Or sign up with</p>

            <div className="flex justify-center gap-4">
              <button
                type="button"
                className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <FaFacebookF size={16} />
              </button>
              <button
                onClick={handleGoogleSignIn}
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

        <div className="flex justify-center items-center order-1 md:order-2">
          <img
            src={singUpImg}
            alt="Restaurant Illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
