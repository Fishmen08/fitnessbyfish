import React from "react";
import About from "./About";
import Location from "./Location";
import MainPage from "./Mainpage";
import Testimonials from "./Testimonials";

export default function SinglePage() {
    return (
        <div>
            <MainPage />
            <About />
            <Testimonials />
            <Location />
        </div>
    )
}