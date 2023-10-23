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
import { useWindowSize } from "@react-hook/window-size";
import { getDictionary } from "../util/get-dictionary";

const SHEET_SIDES = ["top", "right", "bottom", "left"] as const;

export type SheetSide = (typeof SHEET_SIDES)[number];

export type Dictionary = {
  greeting: string;
  products: {
    cart: string;
    checkout: string;
  };
  event: {
    create: string;
    date: string;
    time: string;
  };
};

export type CartItem = {
  id: string;
  quantity: number;
};

export function Landing() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [sheetSide, setSheetSide] = useState<SheetSide>("bottom");
  const [locale, setLocale] = useState<string>("en");
  const [dictionary, setDictionary] = useState<Dictionary>({
    greeting: "",
    products: {
      cart: "",
      checkout: "",
    },
    event: {
      create: "",
      date: "",
      time: "",
    },
  });
  const [width] = useWindowSize();
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = window.localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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

  useEffect(() => {
    updateSheetSide();
    setIsOpen(true);
  }, [width]);

  useEffect(() => {
    const fetchDictionary = async () => {
      const dict = await getDictionary(locale); // Await the Promise
      setDictionary(dict);
    };

    fetchDictionary();
  }, [locale]); // Depend on locale

  const sheetWidth = sheetSide === "bottom" ? "100%" : "80 md:w-full";
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black relative">
      <Header locale={locale} setLocale={setLocale} />
      <CreateEventForm
        dictionary={dictionary}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isMobile={isMobile}
        side={sheetSide}
        sheetWidth={sheetWidth}
      />
      <Banner />
      <div className="w-3/4 py-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((product, index) => (
          <ProductCard 
            key={index}
            alt="Product Image"
            src={product.image}
            id={product.id}
            title={product.name}
            price={product.price}
            color={product.color}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
      <Footer />
      <CartSheet sheetSide={sheetSide} sheetWidth={sheetWidth} cart={cart} setCart={setCart} />
    </section>
  );
}
