import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../contexts/AuthContext";

function Accounts() {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async ()=>{
    try {
      await logOut();
      navigate('/login')
    } catch (error) {
      console.error("Failed to logout", error)
    }
    
  }
  return (
    <>
      <div className="flex items-center text-white space-x-4">
        {currentUser ? (
          <>
            <span className="material-icons cursor-pointer" title="Account">
              account_circle
            </span>
            <span>{currentUser.displayName}</span>
            <span className="material-icons cursor-pointer" title="Logout" onClick={handleLogout}>
              logout
            </span>
          </>
        ) : (
          <>
            <Link to="/signup">
              <p className="text-white hover:underline font-medium">Signup</p>
            </Link>

            <Link to="/login">
              <p className="text-white hover:underline font-medium">Login</p>
            </Link>
            
          </>
        )}
      </div>
    </>
  );
}

export default Accounts;
