import React, { useState } from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { products, Product } from "../data";
import { CartItem } from "@/components/landing";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
interface CartStepperProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export function CartStepper({ cart, setCart }: CartStepperProps) {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const renderCartContent = () => (
    <div>
      {cart.map((item, index) => {
        const product = products.find((p) => p.id === item.id);
        return product ? (
          <div
            key={index}
            className="border p-4 rounded-md transition-all duration-500 ease-in-out"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Image
                  alt={product.name}
                  height={50}
                  src={product.image}
                  objectFit="cover"
                  width={50}
                />
                <div className="font-semibold">{product.name}</div>
              </div>
              <div>${product.price}</div>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-sm text-gray-500">Quantity:</div>
              <div className="flex items-center space-x-2">
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="transition-all duration-500 ease-in-out"
                  variant="outline"
                >
                  -
                </Button>
                <div>{item.quantity}</div>
                <Button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="transition-all duration-500 ease-in-out"
                  variant="outline"
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );

  return (
    <div className="w-full max-w-3xl transition-all duration-500 ease-in-out">
      {step !== 0 && (
        <Button
          onClick={prevStep}
          className="mb-3 bg-transparent text-gray-500 hover:text-gray-200 dark:text-white dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400 z-50 transform transition-transform duration-200 hover:scale-105"
        >
          {" "}
          <svg
            className=" text-gray-500 h-4 w-4 mr-2"
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
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
          </svg>
        </Button>
      )}
      {step === 0 && (
        <Card className="transition-all duration-500 ease-in-out flex flex-col">
          <CardHeader>
            <CardTitle>Your Cart</CardTitle>
          </CardHeader>
          {cart.length > 3 ? (
            <CardContent className="space-y-4 transition-all duration-500 ease-in-out">
              <ScrollArea className="max-h-96 overflow-y-auto flex-grow">
                {renderCartContent()}
              </ScrollArea>
              <Button
                onClick={nextStep}
                className="w-full mt-4 transition-all duration-500 ease-in-out"
              >
                Proceed to Confirmation
              </Button>
            </CardContent>
          ) : (
            <CardContent className="space-y-4 transition-all duration-500 ease-in-out flex-grow">
              {renderCartContent()}
              <Button
                onClick={nextStep}
                className="w-full mt-4 transition-all duration-500 ease-in-out"
              >
                Proceed to Confirmation
              </Button>
            </CardContent>
          )}
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
