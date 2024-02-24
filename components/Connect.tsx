import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Link from 'next/link'

import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

import { FaXTwitter } from "react-icons/fa6";
function Connect() {
  return (
    <div>
       <section className="w-full py-12 md:py-24 lg:py-32 border-t">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Connect with Us</h2>
          <p className="text-gray-500 dark:text-gray-400">
          Follow us on social media for the latest updates and news.
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-8">
          <Link
            className="flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            <FaXTwitter className="w-8 h-8 fill-current " />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link
            className="flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            <FacebookIcon className="text-blue-600 w-8 h-8 fill-current" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link
            className="flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            <LinkedinIcon className="w-8 h-8 bg-blue-500 text-white fill-current" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            className="flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            <FaInstagramSquare className="w-8 h-8 text-gold fill-current" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            className="flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            <FaYoutube className="w-8 h-8 text-red-700 fill-current" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          
        </div>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2 lg:order-last lg:justify-self-end">
          <form className="grid gap-2">
            <Input placeholder="Enter your email" type="email" />
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Sign up to receive updates on events and news.
            <Link className="underline underline-offset-2" href="#">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Connect





function FacebookIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function InstagramIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}


function TwitterIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
