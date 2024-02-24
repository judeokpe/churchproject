

import React from 'react'

function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-r from-yellow-100 to-gray-400  dark:bg-gray-800">
    <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to Redeem Church</h1>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          A place to connect with God and one another. Join us for worship, fellowship, and service.
        </p>
      </div>
    </div>
    </section>
  )
}

export default Hero
