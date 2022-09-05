import React from "react";
import { useAuth } from "./AuthContext";
import UserNav from "./UserNav";
import Navbar from "./Navbar";

export default function NavbarHolder() {
    const {currentUser} = useAuth();
    return (
        <div>
            {currentUser ? <UserNav /> : <Navbar />}
        </div>
        
    )
}