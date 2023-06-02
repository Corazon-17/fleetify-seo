import { JumpToFeature } from "@/components/layouts";
import { Metadata } from "next";
import {
  Section1,
  Section10,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
  Section7,
  Section8,
  Section9,
} from "./sections";

export const metadata: Metadata = {
  viewport: "width=device-width,initial-scale=1",
  title: "Fleetify.id",
  description:
    "Sebuah software terintegrasi untuk mengelola perbaikan armadamu yang menggunakan data lapangan yang lebih akuntabel untuk solusi managemen perbaikan kendaraan...",
  keywords:
    "fleetify,id, fleetify, fleet, armada, pt.teknologi integrasi armada, perbaikan kendaraan, software, perbaikan armada",
  openGraph: {
    title: "Fleetify.id",
    description:
      "Sebuah software terintegrasi untuk mengelola perbaikan armadamu yang menggunakan data lapangan yang lebih akuntabel untuk solusi managemen perbaikan kendaraan...",
      url: 'https://fleetify.id',
      siteName: "Fleetify.id",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleetify.id",
    description:
      "Sebuah software terintegrasi untuk mengelola perbaikan armadamu yang menggunakan data lapangan yang lebih akuntabel untuk solusi managemen perbaikan kendaraan...",
    siteId: "1467726470533754880",
    creator: "@admin",
    creatorId: "1467726470533754880",
    images: ["https://nextjs.org/og.png"],
  },
};

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <JumpToFeature />
      </main>
    </>
  );
}
