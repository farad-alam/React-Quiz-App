import React from "react";

function Error({ message }) {
  return (
    <>
      <div className="bg-red-100 text-red-800 border border-red-200 rounded-md p-4">
        <p className="text-sm font-medium">{message}</p>
      </div>
    </>
  );
}

export default Error;
