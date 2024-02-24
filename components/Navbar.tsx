'use client'
import { MenuIcon, MountainIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
  

function Navbar() {

  const [open, setOpen] = useState(false)
  return (
    <header className="px-4 lg:px-6 ">
    <div className="container flex items-center justify-between h-14 px-4 sm:px-6">
      <nav className="hidden lg:flex lg:gap-4 xl:gap-6 md:text-md ">
        <Link className=" font-medium hover:underline underline-offset-4" href="/">
          Home
        </Link>
        <Link className=" font-medium hover:underline underline-offset-4" href="/about">
          About Us
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="/sermons">
          Sermons
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="/event">
          Events
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="/blog">
          Blog
        </Link>
        <Link className="font-medium hover:underline underline-offset-4" href="contact">
          Contact
        </Link>
      </nav>
      <Link className="flex items-center justify-center" href="#">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Redeem Church</span>
      </Link>
      <div className="hidden lg:flex lg:gap-4 xl:gap-6 md:text-md ">
        <Link className=" font-medium hover:underline underline-offset-4" href="/give">
          Give
        </Link>
        <Link className=" font-medium hover:underline underline-offset-4" href="/live">
          Watch Live
        </Link>
        <Link className=" font-medium hover:underline underline-offset-4" href="/prayer">
          Prayer
        </Link>
        <Link className=" font-medium hover:underline underline-offset-4" href="/contact">
          Contact
        </Link>
        <Link className=" font-medium hover:underline underline-offset-4" href="register">
          Sign Up
        </Link>
        <Link className=" font-medium hover:underline underline-offset-4" href="/login">
          Sign In
        </Link>
      </div>
      <button onClick={()=>setOpen(!open)} className="lg:hidden">
        <MenuIcon className="w-6 h-6"/>
        <span className="sr-only">Toggle Menu</span>
      </button>
      {open &&(
       <MobileMenu open={open} setOpen={setOpen}/>
      )}
    </div>
  </header>
    
  )
}

export default Navbar
