import React from "react";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Button from "../Button";

export default function SignUp() {
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="card w-full max-w-md shadow-lg bg-white p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Sign Up
          </h2>
          <form>

            <Input type="text" placeholder="Jon Willimas" label='Name:' className="input input-bordered w-full" required />
            <Input type="Email" placeholder="example@email.com" label='Email:' className="input input-bordered w-full" required />
            <Input type="text" placeholder="password" label='Password:' className="input input-bordered w-full" required />
            <Input type="text" placeholder="conformpassword" label='Conform Password:' className="input input-bordered w-full" required />
            
            <Checkbox label="Agree to Terms & Conditions" />
            <Button buttonText="Sign Up" type="submit" className="btn btn-primary w-full" />
          </form>
        </div>
      </div>
    </>
  );
}

