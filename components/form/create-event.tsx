"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectGroup,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SheetSide } from "../landing";

export function CreateEventForm({
  side,
  sheetWidth,
}: {
  side: SheetSide;
  sheetWidth: string;
}) {
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const isMobile = !(window.innerWidth >= 768); // 768px for typical breakpoint for larger screens
  const DialogOrSheet = isMobile ? Sheet : Dialog;
  const DialogOrSheetContent = isMobile
    ? (props: React.PropsWithChildren<{}>) => (
        <SheetContent
          side={side}
          className={`${sheetWidth} bg-white dark:bg-gray-900`}
          {...props}
        />
      )
    : DialogContent;
  const DialogOrSheetTrigger = isMobile ? SheetTrigger : DialogTrigger;
  const DialogOrSheetHeader = isMobile ? SheetHeader : DialogHeader;
  const DialogOrSheetTitle = isMobile ? SheetTitle : DialogTitle;
  const DialogOrSheetDescription = isMobile
    ? SheetDescription
    : DialogDescription;
  const DialogOrSheetFooter = isMobile ? SheetFooter : DialogFooter;

  return (
    <DialogOrSheet defaultOpen>
      <DialogOrSheetContent className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Create Event</CardTitle>
            <CardDescription>
              Welcome, thank you for choosing us! Let&apos;s get started by creating
              your event.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="delivery-method">Delivery or Pickup</Label>
              <Select onValueChange={setDeliveryMethod} value={deliveryMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="delivery">Delivery</SelectItem>
                    <SelectItem value="pickup">Pickup</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            {deliveryMethod === "delivery" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="address">Delivery Address</Label>
                  <Input id="address" placeholder="Enter your address" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="delivery-date">Delivery Date</Label>
                  <Input
                    id="delivery-date"
                    placeholder="Enter delivery date"
                    type="date"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="delivery-time">Delivery Time</Label>
                  <Input
                    id="delivery-time"
                    placeholder="Enter delivery time"
                    type="time"
                  />
                </div>
              </>
            )}
            {deliveryMethod === "pickup" && (
              <>
                <div className="space-y-2">
                  <Label>Frederick, Maryland</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickup-date">Pickup Date</Label>
                  <Input
                    id="pickup-date"
                    placeholder="Enter pickup date"
                    type="date"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="pickup-time">Pickup Time</Label>
                  <Input
                    id="pickup-time"
                    placeholder="Enter pickup time"
                    type="time"
                  />
                </div>
              </>
            )}
          </CardContent>
        </Card>
        <DialogOrSheetFooter>
          <Button type="submit">Save changes</Button>
        </DialogOrSheetFooter>
      </DialogOrSheetContent>
    </DialogOrSheet>
  );
}
