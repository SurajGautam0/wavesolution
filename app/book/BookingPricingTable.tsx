import React from "react";

export function BookingPricingTable() {
  return (
    <div className="my-8 rounded-2xl border border-[#E5E2DA] bg-[#FBFAF7] p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-[#263B3A]">Get a quote that fits your property</h2>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#687574]">
        Tell us your property size, cleaning needs and preferred schedule. Our local team will confirm the scope and price with you before you book.
      </p>
      <ul className="mt-4 grid gap-2 text-sm text-[#4F605D] sm:grid-cols-3">
        <li>• Homes and apartments</li>
        <li>• Regular or one-off cleans</li>
        <li>• Offices and commercial spaces</li>
      </ul>
    </div>
  );
}
