import { CheckCircleIcon } from 'lucide-react'
import React from 'react'

function Mission() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
    <div className="container grid items-center gap-10 px-4 text-center md:px-6 lg:gap-16">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          To share the love of Christ, make disciples, and transform lives.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Vision</h2>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
          A community where all are welcomed, inspired, and equipped to live out God's purpose.
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Values</h2>
        <ul className="mx-auto max-w-[600px] grid gap-2 text-left md:gap-4 lg:gap-2">
          <li className="flex items-start gap-2">
            <CheckCircleIcon className="h-4 w-4 mt-1.5" />
            <p className="text-sm">Faith: Trusting in God's love and grace.</p>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleIcon className="h-4 w-4 mt-1.5" />
            <p className="text-sm">Community: Supporting and caring for one another.</p>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleIcon className="h-4 w-4 mt-1.5" />
            <p className="text-sm">Service: Sharing God's love through action.</p>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircleIcon className="h-4 w-4 mt-1.5" />
            <p className="text-sm">Inclusion: Welcoming all with open hearts and minds.</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Mission
