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
import { Dictionary } from "../landing";
import { EventDetails } from "../landing";

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
  dictionary,
  isOpen,
  setIsOpen,
  isMobile,
  side,
  sheetWidth,
  eventDetails,
  setEventDetails
}: {
  dictionary: Dictionary;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
  side: SheetSide;
  sheetWidth: string;
  eventDetails: EventDetails;
  setEventDetails: React.Dispatch<React.SetStateAction<EventDetails>>;
}) {
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

  const handleSetDeliveryMethod = (method: string) => {
    setEventDetails((prevDetails) => ({
      ...prevDetails,
      type: method as "delivery" | "pickup"
    }));
  };

  return (
    <DialogOrSheet
      open={isOpen}
      onOpenChange={(open: boolean) => {
        setIsOpen(false);
      }}
    >
      <DialogOrSheetContent className="w-full">
        <DialogOrSheetHeader>
          <DialogOrSheetTitle>Create Event</DialogOrSheetTitle>
          <DialogOrSheetDescription>
            Welcome! We're thrilled you've chosen us. Let's kick things off by setting up your event.
          </DialogOrSheetDescription>
        </DialogOrSheetHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="delivery-method">Delivery or Pickup</Label>
            <Select onValueChange={handleSetDeliveryMethod} value={eventDetails.type}>
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
          {eventDetails.type === "delivery" && (
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
                  value={eventDetails.deliveryDate || ""}
                  onChange={(e) => setEventDetails((prevDetails) => ({
                    ...prevDetails,
                    deliveryDate: e.target.value
                  }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="delivery-time">Delivery Time</Label>
                <Input
                  id="delivery-time"
                  placeholder="Enter delivery time"
                  type="time"
                  value={eventDetails.deliveryTime || ""}
                  onChange={(e) => setEventDetails((prevDetails) => ({
                    ...prevDetails,
                    deliveryTime: e.target.value
                  }))}
                />
              </div>
            </>
          )}
          {eventDetails.type === "pickup" && (
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
                  value={eventDetails.pickupDate || ""}
                  onChange={(e) => setEventDetails((prevDetails) => ({
                    ...prevDetails,
                    pickupDate: e.target.value
                  }))}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pickup-time">Pickup Time</Label>
                <Input
                  id="pickup-time"
                  placeholder="Enter pickup time"
                  type="time"
                  value={eventDetails.pickupTime || ""}
                  onChange={(e) => setEventDetails((prevDetails) => ({
                    ...prevDetails,
                    pickupTime: e.target.value
                  }))}
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

