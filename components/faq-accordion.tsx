"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FaqAccordionProps {
  faqs: FAQItem[]
}

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  return (
    <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-3">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={faq.question}
          value={`item-${index}`}
          className="rounded-2xl border border-slate-200/90 bg-white px-5 py-1 shadow-sm transition-all duration-200 data-[state=open]:border-secondary data-[state=open]:shadow-md sm:px-6"
        >
          <AccordionTrigger className="text-left text-base font-bold text-slate-900 hover:text-primary hover:no-underline sm:text-lg">
            <span className="flex items-center gap-3">
              <HelpCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span>{faq.question}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className="pt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
            <div className="border-t border-slate-100 pt-3">
              {faq.answer}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
