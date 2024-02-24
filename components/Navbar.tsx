'use client'
import { MenuIcon, MountainIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import MobileMenu from "./MobileMenu"
import { usePathname } from "next/navigation"
  
import { FaAngleDown } from "react-icons/fa";

const rightLink = [
  {name: 'Home', href:'/'},
  {name: 'About Us', href:'/about'},
  {name: 'Sermons', href:'/sermons'},
  {name: 'Events', href:'/event'},
  {name: 'Blog', href:'/blog'},
]
const leftLink = [
  {name: 'Give', href:'/give'},
  {name: 'Watch Live', href:'/live'},
  {name: 'Prayer', href:'/prayer'},
  {name: 'Contact', href:'/contact'},
]


function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  const pathname= usePathname()

  const [open, setOpen] = useState(false)
  return (
    <header className="px-4 lg:px-6 z-50 shadow-md border border-b ">
    <div className="container flex items-center justify-between h-14 px-4 sm:px-6">
      <nav className="hidden lg:flex lg:gap-4 xl:gap-6 md:text-md ">
       

        {rightLink.map((link)=>(
            <Link key={link.href} className=" font-medium hover:underline underline-offset-4" href={link.href}>
            {link.name}
          </Link>
        ))}
        
      </nav>
      <Link className="flex items-center justify-center" href="/">
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Redeem Church</span>
      </Link>
      <div className="hidden lg:flex lg:gap-4 xl:gap-6 md:text-md ">

        {leftLink.map((Item)=>(
          <Link className=" font-medium hover:underline underline-offset-4" href={Item.href}>
          {Item.name}
         
        </Link>
        ))}
         <div className="font-medium hover:underline underline-offset-4 relative">
            <button onClick={()=>setIsOpen(!isOpen)} className="flex items-center justify-center">Portal <FaAngleDown /></button>
            {isOpen &&(
              <div className="flex text-black flex-row justify-center bg-white dark:text-white gap-4 w-[400px] items-center absolute top-11 text-2xl  ring-1 px-4 py-2 right-2 ">
              <Link href='/Sign-in'>Sign In</Link>
              <div className="h-8 w-1 bg-black"/>
              <Link href='/sign-up'>Sign-Up</Link>
              </div>
            )}
          </div>
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
