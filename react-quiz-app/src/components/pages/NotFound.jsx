import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <h1 className="text-9xl font-extrabold text-gray-800 tracking-widest">404</h1>
      <div className="bg-primary px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <div className="text-center mt-5">
        <h2 className="text-3xl font-bold mb-2">
          Oops! We can't find the page you're looking for.
        </h2>
        <p className="text-gray-500 mb-6">
          The page might have been removed or you may have mistyped the URL.
        </p>
        <Link to="/">
          <button className="btn btn-primary px-6 py-2 text-white text-lg">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
