import { useState } from "react"
import {
  registerUser,
  loginUser,
  logoutUser,
} from "./services/auth"

export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async () => {
    try {
      await registerUser(email, password)
      setMessage("Registration successful")
    } catch (error) {
      setMessage(error.message)
    }
  }

  const handleLogin = async () => {
    try {
      await loginUser(email, password)
      setMessage("Login successful")
    } catch (error) {
      setMessage(error.message)
    }
  }

  const handleLogout = async () => {
    try {
      await logoutUser()
      setMessage("Logout successful")
    } catch (error) {
      setMessage(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-4 p-6">

      <h1 className="text-4xl font-bold">
        Ride App Authentication
      </h1>

      <input
        type="email"
        placeholder="Email"
        className="p-3 rounded text-black w-80"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        className="p-3 rounded text-black w-80"
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

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      <p>{message}</p>
    </div>
  )
}