import React from "react";
import Brand from "./Brand";
import Accounts from "./Accounts";

function Navbar() {
  return (
    <>
      <nav class="bg-emerald-600  shadow-md p-4 flex justify-between items-center px-10">
        <Brand />
        <Accounts />
      </nav>
    </>
  );
}

export default Navbar;
