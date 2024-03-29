import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";
import { LangSelector } from "./lang-selector";
import { getDictionary } from '@/util/get-dictionary';


interface HeaderProps {
  locale: string;
  setLocale: React.Dispatch<React.SetStateAction<string>>;
}

export const Header: React.FC<HeaderProps> = ({ locale, setLocale }) => {
  useEffect(() => {
    const fetchDict = async () => {
      const result = await getDictionary("en"); // en
      console.log(result);
    };

    fetchDict();
  }, []);
  return (
    <div className="flex justify-between items-center w-full px-4 sm:px-8 py-2">
      <div className="flex items-center">
        <Image
          alt="Company Logo"
          className="object-contain object-center rounded-full"
          height={80} 
          src="/frederickpartyrentalslogo.png"
          layout="fixed"
          width={80}
        />
        <h2 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white sm:ml-4 sm:text-3xl">
          Frederick Party Rentals
        </h2>
      </div>
      <div className="flex space-x-4">
        {/* <LangSelector /> */}
        <ModeToggle />
      </div>
    </div>
  );
};