

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function Payer() {
  return (
    <div className="grid items-center gap-4 mt-6 mx-10 px-10">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold text-center">Submit a Prayer Request</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your information and prayer request below.</p>
      </div>
      <div className="border border-gray-200 rounded-lg p-6 w-full">
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                className="peer h-10 border border-gray-300 rounded-md w-full max-w-sm"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                className="peer h-10 border border-gray-300 rounded-md w-full max-w-sm"
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="prayer-request">Prayer Request</Label>
            <Textarea
              className="min-h-[100px] max-h-[200px] resize-y peer border border-gray-300 rounded-md w-full font-body leading-6 p-3"
              id="prayer-request"
              placeholder="Enter your prayer request"
              required
            />
          </div>
          <Button className="w-auto" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}

