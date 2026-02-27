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
      <DialogContent className="w-[90vw] max-w-md rounded-[2rem] p-0 bg-white shadow-2xl border border-gray-200 overflow-hidden sm:w-full">
        <div className="flex flex-col items-center text-center gap-0 relative">
          {/* Header with Primary Color */}
          <div className="w-full bg-primary py-8 px-6 sm:py-10 sm:px-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl -mr-16 -mt-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary rounded-full blur-3xl -ml-16 -mb-16" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <BadgePercent className="w-10 h-10 sm:w-12 sm:h-12 text-secondary drop-shadow-lg animate-bounce" />
                <span className="ml-2 text-5xl sm:text-6xl font-black tracking-tight text-secondary drop-shadow-lg font-serif">
                  20% OFF
                </span>
              </div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight font-serif">
                FIRST CLEANING SERVICE
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full flex flex-col items-center justify-center py-8 px-6 sm:py-10 sm:px-10 bg-white">
            <div className="text-sm sm:text-base text-muted-foreground mb-6 max-w-[280px] sm:max-w-none leading-relaxed">
              Limited time offer for all new bookings!
              <br className="hidden sm:block" />
              Don't miss out on sparkling clean windows.
            </div>

            <Button
              className="w-full sm:w-auto rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-black px-10 py-6 sm:py-7 text-base sm:text-lg uppercase tracking-widest shadow-xl shadow-secondary/20 transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={handleClaim}
            >
              Claim Discount →
            </Button>

            <div className="mt-6 text-[10px] sm:text-xs text-muted-foreground font-bold uppercase tracking-widest">
              * Applied automatically at checkout
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

