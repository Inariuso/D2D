import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyAU3LqJfvuInh6pPiqq3XoTTy1lUXMgZqk",
    authDomain: "ride-app-bf612.firebaseapp.com",
    projectId: "ride-app-bf612",
    storageBucket: "ride-app-bf612.firebasestorage.app",
    messagingSenderId: "640742450642",
    appId: "1:640742450642:web:7459b7ecda9607ea22940b"
}

const app = initializeApp(firebaseConfig)

export default app