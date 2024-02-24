
import Link from "next/link"

export default function Gallery() {
  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-white">
        <div className="relative group overflow-hidden rounded-lg">
          <img
            alt="Church Image"
            className="object-cover w-full h-60"
            height={400}
            src="/church7.jpeg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:bg-opacity-50 dark:text-gray-950">
            <span className="text-sm font-semibold">Sunday Service - August 23, 2023</span>
            <Link
              className="rounded-full border border-gray-200 border-opacity-50 p-2 translate-y-2 hover:scale-125 dark:border-gray-800 dark:border-opacity-75"
              href="#"
            >
              <ChevronRightIcon className="w-4 h-4" />
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <img
            alt="Church Image"
            className="object-cover w-full h-60"
            height={400}
            src="/church6.png"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:bg-opacity-50 dark:text-gray-950">
            <span className="text-sm font-semibold">Christmas Celebration - December 25, 2023</span>
            <Link
              className="rounded-full border border-gray-200 border-opacity-50 p-2 translate-y-2 hover:scale-125 dark:border-gray-800 dark:border-opacity-75"
              href="#"
            >
              <ChevronRightIcon className="w-4 h-4" />
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <img
            alt="Church Image"
            className="object-cover w-full h-60"
            height={400}
            src="/church5.jpeg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:bg-opacity-50 dark:text-gray-950">
            <span className="text-sm font-semibold">Baptism Ceremony - July 10, 2023</span>
            <Link
              className="rounded-full border border-gray-200 border-opacity-50 p-2 translate-y-2 hover:scale-125 dark:border-gray-800 dark:border-opacity-75"
              href="#"
            >
              <ChevronRightIcon className="w-4 h-4" />
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <img
            alt="Church Image"
            className="object-cover w-full h-60"
            height={400}
            src="/church3.jpeg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:bg-opacity-50 dark:text-gray-950">
            <span className="text-sm font-semibold">Easter Sunday - April 4, 2023</span>
            <Link
              className="rounded-full border border-gray-200 border-opacity-50 p-2 translate-y-2 hover:scale-125 dark:border-gray-800 dark:border-opacity-75"
              href="#"
            >
              <ChevronRightIcon className="w-4 h-4" />
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <img
            alt="Church Image"
            className="object-cover w-full h-60"
            height={400}
            src="/church2.webp"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:bg-opacity-50 dark:text-gray-950">
            <span className="text-sm font-semibold">Church Picnic - June 12, 2023</span>
            <Link
              className="rounded-full border border-gray-200 border-opacity-50 p-2 translate-y-2 hover:scale-125 dark:border-gray-800 dark:border-opacity-75"
              href="#"
            >
              <ChevronRightIcon className="w-4 h-4" />
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
        <div className="relative group overflow-hidden rounded-lg">
          <img
            alt="Church Image"
            className="object-cover w-full h-60"
            height={400}
            src="/church1.jpeg"
            style={{
              aspectRatio: "600/400",
              objectFit: "cover",
            }}
            width={600}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center bg-black bg-opacity-50 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-white dark:bg-opacity-50 dark:text-gray-950">
            <span className="text-sm font-semibold">Church Renovation - September 5, 2023</span>
            <Link
              className="rounded-full border border-gray-200 border-opacity-50 p-2 translate-y-2 hover:scale-125 dark:border-gray-800 dark:border-opacity-75"
              href="#"
            >
              <ChevronRightIcon className="w-4 h-4" />
              <span className="sr-only">Next</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRightIcon(props:any) {
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
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
