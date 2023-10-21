"use client";
import React, { useState, useEffect } from "react";
import {} from "@/components/ui/popover";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { Footer } from "@/components/footer";
import { CartSheet } from "@/components/cart-sheet";
import { Banner } from "@/components/banner";

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

  const sheetWidth = sheetSide === "bottom" ? "100%" : "80 md:w-64";
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black relative">
      <Header />
      <Banner />
      <div className="w-3/4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((_, index) => (
          <ProductCard
            alt="Product Image"
            src="/placeholder.png"
            title="Product Title"
            price={4.99}
          />
        ))}
      </div>
      <Footer />
      <CartSheet sheetSide={sheetSide} sheetWidth={sheetWidth} />
    </section>
  );
}
