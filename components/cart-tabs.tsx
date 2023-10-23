import { TabsTrigger, TabsList, TabsContent, Tabs } from "@/components/ui/tabs"
import { CardTitle, CardHeader, CardContent, Card, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function CartTabs() {
  return (
    <Tabs className="w-full max-w-3xl" defaultValue="cart">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="cart">Cart</TabsTrigger>
        <TabsTrigger value="event">Event</TabsTrigger>
        <TabsTrigger value="confirm">Sign</TabsTrigger>
        <TabsTrigger value="pay">Pay</TabsTrigger>
      </TabsList>
      <TabsContent value="cart">
        <Card>
          <CardHeader>
            <CardTitle>Your Cart</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border p-4 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    alt="Product 1"
                    height="50"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width="50"
                  />
                  <div className="font-semibold">Product 1</div>
                </div>
                <div>$99</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm text-gray-500">Quantity:</div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline">-</Button>
                  <div>1</div>
                  <Button variant="outline">+</Button>
                </div>
              </div>
            </div>
            <div className="border p-4 rounded-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    alt="Product 2"
                    height="50"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "50/50",
                      objectFit: "cover",
                    }}
                    width="50"
                  />
                  <div className="font-semibold">Product 2</div>
                </div>
                <div>$199</div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <div className="text-sm text-gray-500">Quantity:</div>
                <div className="flex items-center space-x-2">
                  <Button variant="outline">-</Button>
                  <div>1</div>
                  <Button variant="outline">+</Button>
                </div>
              </div>
            </div>
            {/* <Button className="w-full mt-4">Proceed to Confirmation</Button> */}
            <Button className="w-full flex justify-between hover:animate-pulse" variant="default">
              <span>Proceed to Checkout</span>
              <span className="flex items-center">
                Total: $170
                <svg
                  className=" ml-2 animate-slide"
                  fill="none"
                  height="24"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent className="transition-all duration-500 ease-in-out" value="cart" />
      <TabsContent className="transition-all duration-500 ease-in-out" value="event">
        <Card className="transition-all duration-500 ease-in-out">
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 transition-all duration-500 ease-in-out">
            <div className="space-y-2 transition-all duration-500 ease-in-out">
              <Label htmlFor="eventName">Event Name</Label>
              <Input id="eventName" placeholder="Enter event name" />
            </div>
            <div className="space-y-2 transition-all duration-500 ease-in-out">
              <Label htmlFor="eventDate">Event Date</Label>
              <Input id="eventDate" placeholder="Enter event date" />
            </div>
            <div className="space-y-2 transition-all duration-500 ease-in-out">
              <Label htmlFor="eventLocation">Event Location</Label>
              <Input id="eventLocation" placeholder="Enter event location" />
            </div>
            <Button className="w-full mt-4 transition-all duration-500 ease-in-out">Proceed to Confirmation</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="confirm">
        <Card>
          <CardHeader>
            <CardTitle>Confirm & Sign</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start">
              <Checkbox id="terms" />
              <Label className="ml-2" htmlFor="terms">
                I accept the terms and conditions
              </Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="signature">Signature</Label>
              <Input id="signature" placeholder="Sign here" />
            </div>
            <Button className="w-full mt-4">Proceed to Payment</Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="pay">
        <Card>
          <CardHeader>
            <CardTitle>Pay</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="Enter your card number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="CVC" />
            </div>
            <Button className="w-full mt-4">Complete Payment</Button>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
