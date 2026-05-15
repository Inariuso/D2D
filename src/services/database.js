import app from "../firebase/config"

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore"

const db = getFirestore(app)

export const createPassengerProfile = async (user) => {

    try {
  
      console.log("Creating Firestore profile...")
  
      const userRef = doc(db, "users", user.uid)
  
      await setDoc(userRef, {
        uid: user.uid,
        email: user.email,
        role: "passenger",
        createdAt: new Date(),
      })
  
      console.log("Firestore profile created successfully")
  
    } catch (error) {
  
      console.error("Firestore Error:", error)
  
    }
  }

export default db