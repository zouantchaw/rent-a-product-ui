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
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { LangSelector } from "../lang-selector";

interface Delivery {
  address: string;
  date: string;
  time: string;
}

interface Pickup {
  date: string;
  time: string;
}

export function CreateEventForm({
  isOpen,
  setIsOpen,
  isMobile,
  side,
  sheetWidth,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  side: SheetSide;
  sheetWidth: string;
}) {
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const { toast } = useToast();
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
  const DialogOrSheetHeader = isMobile ? SheetHeader : DialogHeader;
  const DialogOrSheetTitle = isMobile ? SheetTitle : DialogTitle;
  const DialogOrSheetDescription = isMobile
    ? SheetDescription
    : DialogDescription;
  const DialogOrSheetFooter = isMobile ? SheetFooter : DialogFooter;

  return (
    <DialogOrSheet
      open={isOpen}
      onOpenChange={(open: boolean) => {
        console.log("onOpenChange");
        setIsOpen(false);
      }}
    >
      <DialogOrSheetContent className="w-full">
        <DialogOrSheetHeader>
          <DialogOrSheetTitle>Create Event</DialogOrSheetTitle>
          <DialogOrSheetDescription>
            <span className="text-gray-600 dark:text-gray-400 text-sm tracking-wider leading-6">
              Welcome! We&apos;re thrilled you&apos;ve chosen us. Let&apos;s
              kick things off by setting up{" "}
              <mark className="rounded border-dashed border-2 animate-pulse p-1 bg-green-200">
                your event
              </mark>
            </span>
          </DialogOrSheetDescription>
        </DialogOrSheetHeader>
        <div className="space-y-4">
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
                <Alert className="bg-green-200 dark:bg-gray-600">
                  <AlertTitle>Delivery Info</AlertTitle>
                  <AlertDescription>
                    Only available in Frederick, Maryland
                  </AlertDescription>
                </Alert>
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery-date">Delivery Date</Label>
                <Input
                  id="delivery-date"
                  placeholder="Enter delivery date"
                  type="date"
                  value={deliveryDate}
                  onChange={(e) => setDeliveryDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery-time">Delivery Time</Label>
                <Input
                  id="delivery-time"
                  placeholder="Enter delivery time"
                  type="time"
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                />
              </div>
            </>
          )}
          {deliveryMethod === "pickup" && (
            <>
              <div className="space-y-2">
                <Alert className="bg-green-200 dark:bg-gray-600">
                  <AlertTitle>Pickup Location</AlertTitle>
                  <AlertDescription>Frederick, Maryland</AlertDescription>
                </Alert>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickup-date">Pickup Date</Label>
                <Input
                  id="pickup-date"
                  placeholder="Enter pickup date"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickup-time">Pickup Time</Label>
                <Input
                  id="pickup-time"
                  placeholder="Enter pickup time"
                  type="time"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                />
              </div>
            </>
          )}
        </div>
        <DialogOrSheetFooter className="mt-4">
          <Button
            onClick={() => {
              toast({
                title: "Event Created",
                description: "Items in your cart will be linked to this event",
              });
              setIsOpen(false);
            }}
            type="submit"
          >
            Save changes
          </Button>
        </DialogOrSheetFooter>
      </DialogOrSheetContent>
    </DialogOrSheet>
  );
}
