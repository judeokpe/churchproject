
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"

export default function Sermon() {
  return (
    <>
      <div className="bg-gray-50 py-6 lg:py-10">
        <div className="container grid md:gap-6 items-start px-4 md:px-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sermons</h1>
            <p className="text-gray-500 dark:text-gray-400">Listen to the Word.</p>
          </div>
        </div>
      </div>
      <div className="container grid md:grid-cols-[1fr_300px] lg:gap-6 lg:grid-cols-[2fr_1fr] xl:grid-cols-[2fr_1fr] 2xl:grid-cols-[2fr_1fr]">
        <div className="space-y-6 px-4 md:px-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The Power of Faith</h2>
            <p className="text-gray-500 dark:text-gray-400">By Pastor Amanda Lee</p>
            <p className="text-gray-500 dark:text-gray-400">May 30, 2023</p>
          </div>
          <div className="mx-auto rounded-xl overflow-hidden shadow-lg aspect-video">
            <span className="w-full aspect-inner rounded-md bg-muted" />
          </div>
          <div className="prose max-w-none">
            <p>
              In this sermon, Pastor Amanda Lee shares her insights on the power of faith in our daily lives. She delves
              into the biblical perspective on faith and provides practical examples of how faith can move mountains.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-gray-200 pt-4 md:pt-0 md:border-0 md:grid md:gap-4 md:items-start md:justify-start md:px-6 lg:gap-2">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium sr-only dark:text-gray-300" htmlFor="search">
              Search
            </label>
            <Input
              className="h-10 w-full max-w-sm text-sm dark:placeholder-gray-300"
              id="search"
              placeholder="Search sermons"
              type="text"
            />
          </div>
          <div className="space-y-2">
            <h3 className="font-bold">Filter by</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox className="h-4 w-4" id="series" />
                <label className="text-sm font-medium" htmlFor="series">
                  Series
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="h-4 w-4" id="date" />
                <label className="text-sm font-medium" htmlFor="date">
                  Date
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="h-4 w-4" id="speaker" />
                <label className="text-sm font-medium" htmlFor="speaker">
                  Speaker
                </label>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <h3 className="text-lg font-semibold">Sermon Series</h3>
            <ul className="grid gap-2">
              <li>
                <Link className="text-sm font-medium hover:underline dark:hover:underline" href="#">
                  The Gospel of Mark
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium hover:underline dark:hover:underline" href="#">
                  Faith in Action
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium hover:underline dark:hover:underline" href="#">
                  Hope in the Storm
                </Link>
              </li>
              <li>
                <Link className="text-sm font-medium hover:underline dark:hover:underline" href="#">
                  Encounters with Jesus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 border-t border-gray-200 dark:border-gray-800">
        <div className="container py-8 grid items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <h3 className="text-xl font-bold">Want to listen to more inspiring sermons?</h3>
            <p className="text-gray-500 dark:text-gray-400">Check out our full collection of sermons and messages.</p>
          </div>
          <Link
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            href="#"
          >
            View All Sermons
          </Link>
        </div>
      </div>
    </>
  )
}

