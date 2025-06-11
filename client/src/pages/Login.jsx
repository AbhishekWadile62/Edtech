import { useState } from "react";
import { useNavigate } from "react-router-dom";  
import { Link } from "react-router-dom";
import axios from "axios"; // Using axios for API calls
import GoogleLogin from "./GoogleLogin";
import { GoogleOAuthProvider } from "@react-oauth/google";

// import GoogleLogin from "./GoogleLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const GoogleAuthWrapper = () => {
      return (
        <GoogleOAuthProvider clientId="490156029558-6a1vd9qndkilgvr30cah7q4kpclso8t9.apps.googleusercontent.com">
          <GoogleLogin></GoogleLogin>
        </GoogleOAuthProvider>
      );
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");  // Clear any previous errors

    try {
      // Make API request to the backend to log in the user
      const response = await axios.post("http://localhost:8080/auth/login", { email, password });

      setLoading(false);

      // If login is successful
      if (response.data.jwtToken) {
        // Store the JWT token in localStorage for persistence
        localStorage.setItem("token", response.data.jwtToken);  
        localStorage.setItem("name", response.data.name);  
        // alert("Login Successful!");
        navigate("/home"); // Redirect to the home page (dashboard)
      } else {
        setError(response.data.message || "Invalid email or password!");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-black ">Login</h2>
        
        {error && <p className="text-red-500 text-center mb-2">{error}</p>} 
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-600"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded border border-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 mt-4 bg-black text-black rounded-lg font-semibold hover:bg-gray-800 transition"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-black font-semibold hover:underline login-link">
            Sign up here
          </Link>
        </p>
        <GoogleAuthWrapper />
        {/* <div>
          <GoogleLogin/>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
