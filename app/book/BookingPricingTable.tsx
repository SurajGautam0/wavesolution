import React from "react";

const pricingData = [
  {
    category: "Essential (1-2 Bed)",
    description: "Apartments, studios, small houses",
    prices: ["$120", "$200", "$250"],
  },
  {
    category: "Standard (3 Bed)",
    description: "Family homes, townhouses, duplexes",
    prices: ["$180", "$280", "$350"],
  },
  {
    category: "Premium (4+ Bed)",
    description: "Large family homes, multi-storey houses",
    prices: ["$250", "$380", "$450"],
  },
  {
    category: "Commercial (Office)",
    description: "Offices, retail stores, commercial spaces",
    prices: ["$350", "$500", "$600"],
  },
];

const frequencyLabels = [
  "Weekly",
  "Fortnightly",
  "Monthly",
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
      <div className="text-xs text-gray-500 mt-2">* Prices are for cleaning service packages in AUD. Contact us for custom quotes.</div>
    </div>
  );
}
