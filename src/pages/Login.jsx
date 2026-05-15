import { useState } from "react"
import { useNavigate } from "react-router-dom"

import {
  loginUser,
  registerUser,
} from "../services/auth"

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async () => {

    try {

      await registerUser(email, password)

      setMessage("Registration successful")

      navigate("/")

    } catch (error) {

      setMessage(error.message)

    }
  }

  const handleLogin = async () => {

    try {

      await loginUser(email, password)

      setMessage("Login successful")

      navigate("/")

    } catch (error) {

      setMessage(error.message)

    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center gap-4 p-6">

      <h1 className="text-4xl font-bold">
        Ride App Login
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="p-3 rounded bg-white text-black w-80 outline-none"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="p-3 rounded bg-white text-black w-80 outline-none"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className="flex gap-4">

        <button
          onClick={handleRegister}
          className="bg-green-600 px-4 py-2 rounded"
        >
          Register
        </button>

        <button
          onClick={handleLogin}
          className="bg-blue-600 px-4 py-2 rounded"
        >
          Login
        </button>

      </div>

      <p>{message}</p>

    </div>
  )
}