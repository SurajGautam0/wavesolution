import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact CRYSTALFRONT - Book Your Cleaning Service in Lalitpur",
    description: "Get in touch with CRYSTALFRONT for professional cleaning services in Bhaisepati and Lalitpur. Request a free quote, ask questions, or book your cleaning today.",
    keywords: ["contact CRYSTALFRONT", "cleaning service quote Lalitpur", "book cleaners Nepal", "Bhaisepati cleaning contact"],
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
