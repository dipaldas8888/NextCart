import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-hot-toast";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { register } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await register(email, name, password);
      toast.success("Registration successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error("[REGISTER FAILED]", err);

      const message =
        err.response?.data?.message ||
        err.message ||
        "Registration failed. Please try again.";

      toast.error(message);
      setError(message);
    }
  };

  return (
    <div className="flex h-[700px] w-full">
      <div className="w-full hidden md:inline-block">
        <img
          className="h-full w-full object-cover"
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
          alt="leftSideImage"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="md:w-96 w-80 flex flex-col items-center justify-center"
        >
          <h2 className="text-4xl text-gray-900 font-medium">Sign up</h2>
          <p className="text-sm text-gray-500/90 mt-3">
            Create your account to continue shopping
          </p>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full pl-6 gap-2">
            <input
              type="text"
              placeholder="username"
              className="w-full border-none focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center mt-4 w-full bg-transparent border border-gray-300/60 h-12 rounded-full pl-6 gap-2">
            <input
              type="email"
              placeholder="Email"
              className="w-full border-none focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center mt-4 w-full bg-transparent border border-gray-300/60 h-12 rounded-full pl-6 gap-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full border-none focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}

          <button
            type="submit"
            className="mt-8 w-full h-11 rounded-full text-white bg-green-600 hover:bg-green-700 transition"
          >
            Register
          </button>

          <p className="text-gray-500/90 text-sm mt-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-500 font-medium hover:underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
