"use client";
import React, { useState } from "react";
import { Menu, MenuItem,} from "./ui/navbar-menu"
import { cn } from "../lib/utils";
import Link from "next/link";

    function Navbar({className} : { className? : string}){
const [active, setActive] = useState<string | null>(null)
  return (
    <div className={cn (" fixed top-10 inset-x-0 max-w-2xl mx-auto z-50" )}>
      <Menu setActive={setActive}>
      <MenuItem setActive={setActive} active={active} item="Home">
  <Link href="/" onClick={() => setActive("Home")}>Home</Link>
</MenuItem>
<MenuItem setActive={setActive} active={active} item="Our courses">
  <Link href="/Courses" onClick={() => setActive("Our Curses")}>Our Courses</Link>
</MenuItem>
<MenuItem setActive={setActive} active={active} item="Contact Us">
  <Link href="/Contact" onClick={() => setActive("Contact Us")}>Contact Us</Link>
</MenuItem>
      </Menu>
    </div>
  )
} 

export default Navbar

      