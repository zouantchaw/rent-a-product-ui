'use client';
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  alt: string;
  src: string;
  title: string;
  price: number;
}

export const ProductCard: React.FC<ProductCardProps> = ({ alt, src, title, price }) => {
  return (
    <div className="flex flex-col items-start bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200">
      <Image
        alt={alt}
        className="object-contain object-center"
        height={150}
        src={src}
        layout="responsive"
        width={300}
      />
      <h3 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-lg font-medium text-gray-600 dark:text-gray-400">
        Price: ${price}
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
  );
};