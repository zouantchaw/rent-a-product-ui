'use client';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SheetSide } from "../landing"

export function CreateEventForm({ side, sheetWidth }: { side: SheetSide; sheetWidth: string }) {
  const isMobile = !(window.innerWidth >= 768) // 768px for typical breakpoint for larger screens
  const DialogOrSheet = isMobile ? Sheet : Dialog;
  const DialogOrSheetContent = isMobile 
  ? (props: React.PropsWithChildren<{}>) => <SheetContent side={side} className={`${sheetWidth} bg-white dark:bg-gray-900`} {...props} /> 
  : DialogContent;
  const DialogOrSheetTrigger = isMobile ? SheetTrigger : DialogTrigger;
  const DialogOrSheetHeader = isMobile ? SheetHeader : DialogHeader;
  const DialogOrSheetTitle = isMobile ? SheetTitle : DialogTitle;
  const DialogOrSheetDescription = isMobile ? SheetDescription : DialogDescription;
  const DialogOrSheetFooter = isMobile ? SheetFooter : DialogFooter;

  return (
    <DialogOrSheet defaultOpen>
      <DialogOrSheetContent className="w-full">
        <DialogOrSheetHeader>
          <DialogOrSheetTitle>Create Event</DialogOrSheetTitle>
          <DialogOrSheetDescription>
            Welcome, tell us about your event.
          </DialogOrSheetDescription>
        </DialogOrSheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <DialogOrSheetFooter>
          <Button type="submit">Save changes</Button>
        </DialogOrSheetFooter>
      </DialogOrSheetContent>
    </DialogOrSheet>
  )
}


