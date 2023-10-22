"use client";
import React, { useState, useEffect } from "react";
import {} from "@/components/ui/popover";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { Footer } from "@/components/footer";
import { CartSheet } from "@/components/cart-sheet";
import { Banner } from "@/components/banner";
import { products } from "../data";
import { CreateEventForm } from "./form/create-event";
import {
  useWindowSize,
} from '@react-hook/window-size'

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export type SheetSide = (typeof SHEET_SIDES)[number];


export function Landing() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sheetSide, setSheetSide] = useState<SheetSide>("bottom");
  const [width] = useWindowSize();

  useEffect(() => {
    const updateSheetSide = () => {
      if (width >= 768) {
        // 768px for typical breakpoint for larger screens
        setIsMobile(false);
        setSheetSide("right");
      } else {
        setIsMobile(true);
        setSheetSide("bottom");
      }
    };
    updateSheetSide();
    setIsOpen(true);
  }, [width]);

  const sheetWidth = sheetSide === "bottom" ? "100%" : "80 md:w-64";
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black relative">
      <Header />
      <CreateEventForm isOpen={isOpen} setIsOpen={setIsOpen} isMobile={isMobile} side={sheetSide} sheetWidth={sheetWidth} />
      <Banner />
      <div className="w-3/4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={product.id || index}
            alt="Product Image"
            src={product.image}
            title={product.name}
            price={product.price}
            color={product.color}
          />
        ))}
      </div>
      <Footer />
      <CartSheet sheetSide={sheetSide} sheetWidth={sheetWidth} />
    </section>
  );
}
