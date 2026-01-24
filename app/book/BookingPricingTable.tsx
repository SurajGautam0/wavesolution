import React from "react";

const pricingData = [
  {
    category: "Everest (XL)",
    description: "Biggest XL showrooms, wide glass fronts",
    prices: ["NPR 6,500", "NPR 8,000"],
  },
  {
    category: "Lhotse (Large)",
    description: "Large restaurants, showrooms",
    prices: ["NPR 3,500", "NPR 4,000", "NPR 5,000"],
  },
  {
    category: "Manaslu (Medium)",
    description: "Restaurants, retail stores, medium showrooms",
    prices: ["NPR 3,000", "NPR 4,000", "NPR 4,500"],
  },
  {
    category: "Annapurna (Small)",
    description: "Small shops, pharmacies, boutiques",
    prices: ["NPR 2,500", "NPR 3,500", "NPR 4,000"],
  },
];

const frequencyLabels = [
  "4x/Month (Weekly)",
  "6x/Month (Every 5 days)",
  "8x/Month (Bi-Weekly)",
];

export function BookingPricingTable() {
  return (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border border-gray-200 rounded-lg shadow bg-white">
        <thead className="bg-blue-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-bold text-blue-900 border-b">Size Category</th>
            <th className="px-4 py-3 text-left text-sm font-bold text-blue-900 border-b">Description</th>
            {frequencyLabels.map((label) => (
              <th key={label} className="px-4 py-3 text-center text-sm font-bold text-blue-900 border-b">{label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {pricingData.map((row, idx) => (
            <tr key={row.category} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50/50"}>
              <td className="px-4 py-3 font-semibold text-blue-800 whitespace-nowrap">{row.category}</td>
              <td className="px-4 py-3 text-gray-700 whitespace-nowrap">{row.description}</td>
              {row.prices.map((price, i) => (
                <td key={i} className="px-4 py-3 text-center font-bold text-blue-700 whitespace-nowrap">{price}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-xs text-gray-500 mt-2">* Prices are for window cleaning packages. Contact us for custom quotes.</div>
    </div>
  );
}
