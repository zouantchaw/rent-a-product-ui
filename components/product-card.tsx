"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CartItem } from "@/components/landing";

interface ProductCardProps {
  alt: string;
  src: string;
  id: string;
  title: string;
  price: number;
  color: string;
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  alt,
  src,
  title,
  id,
  price,
  color,
  cart,
  setCart,
}) => {
  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = () => {
    const newCartItem: CartItem = { id: id, quantity: quantity };
    const existingCartItemIndex = cart.findIndex((item) => item.id === title);
    if (existingCartItemIndex > -1) {
      const updatedCart = [...cart];
      updatedCart[existingCartItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, newCartItem]);
    }
  };

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
        <Badge className="text-md font-medium">{color}</Badge>
        <Badge className="text-md font-medium">${price}</Badge>
      </div>
      <input
        className="mt-2 p-2 w-full border border-gray-300 bg-white dark:bg-gray-800 rounded-md"
        min="1"
        placeholder="Quantity"
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <Button className="mt-2 w-full" variant="outline" onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};
