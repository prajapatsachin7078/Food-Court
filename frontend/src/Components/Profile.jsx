import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-sm w-full text-center">
          {/* Shimmer Avatar */}
          <div className="animate-pulse">
            <div className="bg-gray-300 rounded-full w-32 h-32 mx-auto mb-4" />

            {/* Shimmer Name */}
            <div className="h-6 bg-gray-300 rounded mb-2 w-3/4 mx-auto" />

            {/* Shimmer Email */}
            <div className="h-4 bg-gray-300 rounded w-2/4 mx-auto mb-4" />

            {/* Shimmer Button */}
            <div className="h-10 bg-gray-300 rounded w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 max-w-sm w-full text-center">
          <img
            src={user.picture}
            alt={user.name}
            className="rounded-full w-32 h-32 mx-auto mb-4 border-4 border-indigo-500 shadow-md"
          />
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>

          {/* Logout Button */}
          <button
            onClick={() =>
              logout({ returnTo: window.location.origin })
            }
            className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    )
  );
};

export default Profile;
