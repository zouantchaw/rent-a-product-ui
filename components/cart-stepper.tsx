import React, { useState } from "react";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "../data";
import { CartItem } from "@/components/landing";
import Image from "next/image";
import { useToast } from "./ui/use-toast";
interface CartStepperProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export function CartStepper({ cart, setCart }: CartStepperProps) {
  const {toast} = useToast();
  const [step, setStep] = useState(0);
  const [eventDetails, setEventDetails] = useState({
    location: '',
    time: '',
    date: '',
    renterName: '',
    email: '',
    phone: '',
  });
  const [error, setError] = useState('');

  const nextStep = () => {
    if (step === 0 && cart.length === 0) {
      setError('Your cart is empty.');
      return;
    }
    if (step === 1 && !validateEventDetails()) {
      setError('Please fill in all event details.');
      return;
    }
    setError('');
    setStep(step + 1);
  };

  const prevStep = () => {
    setError('');
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const validateEventDetails = () => {
    return Object.values(eventDetails).every((detail) => detail.trim() !== '');
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 0) {
      toast({
        title: "Error",
        description: "Quantity cannot be negative.",
      });
      return;
    }
    setCart(
      cart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
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
      {error && <div className="text-red-500">{error}</div>}
      {step !== 0 && (
        <Button
          onClick={prevStep}
          className="mb-3 bg-transparent text-gray-500 hover:text-gray-200 dark:text-white dark:hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 dark:focus:ring-gray-400 z-50 transform transition-transform duration-200 hover:scale-105"
        >
          Back
        </Button>
      )}
      {step === 0 && (
        <Card className="transition-all duration-500 ease-in-out flex flex-col">
          <CardHeader>
            <CardTitle>Review Your Cart</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 transition-all duration-500 ease-in-out flex-grow">
            {renderCartContent()}
            <Button
              onClick={nextStep}
              className="w-full mt-4 transition-all duration-500 ease-in-out"
            >
              Proceed to Event Details
            </Button>
          </CardContent>
        </Card>
      )}
      {step === 1 && (
        <Card className="transition-all duration-500 ease-in-out">
          <CardHeader>
            <CardTitle>Event Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 transition-all duration-500 ease-in-out">
            <Input
              name="location"
              value={eventDetails.location}
              onChange={handleInputChange}
              placeholder="Enter event location"
            />
            <Input
              name="date"
              value={eventDetails.date}
              onChange={handleInputChange}
              placeholder="Enter event date"
            />
            <Input
              name="time"
              value={eventDetails.time}
              onChange={handleInputChange}
              placeholder="Enter event time"
            />
            <Input
              name="renterName"
              value={eventDetails.renterName}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
            <Input
              name="email"
              value={eventDetails.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
            />
            <Input
              name="phone"
              value={eventDetails.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
            />
            <Button
              onClick={nextStep}
              className="w-full mt-4 transition-all duration-500 ease-in-out"
            >
              Confirm Details
            </Button>
          </CardContent>
        </Card>
      )}
      {step === 2 && (
        <Card className="transition-all duration-500 ease-in-out">
          <CardHeader>
            <CardTitle>Order Confirmation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 transition-all duration-500 ease-in-out">
            <p>Your order has been sent. Please check your email for confirmation and further instructions.</p>
            <Button
              onClick={() => {
                toast({
                  title: "Order Confirmed",
                  description: "Thank you for your order. We will be in touch soon!",
                });
                setCart([]);
                setStep(0);
              }}
              className="w-full mt-4 transition-all duration-500 ease-in-out"
            >
              Finish
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

