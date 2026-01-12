"use client";
import { useState } from "react"; // Ensure this import is at the top

export const NavSearch = () => {
    console.log("NavSearch rendered");
    // Change useStatew to useState
    const [search, setSearch] = useState(""); 

    return <div>Nav search input</div>;
};