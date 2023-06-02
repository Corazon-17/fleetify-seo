import { company, features } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center w-full bg-custom-yellow z-50 mt-20">
      <div className="flex flex-col w-full gap-3 max-w-7xl px-4 py-6">
        <div className="flex flex-col md:flex-row-reverse w-full gap-6">
          <Sitemap />
          <div className="flex flex-col gap-3 w-max whitespace-nowrap">
            <Link href="/">
              <Image src="/images/fleetify_white.png" alt="logo" width="200" height="80" />
            </Link>
            <p>
              Foresta Business Loft 5,
              <br />
              Jl. BSD Boulevard Utara No.5
              <br />
              BSD City, Tangerang Selatan,
              <br />
              Banten 15331
            </p>
            <p>
              Email: cs@fleetify.id
              <br />
              Mobile: 0877-8904-6774
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 w-full justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold">Connect With Us</p>
            <div className="flex gap-4">
              {[...Array(4)].map((_, idx) => (
                <Link key={`contact-${idx}`} href="/">
                  <Image
                    src="https://www.fleetify.id/static/media/whatsappText.eb0f5d42.png"
                    alt="contact"
                    width={40}
                    height={40}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-end">
            <Link href="">
              <Image
                src="https://www.fleetify.id/static/media/digicert.81a7e6d6.png"
                alt="contact"
                width={150}
                height={40}
              />
            </Link>
            <Link href="">
              <Image
                src="https://www.fleetify.id/static/media/googlePlay_badge.f902960a.png"
                alt="contact"
                width={150}
                height={60}
              />
            </Link>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <p className="text-center md:text-start">Copyright © 2023. Fleetify.id | PT. Teknologi Integrasi Armada. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

const Sitemap = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row w-full justify-evenly">
      <div className="flex flex-col gap-3">
        <label className="font-bold">Features</label>
        <div className="flex flex-col gap-1.5">
          {features.map((feature, idx) => (
            <Link key={`${feature}-${idx}`} href="/" className="hover:text-white">
              {feature}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-bold">Blog</label>
        <div className="flex flex-col gap-1.5">
          {[...Array(3)].map((_, idx) => (
            <Link key={`Content ${idx}`} href="/" className="hover:text-white">
              {`Content ${idx}`}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <label className="font-bold">Company</label>
        <div className="flex flex-col gap-1.5">
          {company.map((comp, idx) => (
            <Link key={`${comp}-${idx}`} href="/" className="hover:text-white">
              {comp}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
