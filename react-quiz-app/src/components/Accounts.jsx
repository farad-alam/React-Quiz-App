import React from "react";

function Accounts() {
  return (
    <>
      <div class="flex items-center text-white space-x-4">
        <span
          class="material-icons cursor-pointer"
          title="Account"
        >
          account_circle
        </span>
        <a href="signup.html" class="text-blue-600 hover:underline font-medium">
          Signup
        </a>
        <span class="material-icons" title="Logout">
          logout
        </span>
      </div>
    </>
  );
}

export default Accounts;
