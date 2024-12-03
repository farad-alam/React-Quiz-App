import React from "react";
import { Link } from "react-router-dom";

function Accounts() {
  return (
    <>
      <div className="flex items-center text-white space-x-4">
        <span className="material-icons cursor-pointer" title="Account">
          account_circle
        </span>
        <Link to="/signup">
          <p className="text-white hover:underline font-medium">Signup</p>
        </Link>
        <span className="material-icons" title="Logout">
          logout
        </span>
      </div>
    </>
  );
}

export default Accounts;
