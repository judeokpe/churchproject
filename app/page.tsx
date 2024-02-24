import Navbar from "@/components/Navbar";
import Image from "next/image";

import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import Connect from "@/components/Connect";
import Worship from "@/components/Worship";

import React from 'react'
import Gallery from "@/components/Gallery";

function page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
       <Hero />
       <Mission/>
       <Gallery />
       <Services />
       <Connect />
        <Worship/>
        </main >
      </div>
  )
}

export default page



