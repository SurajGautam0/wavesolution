import type { Metadata } from "next"
import { CarpetLocationPage } from "@/components/carpet-location-page"
import { getCarpetLocationPage } from "@/lib/carpet-location-pages"

const page = getCarpetLocationPage("hope-island")!
export const metadata: Metadata = { title: page.title, description: page.description, alternates: { canonical: "https://www.wavesolution.com.au/carpet-cleaning-hope-island" } }
export default function Page() { return <CarpetLocationPage page={page} /> }
