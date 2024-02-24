

import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import React from 'react'

function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sunday Worship</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Join us for in-person worship every Sunday at 10am. All are welcome!
          </p>
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
  )
}

export default Services
