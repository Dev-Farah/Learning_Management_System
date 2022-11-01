import React from "react";
import app from "../config/firebaseconfig";
import { getAuth, signOut } from "firebase/auth";
import ResponsiveAppBar from "../components/Navbar";
import Navbar from "../components/Navbar";


export default function Dashboard() {

    const auth = getAuth(app);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    

    return (
        <>
        <Navbar />
        <h1>Dashboard</h1>
        </>
    )
}