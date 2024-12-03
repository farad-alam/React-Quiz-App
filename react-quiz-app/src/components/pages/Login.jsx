import React from "react";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Button from "../Button";

function Login() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="card w-full max-w-md shadow-lg bg-white p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Login your Account
          </h2>
          <form>

            <Input
              type="Email"
              placeholder="example@email.com"
              label="Email:"
              className="input input-bordered w-full"
              required
            />
            <Input
              type="text"
              placeholder="password"
              label="Password:"
              className="input input-bordered w-full"
              required
            />

            <Checkbox label="Remember Me" />
            <Button
              buttonText="Login"
              type="submit"
              className="btn btn-success w-full"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
