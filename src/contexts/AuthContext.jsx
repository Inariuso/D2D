import {
    createContext,
    useContext,
    useEffect,
    useState,
  } from "react"
  
  import {
    onAuthStateChanged,
    getAuth,
  } from "firebase/auth"
  
  import app from "../firebase/config"
  
  const AuthContext = createContext()
  
  const auth = getAuth(app)
  
  export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
    useEffect(() => {
  
      const unsubscribe = onAuthStateChanged(
        auth,
        (currentUser) => {
          setUser(currentUser)
          setLoading(false)
        }
      )
  
      return () => unsubscribe()
  
    }, [])
  
    return (
      <AuthContext.Provider
        value={{
          user,
        }}
      >
        {!loading && children}
      </AuthContext.Provider>
    )
  }
  
  export function useAuth() {
    return useContext(AuthContext)
  }