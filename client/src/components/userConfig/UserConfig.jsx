import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUserEmail, setUserName } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const UserConfig = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    name: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateName = (name) => name.trim().length >= 2;

  const handleLogin = useCallback(() => {
    const newErrors = { email: "", name: "" };
    let isValid = true;

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
      isValid = false;
    }
    
    if (!validateName(formData.name)) {
      newErrors.name = "Name must contain at least 2 characters.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      dispatch(setUserEmail(formData.email));
      dispatch(setUserName(formData.name));
      navigate("/project");
    }
  }, [formData, dispatch, navigate]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black text-purple-800 animate-gradient-x">
      <div className="bg-black bg-opacity-20 backdrop-filter backdrop-blur-lg p-12 rounded-2xl shadow-2xl w-96 transform hover:scale-105 transition-all duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">
          Welcome
        </h2>
        <input
          type="email"
          id="email"
          value={formData.email}
          placeholder="Enter your Email"
          onChange={handleChange}
          className="w-full px-4 py-3 mb-2 text-gray-200 bg-black bg-opacity-70 border-2 border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mb-4">{errors.email}</p>
        )}
        <input
          type="text"
          id="name"
          value={formData.name}
          placeholder="Enter your Name"
          onChange={handleChange}
          className="w-full px-4 py-3 mb-2 text-gray-200 bg-black bg-opacity-70 border-2 border-gray-600 rounded-lg focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mb-4">{errors.name}</p>
        )}
        <button
          onClick={handleLogin}
          className="w-full px-4 py-3 text-lg font-semibold text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          Login
        </button>
      </div>
    </div>
  );
  
};

export default UserConfig;


