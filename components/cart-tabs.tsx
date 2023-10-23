import React, { useState } from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function CartStepper() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="w-full max-w-3xl transition-all duration-500 ease-in-out">
      {step === 0 && (
        <Card className="transition-all duration-500 ease-in-out">
          <CardHeader>
            <CardTitle>Your Cart</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 transition-all duration-500 ease-in-out">
            <div className="border p-4 rounded-md transition-all duration-500 ease-in-out">
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
                  <Button
                    className="transition-all duration-500 ease-in-out"
                    variant="outline"
                  >
                    -
                  </Button>
                  <div>1</div>
                  <Button
                    className="transition-all duration-500 ease-in-out"
                    variant="outline"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <div className="border p-4 rounded-md transition-all duration-500 ease-in-out">
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
                  <Button
                    className="transition-all duration-500 ease-in-out"
                    variant="outline"
                  >
                    -
                  </Button>
                  <div>1</div>
                  <Button
                    className="transition-all duration-500 ease-in-out"
                    variant="outline"
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
            <Button
              onClick={nextStep}
              className="w-full mt-4 transition-all duration-500 ease-in-out"
            >
              Proceed to Confirmation
            </Button>
          </CardContent>
        </Card>
      )}
      {step === 1 && (
        <Card className="transition-all duration-500 ease-in-out">
          <CardHeader>
            <CardTitle>Confirm & Sign</CardTitle>
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
            <Button
              onClick={nextStep}
              className="w-full mt-4 transition-all duration-500 ease-in-out"
            >
              Proceed to Payment
            </Button>
          </CardContent>
        </Card>
      )}
      {step === 2 && (
        <Card className="transition-all duration-500 ease-in-out">
          <CardHeader>
            <CardTitle>Confirm & Sign</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 transition-all duration-500 ease-in-out">
            <div className="flex items-start transition-all duration-500 ease-in-out">
              <Checkbox id="terms" />
              <Label className="ml-2" htmlFor="terms">
                I accept the terms and conditions
              </Label>
            </div>
            <div className="space-y-2 transition-all duration-500 ease-in-out">
              <Label htmlFor="signature">Signature</Label>
              <Input id="signature" placeholder="Sign here" />
            </div>
            <Button
              onClick={nextStep}
              className="w-full mt-4 transition-all duration-500 ease-in-out"
            >
              Proceed to Payment
            </Button>
          </CardContent>
        </Card>
      )}
      {step === 3 && (
        <Card className="transition-all duration-500 ease-in-out">
          <CardHeader>
            <CardTitle>Pay</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 transition-all duration-500 ease-in-out">
            <div className="space-y-2 transition-all duration-500 ease-in-out">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="Enter your card number" />
            </div>
            <div className="space-y-2 transition-all duration-500 ease-in-out">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="space-y-2 transition-all duration-500 ease-in-out">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="CVC" />
            </div>
            <Button className="w-full mt-4 transition-all duration-500 ease-in-out">
              Complete Payment
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
