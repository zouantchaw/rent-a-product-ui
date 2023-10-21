import React from "react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

export const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-full px-4 sm:px-8 py-2">
      <div className="flex items-center">
        <Image
          alt="Company Logo"
          className="object-contain object-center rounded-full"
          height={80} 
          src="/klutch-logo.png"
          layout="fixed"
          width={80}
        />
        <h2 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white sm:ml-4 sm:text-3xl">
          Klutch Rentals
        </h2>
      </div>
      <ModeToggle />
    </div>
  );
};