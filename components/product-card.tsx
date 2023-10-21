'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge"


interface ProductCardProps {
  alt: string;
  src: string;
  title: string;
  price: number;
  color: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ alt, src, title, price, color }) => {
  return (
    <div className="flex flex-col items-start bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
      <div className="w-full h-64 relative">
        <Image
          alt={alt}
          className="object-contain object-center"
          layout="fill"
          objectFit="cover"
          src={src}
        />
      </div>
      <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="flex flex-row space-x-2">
        <Badge className="text-md font-medium">
          {color}
        </Badge>
        <Badge className="text-md font-medium">
          ${price}
        </Badge>
      </div>
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
  );
};