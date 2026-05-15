import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import PassengerDashboard from "./pages/PassengerDashboard"
import Trips from "./pages/Trips"
import Profile from "./pages/Profile"
import Login from "./pages/Login"

import ProtectedRoute from "./components/ProtectedRoute"

export default function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <PassengerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trips"
          element={
            <ProtectedRoute>
              <Trips />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}