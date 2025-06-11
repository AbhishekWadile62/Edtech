import React, { useEffect, useState } from "react";

const Profile = () => {
  // State to hold user data
  const [user, setUser] = useState(null);

  // Fetching user data from API
  useEffect(() => {
    const fetchUserData = async () => {
        try {
          const response = await fetch('/api/user/profile');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };

    fetchUserData(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col items-center py-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg text-center">
        <img
          src={user.profilePicture}
          alt="Profile"
          className="w-32 h-32 rounded-full mx-auto mb-6"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">{user.name}</h1>
        <p className="text-lg text-gray-600 mb-4">{user.email}</p>
        
        {/* Button to update profile (you can later add a form to update details) */}
        <button className="bg-red-600 text-white py-2 px-6 rounded-lg mt-4">
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
