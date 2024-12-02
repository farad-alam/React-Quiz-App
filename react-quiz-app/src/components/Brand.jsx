import React from "react";

function Brand() {
    const brandLogo ="https://t4.ftcdn.net/jpg/03/32/68/71/360_F_332687153_gmsohq86koOEWFYlYSI3N6xzb1zIcG88.jpg"
  return (
    <>
      <ul>
        <li>
          <a href="index.html" class="flex items-center space-x-2">
            <img src={brandLogo} alt="quiz logo" class="h-10" />
            <h3 class="text-lg font-bold text-white">Quiz APP by Farad</h3>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Brand;
