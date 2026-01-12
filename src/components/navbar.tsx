"use client";
import { useState } from "react";
import { NavLinks } from "./nav-links";   // Must be in { }
import { NavSearch } from "./nav-search"; // Must be in { }

export const Navbar = () => {
    return (
        <nav>
            <NavLinks />
            <NavSearch />
        </nav>
    );
};