import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../contexts/AuthContext";

function Accounts() {
  const { currentUser, logOut } = useAuth();
  return (
    <>
      <div className="flex items-center text-white space-x-4">
        {currentUser ? (
          <>
            <span className="material-icons cursor-pointer" title="Account">
              account_circle
            </span>
            <span>{currentUser.displayName}</span>
            <span className="material-icons cursor-pointer" title="Logout" onClick={logOut}>
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
