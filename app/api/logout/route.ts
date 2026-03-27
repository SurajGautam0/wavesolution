import { NextResponse } from "next/server"

const secureCookie = process.env.NODE_ENV === "production"

export async function POST() {
  const response = NextResponse.json({ success: true })

  response.cookies.set({
    name: "user",
    value: "",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
    sameSite: "lax",
    secure: secureCookie,
  })

  response.cookies.set({
    name: "user_id",
    value: "",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
    sameSite: "lax",
    secure: secureCookie,
    httpOnly: true,
  })

  return response
}
