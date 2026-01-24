import { NextApiRequest, NextApiResponse } from "next"

let testimonials = [] // This will act as a temporary in-memory store

export function POST(req: NextApiRequest, res: NextApiResponse) {
  const { name, location, testimonial, rating } = req.body
  const newTestimonial = {
    id: Date.now(),
    name,
    location,
    testimonial,
    rating,
  }
  testimonials.push(newTestimonial)
  return res.status(201).json(newTestimonial)
}

export function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json(testimonials)
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    return POST(req, res)
  }

  if (req.method === "GET") {
    return GET(req, res)
  }

  return res.status(405).end() // Method Not Allowed
} 