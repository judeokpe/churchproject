/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pbIHOomy8mv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { LucideProps } from "lucide-react"

export default function Member() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
        <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="#">
            <Package2Icon className="w-6 h-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Members
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Roles
          </Link>
          <Link className="text-gray-500 dark:text-gray-400" href="#">
            Events
          </Link>
        </nav>
        <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <form className="flex-1 ml-auto sm:flex-initial">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                placeholder="Search members..."
                type="search"
              />
            </div>
          </form>
          <Button className="rounded-full" size="icon" variant="ghost">
            <img
              alt="Avatar"
              className="rounded-full"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "32/32",
                objectFit: "cover",
              }}
              width="32"
            />
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Members</CardTitle>
              <Button className="h-8 w-8 rounded-full" size="icon">
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Add member</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-1 text-sm">
                <p className="flex items-center gap-2.5">
                  <UserIcon className="w-4 h-4" />
                  <span className="font-medium">Pastor John</span>
                  <span className="text-gray-500 dark:text-gray-400 shrink-0">@pastorjohn</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <UserIcon className="w-4 h-4" />
                  <span className="font-medium">Sister Mary</span>
                  <span className="text-gray-500 dark:text-gray-400 shrink-0">@sistermary</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <UserIcon className="w-4 h-4" />
                  <span className="font-medium">Brother James</span>
                  <span className="text-gray-500 dark:text-gray-400 shrink-0">@brotherjames</span>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
              <Button className="h-8 w-8 rounded-full" size="icon">
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Add event</span>
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-1 text-sm">
                <p className="flex items-center gap-2.5">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="font-medium">Sunday Service</span>
                  <span className="text-gray-500 dark:text-gray-400 shrink-0">10:00 AM</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="font-medium">Bible Study</span>
                  <span className="text-gray-500 dark:text-gray-400 shrink-0">7:00 PM</span>
                </p>
                <p className="flex items-center gap-2.5">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="font-medium">Choir Practice</span>
                  <span className="text-gray-500 dark:text-gray-400 shrink-0">5:00 PM</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Recent Updates</CardTitle>
              <Button className="h-8 w-8 rounded-full" size="icon">
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Add update</span>
              </Button>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm">
              <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="flex-1 grid gap-1.5">
                  <p className="font-semibold">Pastor John</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Shared a message of hope and faith. Let's spread the love of God to the world!
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img
                  alt="Avatar"
                  className="rounded-full"
                  height="40"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "40/40",
                    objectFit: "cover",
                  }}
                  width="40"
                />
                <div className="flex-1 grid gap-1.5">
                  <p className="font-semibold">Sister Mary</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Posted an inspiring quote: "With God, all things are possible."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Quick Actions</CardTitle>
              <Button className="h-8 w-8 rounded-full" size="icon">
                <PlusIcon className="h-4 w-4" />
                <span className="sr-only">Add action</span>
              </Button>
            </CardHeader>
            <CardContent>
              <ul className="grid gap-2.5 text-sm">
                <li>
                  <Link className="flex items-center gap-2.5 font-medium text-gray-900 dark:text-gray-50" href="#">
                    <UserIcon className="w-4 h-4" />
                    Members
                    <ChevronRightIcon className="w-4 h-4 ml-auto" />
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2.5 font-medium text-gray-900 dark:text-gray-50" href="#">
                    <UsersIcon className="w-4 h-4" />
                    Roles
                    <ChevronRightIcon className="w-4 h-4 ml-auto" />
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-2.5 font-medium text-gray-900 dark:text-gray-50" href="#">
                    <CalendarIcon className="w-4 h-4" />
                    Events
                    <ChevronRightIcon className="w-4 h-4 ml-auto" />
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function CalendarIcon(props:LucideProps) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}


function ChevronRightIcon(props:LucideProps) {
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


function Package2Icon(props:LucideProps) {
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
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function PlusIcon(props:any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props:LucideProps) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function UserIcon(props:any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props:any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
