
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { CardHeader, CardContent, Card } from "@/components/ui/card"

export default function Profile() {
  return (
    <div className="flex items-center w-full justify-center h-full">
    <Card className="w-full max-w-3xl">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-12 h-12">
              <div>AC</div>
            </Avatar>
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">Alex Campbell</h1>
              <Button size="sm" variant="ghost">
                Edit Profile
              </Button>
            </div>
          </div>
          <div>
            <div className="btn btn-outline btn-square btn-sm">Edit Profile</div>
            <div>
              <div>
                <div>Update your profile information.</div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage alt="Avatar" src="/placeholder-user.jpg" />
                    <div>AC</div>
                  </Avatar>
                  <div className="space-y-2">
                    <div className="space-y-2">
                      <Label htmlFor="file">Profile Picture</Label>
                      <Input accept="image/*" className="mt-1" id="file" type="file" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value="Alex Campbell" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" value="alex@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" type="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea className="min-h-[100px]" id="address" placeholder="Enter your address" />
                </div>
                <div className="space-y-2">
                  <Label>Roles</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="choir" />
                      <Label htmlFor="choir">Choir Member</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="teacher" />
                      <Label htmlFor="teacher">Sunday School Teacher</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="usher" />
                      <Label htmlFor="usher">Usher</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="volunteer" />
                      <Label htmlFor="volunteer">Volunteer</Label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>Cancel</div>
                <div>Save</div>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold">Personal Information</h2>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <div id="name">Alex Campbell</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="dob">Date of Birth</Label>
              <div id="dob">May 3, 1985</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div id="email">alex@example.com</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <div id="phone">+1 (123) 456-7890</div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <div id="address">123 Street Rd, Apt 4B, Cityville, State, 10001</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <h2 className="text-2xl font-bold">Roles</h2>
            </div>
            <div className="space-y-2">
              <ul className="list-disc list-inside">
                <li>Choir Member</li>
                <li>Sunday School Teacher</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}

