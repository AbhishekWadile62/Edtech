import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError, handleSuccess } from '../utils';

import GoogleLogin from "./GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";
import axios from "axios"; // Import axios for API requests
// import GoogleLogin from "./GoogleLogin";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // Error state for form validation
  const [loading, setLoading] = useState(false); // Loading state for UI feedback
  const navigate = useNavigate(); // Redirect after successful signup

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  console.log(formData);

  const GoogleAuthWrapper = () => {
        return (
          <GoogleOAuthProvider clientId="490156029558-6a1vd9qndkilgvr30cah7q4kpclso8t9.apps.googleusercontent.com">
            <GoogleLogin></GoogleLogin>
          </GoogleOAuthProvider>
        );
    };
  

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setLoading(true);
    // setError(""); // Reset previous errors

    // try {
    //   // Send signup data to backend
    //   // const response = await axios.post(
    //   //   "http://localhost:8080/auth/signup",
    //   //   formData
    //   // );

    //   const url = "http://localhost:8080/auth/signup";
    //   const response = await fetch(url,{
    //       method:"POST",
    //       headers:{
    //           'Content-Type':'application/json'
    //       },
    //       body:formData
    //   });

    //   if (response.status === 201) {
    //     alert("Signup Successful!");
    //     navigate("/login"); // Redirect to login page
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   setError(
    //     error.response?.data?.message || "Signup failed. Please try again."
    //   );
    // } finally {
    //   setLoading(false); // Ensure loading state resets after request
    // }



    e.preventDefault()
    setLoading(true);

    const {name,email,password}=formData
    if(!name||!email||!password){
        return handleError("name,email,password are required")
    }
    try{
        const url = "http://localhost:8080/auth/signup";
        const response = await fetch(url,{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)
        });
        const result = await response.json()
        const {success,message,error}=result
        if(success){
            handleSuccess(message)
            setTimeout(()=>{
                navigate('/login')
            },1000)
        }else if(error){
            const details = error?.details[0].message;
            handleError(details)
        }else if(!success){
            handleError(message)
        }
        console.log(result);
    }catch(err){
        handleError(err)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black text-black">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 ">Sign Up</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}{" "}
        {/* Error message */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-black py-3 rounded-md hover:bg-gray-800 transition"
            disabled={loading} // Disable while loading
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </p>
        <GoogleAuthWrapper />
        {/* <div>
          <GoogleLogin />
        </div> */}
      </div>
    </div>
  );
};

export default Signup;
