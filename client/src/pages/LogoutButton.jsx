import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove JWT from localStorage
   
      // localStorage.removeItem('token')
      // localStorage.removeItem('loggedInUser')
      // localStorage.removeItem('name')
      // localStorage.removeItem('email')
      // localStorage.removeItem('image')
      // localStorage.removeItem('google')
      // localStorage.removeItem('simplelogin')
      localStorage.removeItem('user-info')

      setTimeout(()=>{
        navigate('/')
      },1000)
    };

    // Redirect to the Landing page (or Home page)
    // navigate("/"); // Adjust based on where you want the user to go after logout


  return (
    <button
      onClick={handleLogout()}
      className="w-full p-3 mt-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
