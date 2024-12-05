import React, { useState } from "react";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Button from "../Button";
import Error from "../Error";
import useAuth from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const {signUp} = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    if (password !== conformPassword) {
      return setError("Password Doesn't match")
    }

    try {
      setLoading(true)
      setError("")
      await signUp(email, password, username)
      navigate("/")
    } catch (error) {
      console.log(error)
      setError("Failed to create the account!")
      setLoading(false)
    }
  }

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="card w-full max-w-md shadow-lg bg-white p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit} >
            <Input
              type="text"
              placeholder="Jon Willimas"
              label="Name:"
              className="input input-bordered w-full"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="email"
              placeholder="example@email.com"
              label="Email:"
              className="input input-bordered w-full"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="password"
              label="Password:"
              className="input input-bordered w-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type="password"
              placeholder="conformpassword"
              label="Conform Password:"
              className="input input-bordered w-full"
              required
              value={conformPassword}
              onChange={(e) => setConformPassword(e.target.value)}
            />

            <Checkbox required label="Agree to Terms & Conditions" value={agree}
              onChange={(e) => setAgree(e.target.checked)} />
            <Button
              disabled={loading}
              buttonText="Sign Up"
              type="submit"
              className="btn btn-primary w-full"
            />
            {error && <Error message={error} />}
          </form>
        </div>
      </div>
    </>
  );
}
