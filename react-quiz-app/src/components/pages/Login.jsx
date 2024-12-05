import React, { useState } from "react";
import Checkbox from "../Checkbox";
import Input from "../Input";
import Button from "../Button";
import useAuth from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Error from "../Error";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const {logIn} = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      setError("")
      await logIn(email, password)
      navigate("/")
    } catch (error) {
      console.log(error)
      setError("Failed to login")
      setLoading(false)
    }
  }
  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center min-h-screen">
        <div className="card w-full max-w-md shadow-lg bg-white p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
            Login your Account
          </h2>
          <form onSubmit={handleSubmit}>

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

            <Checkbox label="Remember Me" value={agree}
              onChange={(e) => setAgree(e.target.checked)} />
            <Button 
              disabled={loading}
              buttonText="Login"
              type="submit"
              className="btn btn-success w-full"
            />

            {error && <Error message={error} />}
            
            {/* <Error message={error} /> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
