"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  PopoverTrigger,
  PopoverContent,
  Popover,
} from "@/components/ui/popover";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
} from "@/components/ui/sheet";
import Image from "next/image";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

export function Landing() {
  const [sheetSide, setSheetSide] = useState<SheetSide>("bottom");

  useEffect(() => {
    const updateSheetSide = () => {
      if (window.innerWidth >= 768) {
        // 768px for typical breakpoint for larger screens
        setSheetSide("right");
      } else {
        setSheetSide("bottom");
      }
    };

    updateSheetSide();
    window.addEventListener("resize", updateSheetSide);

    return () => window.removeEventListener("resize", updateSheetSide);
  }, []);

  const sheetWidth = sheetSide === 'bottom' ? '100%' : '80 md:w-64';
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black relative">
      <div className="flex justify-between items-center w-full px-4 sm:px-8 py-2">
        <div className="flex items-center">
          <Image
            alt="Company Logo"
            className="object-contain object-center rounded-full"
            height={80}
            src="/placeholder.png"
            layout="fixed"
            width={80}
          />
          <h2 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white sm:ml-4 sm:text-3xl">
            rent a product ui
          </h2>
        </div>
        <Button className="text-gray-900 dark:text-white" variant="ghost">
          <svg
            className=" text-gray-900 dark:text-white"
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
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        </Button>
      </div>
      <div className="w-full overflow-hidden">
        <Image
          alt="Image Banner"
          className="object-cover object-center"
          height={800}
          src="/placeholder.png"
          layout="responsive"
          width={1920}
        />
      </div>
      <div className="w-3/4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col items-start bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
          <Image
            alt="Product 1"
            className="object-contain object-center"
            height={150}
            src="/placeholder.png"
            layout="responsive"
            width={300}
          />
          <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
            Product 1
          </h3>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            Price: $50
          </p>
          <input
            className="mt-2 p-2 w-full border border-gray-300 bg-white dark:bg-gray-800 rounded-md"
            min="1"
            placeholder="Quantity"
            type="number"
          />
          <Button className="mt-2 w-full" variant="outline">
            Add to Cart
          </Button>
        </div>
        <div className="flex flex-col items-start bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
          <Image
            alt="Product 2"
            className="object-contain object-center"
            height={150}
            src="/placeholder.png"
            layout="responsive"
            width={300}
          />
          <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
            Product 2
          </h3>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            Price: $60
          </p>
          <input
            className="mt-2 p-2 w-full border border-gray-300 bg-white dark:bg-gray-800 rounded-md"
            min="1"
            placeholder="Quantity"
            type="number"
          />
          <Button className="mt-2 w-full" variant="outline">
            Add to Cart
          </Button>
        </div>
        <div className="flex flex-col items-start bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
          <Image
            alt="Product 3"
            className="object-contain object-center"
            height={150}
            src="/placeholder.png"
            layout="responsive"
            width={300}
          />
          <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
            Product 3
          </h3>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            Price: $70
          </p>
          <input
            className="mt-2 p-2 w-full border border-gray-300 bg-white dark:bg-gray-800 rounded-md"
            min="1"
            placeholder="Quantity"
            type="number"
          />
          <Button className="mt-2 w-full" variant="outline">
            Add to Cart
          </Button>
        </div>
        <div className="flex flex-col items-start bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
          <Image
            alt="Product 4"
            className="object-contain object-center"
            height={150}
            src="/placeholder.png"
            layout="responsive"
            width={300}
          />
          <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
            Product 4
          </h3>
          <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
            Price: $80
          </p>
          <input
            className="mt-2 p-2 w-full border border-gray-300 bg-white dark:bg-gray-800 rounded-md"
            min="1"
            placeholder="Quantity"
            type="number"
          />
          <Button className="mt-2 w-full" variant="outline">
            Add to Cart
          </Button>
        </div>
      </div>
      <footer className="w-full py-6 bg-black dark:bg-black text-center">
        <p className="text-white dark:text-white">
          © 2023 rent a product. All rights reserved.
        </p>
      </footer>

    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open Cart"
          className="fixed bottom-4 right-4 p-4 bg-black rounded-full shadow-lg text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black z-50 transform transition-transform duration-200 hover:scale-105"
        >
                      <svg
              className=" text-white"
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
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
        </button>
      </SheetTrigger>
      <SheetContent side={sheetSide} className={`${sheetWidth} bg-white dark:bg-gray-900`}>
        {/* ... rest of the Sheet content ... */}
        <Card>
            <CardHeader>
              <CardTitle>Your Cart</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your cart is currently empty.</p>
            </CardContent>
            <CardFooter>
              <Button variant="default">Checkout</Button>
            </CardFooter>
          </Card>
      </SheetContent>
    </Sheet>
    </section>
  );
}
