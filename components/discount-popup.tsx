"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Sparkles, BadgePercent, X } from "lucide-react";

export function DiscountPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const timer = setTimeout(() => setOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  const handleClaim = () => {
    setOpen(false);
    setTimeout(() => router.push("/book"), 300);
  };

  if (!mounted) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[90vw] max-w-md rounded-[2rem] p-0 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 text-white shadow-2xl border-0 overflow-hidden sm:w-full">
        <div className="flex flex-col items-center text-center gap-0 relative">
          <div className="w-full flex flex-col items-center justify-center py-10 px-6 sm:py-12 sm:px-10">
            <div className="flex items-center justify-center mb-4">
              <BadgePercent className="w-10 h-10 sm:w-14 sm:h-14 text-yellow-300 drop-shadow-lg animate-bounce" />
              <span className="ml-2 text-4xl sm:text-6xl font-extrabold tracking-tight text-yellow-300 drop-shadow-lg">
                60% OFF
              </span>
            </div>
            <div className="text-xl sm:text-3xl font-black mb-3 text-center tracking-tighter">
              INTERIOR CLEANING
            </div>

            <div className="text-sm sm:text-lg font-medium text-blue-50 mb-8 max-w-[280px] sm:max-w-none">
              Limited time offer for all new bookings!
              <br className="hidden sm:block" /> Don't miss out on a sparkling clean interior.
            </div>
            <Button
              className="w-full sm:w-auto rounded-full bg-yellow-400 text-blue-900 font-black px-10 py-6 sm:py-7 text-lg sm:text-xl hover:bg-yellow-300 shadow-2xl shadow-yellow-400/20 transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={handleClaim}
            >
              Claim Discount &rarr;
            </Button>
            <div className="mt-6 text-[10px] sm:text-xs text-blue-100/60 font-bold uppercase tracking-widest">
              * Applied automatically at checkout
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

