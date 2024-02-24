"use client";
import { IoClose } from "react-icons/io5";
import React, { useState } from "react";
import Link from "next/link";

interface MenuProp{
    open:boolean,
    setOpen:boolean
}

function MobileMenu({open, setOpen}:MenuProp) {
    
  return (
    <div className="flex flex-col items-center  absolute top-14 w-1/2 py-6 bg-black left-0 h-full text-white text-xl">
      <div className="flex items-center">
        <div className="flex flex-col">
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="/give"
          >
            Give
          </Link>
          <Link
            className="font-medium hover:underline underline-offset-4"
            href="/live"
          >
            Watch Live
          </Link>
          <Link
            className="font-medium hover:underline underline-offset-4"
            href="/prayer"
          >
            Prayer
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="font-medium hover:underline underline-offset-4"
            href="register"
          >
            Sign Up
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="/login"
          >
            Sign In
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="/about"
          >
            About Us
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="/sermons"
          >
            Sermons
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="/event"
          >
            Events
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className=" font-medium hover:underline underline-offset-4"
            href="contact"
          >
            Contact
          </Link>
          <button onClick={()=>setOpen(!open)} className="absolute top-3  right-0 px-2">
          <IoClose color="white" h-5 w-5 />
        </button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
