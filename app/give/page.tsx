
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"



export default function Donation() {
  return (
    <>
      <div className="bg-gray-50/90 py-6 w-full">
        <div className="container flex items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Donate to our Ministry</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your generosity allows us to continue our mission and support our community. Thank you for your
              contribution.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-12 px-4 md:px-6 lg:gap-20">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support our Ministry</h2>
              <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Your donations help us make a difference in the lives of others. We are grateful for your support.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label className="form-label" htmlFor="name">
                  Full Name
                </Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div className="space-y-2">
                <Label className="form-label" htmlFor="email">
                  Email Address
                </Label>
                <Input id="email" placeholder="Enter your email address" required type="email" />
              </div>
              <div className="space-y-2">
                <Label className="form-label" htmlFor="phone">
                  Phone Number
                </Label>
                <Input id="phone" placeholder="Enter your phone number" required type="tel" />
              </div>
              <div className="space-y-2">
                <Label className="form-label" htmlFor="amount">
                  Donation Amount
                </Label>
                <Select id="amount" required>
                  <option>$25.00</option>
                  <option>$50.00</option>
                  <option>$100.00</option>
                  <option>$250.00</option>
                  <option>$500.00</option>
                  <option>$1000.00</option>
                  <option>Custom Amount</option>
                </Select>
              </div>
              <div className="space-y-2">
                <div className="space-y-2">
                  <Label className="form-label" htmlFor="message">
                    Message (optional)
                  </Label>
                  <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
                </div>
              </div>
              <div className="space-y-2">
                <Checkbox defaultChecked id="subscribe">
                  Subscribe to our newsletter
                </Checkbox>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By checking this box, you agree to receive our newsletter and updates about our ministry. You can
                  unsubscribe at any time.
                </p>
              </div>
            </div>
            <Button className="w-full md:w-auto">Donate Now</Button>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container grid gap-12 px-4 py-12 md:grid-cols-2 md:py-16 lg:grid-cols-4 lg:gap-20">
          <div className="flex flex-col items-start gap-2">
            <div className="font-semibold">Credit Card</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              We accept Visa, Mastercard, American Express, and Discover payments.
            </p>
            <Button size="sm">Add Card</Button>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="font-semibold">Bank Transfer</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Securely connect your bank account for one-click donations.
            </p>
            <Button size="sm">Connect Account</Button>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="font-semibold">PayPal</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Use your PayPal account to donate. It's fast, easy, and secure.
            </p>
            <Button size="sm">Donate with PayPal</Button>
          </div>
          <div className="flex flex-col items-start gap-2">
            <div className="font-semibold">Cryptocurrency</div>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Support our ministry with Bitcoin, Ethereum, or other cryptocurrencies.
            </p>
            <Button size="sm">Donate Crypto</Button>
          </div>
        </div>
      </div>
      <div className="w-full py-12 md:py-24 lg:py-32">
        <div className="container flex flex-col gap-4 px-4 md:px-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Thank you for your Donation</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Your support makes a difference. We are grateful for your generosity and commitment to our ministry.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container flex flex-col gap-4 py-12 md:py-24 lg:py-32">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Other Ways to Give</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
              There are many ways to support our ministry. In addition to monetary donations, you can also contribute by
              volunteering your time, sharing your talents, or participating in our fundraising events.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Volunteer</h3>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Make a difference in your community by volunteering with us. We are always looking for dedicated
                individuals to help us with various programs and initiatives. Whether you have a few hours to spare or
                can commit to a regular schedule, your time and effort are greatly appreciated.
              </p>
              <Button size="lg">Contact Us</Button>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl">Fundraising</h3>
              <p className="max-w-prose text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Help us raise funds for a good cause! We organize various fundraising events throughout the year,
                including charity dinners, fun runs, and raffles. These events not only allow us to collect donations
                but also raise awareness about our mission and connect with the community. Whether you want to
                participate, sponsor an event, or make a contribution, your support will help us make a positive impact.
              </p>
              <Button size="lg">Donate Now</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container grid max-w-6xl items-start gap-4 px-4 py-12 md:grid-cols-3 md:gap-8 md:py-16 lg:gap-10">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Have a question or need more information? Contact our team.
            </p>
            <Link className="text-sm font-semibold underline" href="#">
              Contact Support
            </Link>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Privacy & Terms</h3>
            <nav className="flex flex-col gap-1 text-sm">
              <Link className="underline" href="#">
                Privacy Policy
              </Link>
              <Link className="underline" href="#">
                Terms of Service
              </Link>
              <Link className="underline" href="#">
                Acceptable Use Policy
              </Link>
              <Link className="underline" href="#">
                Privacy Settings
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Connect with Us</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Follow us on social media to stay up to date with the latest news and events.
            </p>
            <Button size="sm">Subscribe to Newsletter</Button>
          </div>
        </div>
      </div>
    </>
  )
}

