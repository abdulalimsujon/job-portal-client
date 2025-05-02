/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("User signed out"))
      .catch((err) => console.log("failed to signed out"));
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="/">Job Portal</a>
        </div>
        <div className="space-x-4">
          <a href="/jobs" className="text-white hover:text-blue-200">
            Jobs
          </a>
          <a href="/companies" className="text-white hover:text-blue-200">
            Companies
          </a>
          {user ? (
            <button
              onClick={handleSignOut}
              className="text-white hover:text-blue-200"
            >
              Sign Out
            </button>
          ) : (
            <>
              <a href="/register" className="text-white hover:text-blue-200">
                Register
              </a>
              <a href="/signin" className="text-white hover:text-blue-200">
                Sign In
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
