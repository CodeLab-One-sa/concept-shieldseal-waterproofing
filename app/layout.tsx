import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/content";

const inter = Inter({ subsets:["latin"], weight:["400","500","600","700","800","900"], variable:"--font-inter", display:"swap" });
const BASE_URL = COMPANY.url;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: { default:"ShieldSeal Waterproofing | Johannesburg", template:"%s | ShieldSeal" },
  description: "NHBRC-registered waterproofing specialists since 2011. Flat roofs, rising damp, basements, balconies. 10-year written guarantee. Free site inspection.",
  robots: { index:true, follow:true },
  openGraph: { title:"ShieldSeal Waterproofing | Johannesburg", description:"NHBRC-registered specialists. Flat roofs, damp, basements, balconies. 10-year guarantee. Free inspection.", type:"website", siteName:"ShieldSeal Waterproofing", url:BASE_URL, images:[{ url:`${BASE_URL}/opengraph-image`, width:1200, height:630, alt:"ShieldSeal Waterproofing" }] },
  twitter: { card:"summary_large_image", title:"ShieldSeal Waterproofing | Johannesburg", description:"NHBRC-registered. 10-year guarantee. Free site inspection.", images:[`${BASE_URL}/opengraph-image`] },
};

const orgSchema = {
  "@context":"https://schema.org","@type":"LocalBusiness","@id":`${BASE_URL}/#organization`,
  "name":COMPANY.name,"url":BASE_URL,"telephone":COMPANY.phone,"email":COMPANY.email,
  "address":{"@type":"PostalAddress","streetAddress":"Unit 4, 18 Anvil Road","addressLocality":"Germiston","addressRegion":"Gauteng","postalCode":"1401","addressCountry":"ZA"},
  "geo":{"@type":"GeoCoordinates","latitude":-26.21,"longitude":28.17},
  "openingHoursSpecification":[
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"07:00","closes":"17:00"},
    {"@type":"OpeningHoursSpecification","dayOfWeek":["Saturday"],"opens":"07:00","closes":"17:00"},
  ],
  "areaServed":{"@type":"City","name":"Johannesburg"},
  "description":"NHBRC-registered waterproofing company serving Johannesburg since 2011.",
  "priceRange":"R60–R550/m","currenciesAccepted":"ZAR",
};

export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return (
    <html lang="en-ZA" className={inter.variable}>
      <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify(orgSchema) }} /></head>
      <body className="bg-ink text-white font-sans antialiased">{children}</body>
    </html>
  );
}
