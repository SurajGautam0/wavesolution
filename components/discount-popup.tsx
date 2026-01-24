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
      <DialogContent className="max-w-md rounded-2xl p-0 bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 text-white shadow-2xl border-0 overflow-hidden">
        <div className="flex flex-col items-center text-center gap-0 relative">
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full flex flex-col items-center justify-center py-8 px-6">
            <div className="flex items-center justify-center mb-2">
              <BadgePercent className="w-10 h-10 text-yellow-300 drop-shadow-lg animate-bounce" />
              <span className="ml-2 text-4xl font-extrabold tracking-tight text-yellow-300 drop-shadow-lg">
                60% OFF
              </span>
            </div>
            <div className="text-2xl font-bold mb-1 flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-blue-100 animate-pulse" />
              INTERIOR CLEANING
              <Sparkles className="w-6 h-6 text-blue-100 animate-pulse" />
            </div>
            <div className="text-base font-medium text-blue-50 mb-4">
              Limited time offer for all new bookings!
              <br />Don't miss out on a sparkling clean interior.
            </div>
            <Button
              className="mt-2 rounded-full bg-yellow-400 text-blue-900 font-bold px-8 py-2 text-lg hover:bg-yellow-300 shadow-lg transition-all duration-200"
              onClick={handleClaim}
            >
              Claim Discount &rarr;
            </Button>
            <div className="mt-4 text-xs text-blue-100/80 italic">
              * Discount automatically applied on booking page
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
