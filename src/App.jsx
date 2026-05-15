import app from "./firebase/config"

export default function App() {
  console.log(app)

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-4xl font-bold">
        Firebase Connected Successfully
      </h1>
    </div>
  )
}