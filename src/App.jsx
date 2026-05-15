import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import PassengerDashboard from "./pages/PassengerDashboard"
import Trips from "./pages/Trips"
import Profile from "./pages/Profile"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<PassengerDashboard />}
        />

        <Route
          path="/trips"
          element={<Trips />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>

    </BrowserRouter>
  )
}