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
import { useToast } from "@/components/ui/use-toast"

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
  const { toast } = useToast()
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
    <DialogOrSheet
      open={isOpen}
      onOpenChange={(open: boolean) => {
        console.log("onOpenChange");
        setIsOpen(open);
      }}
    >
      <DialogOrSheetContent className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Create Event</CardTitle>
            <CardDescription>
              <span className="text-gray-600 dark:text-gray-400 text-sm tracking-wider leading-6">
                Welcome! We&apos;re thrilled you&apos;ve chosen us. Let&apos;s kick things off
                by setting up{" "}
                <mark className="rounded border-dashed border-2 animate-pulse p-1 bg-green-200">
                  your event
                </mark>
              </span>
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
          <Button onClick={() => {
            toast({
              title: 'Event Created',
              description: 'Items in your cart will be linked to this event',
            })
            setIsOpen(false)
          }} type="submit">Save changes</Button>
        </DialogOrSheetFooter>
      </DialogOrSheetContent>
    </DialogOrSheet>
  );
}
