import { Link } from "react-router-dom"

export default function PassengerDashboard() {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
  
        {/* Header */}
        <header className="bg-black text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            Ride App
          </h1>
  
          <button className="bg-white text-black px-4 py-2 rounded-lg">
            Profile
          </button>
        </header>
  
        {/* Main Content */}
        <main className="flex-1 p-6 flex flex-col gap-6">
  
          <div>
            <h2 className="text-3xl font-bold">
              Welcome Passenger
            </h2>
  
            <p className="text-gray-600">
              Request a ride quickly and safely.
            </p>
          </div>
  
          {/* Pickup */}
          <input
            type="text"
            placeholder="Enter pickup location"
            className="p-4 rounded-xl border border-gray-300"
          />
  
          {/* Destination */}
          <input
            type="text"
            placeholder="Enter destination"
            className="p-4 rounded-xl border border-gray-300"
          />
  
          {/* Request Button */}
          <button className="bg-black text-white p-4 rounded-xl text-lg font-semibold">
            Request Ride
          </button>
  
        </main>
  
        {/* Bottom Navigation */}
        <nav className="bg-white border-t border-gray-300 p-4 flex justify-around">

            <Link to="/" className="font-semibold">
             Dashboard
            </Link>

            <Link to="/trips">
             Trips
            </Link>

            <Link to="/profile">
             Profile
            </Link>

        </nav>
  
      </div>
    )
  }