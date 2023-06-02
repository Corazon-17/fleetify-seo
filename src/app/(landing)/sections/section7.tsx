"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const montserrat = Montserrat({ weight: ["500", "700", "900"], subsets: ["latin"] });

export function Section7() {
  const [active, setActive] = useState<number>(0);
  const timeoutRef = useRef<any>();

  const handleClick = useCallback(() => {
    if (active >= reviews.length) {
      setActive(1);
    } else {
      setActive(active + 1);
    }
  }, [active]);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(handleClick, 8000);
  }, [handleClick]);

  return (
    <div className={`${montserrat.className} flex w-full justify-center mt-20`}>
      <div className="flex w-full justify-center max-w-7xl px-4 bg-[#ffef95] rounded-2xl">
        <div className="flex w-full max-w-4xl overflow-hidden" onClick={handleClick}>
          {reviews.map((review) => {
            return (
              <div
                key={review.id}
                className="flex flex-col min-w-full h-full pb-8 gap-4 transition-all duration-500"
                style={{
                  transform:
                    active >= reviews.length ? `translateX(0)` : `translateX(-${active * 100}%)`,
                }}
              >
                <p
                  className={`text-[4rem] text-white font-extrabold hidden lg:block leading-none translate-y-10`}
                >
                  &ldquo;
                </p>
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-20 lg:px-4 py-8 lg:py-0">
                  <div>
                    <p
                      className={`text-[4rem] text-white font-extrabold block lg:hidden leading-none`}
                    >
                      &ldquo;
                    </p>
                    <p className={`text-xl lg:text-2xl px-4 lg:px-0`}>{review.text}</p>
                  </div>
                  <div className="flex lg:hidden flex-col px-4">
                    <p>
                      {review.name} - {review.company}
                    </p>
                  </div>
                  <div className="flex justify-center rounded-full shrink-0 w-[250px] h-[250px] overflow-hidden">
                    <Image src={review.imageUrl} alt="content" width={300} height={300} />
                  </div>
                </div>
                <div className="hidden lg:flex flex-col px-4 text-lg">
                  <p className="font-bold">
                    {review.name} - {review.position}
                  </p>
                  <p>{review.company}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const text =
  "Saya bisa terus fokus mengembangkan layanan-layanan baru bagi Customer kami, karena saya yakin bahwa fleetify bisa mendukung proses perawatan armada kendaraan kami, sekarang dan kedepannya.";

const reviews = [
  {
    id: 0,
    name: "Haykal Ramadhan",
    position: "GM Sales and Operation",
    company: "PT. SAS",
    text: text,
    imageUrl: "https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg",
  },
  {
    id: 1,
    name: "Ghani Firmansyah",
    position: "GM Sales and Operation",
    company: "PT. SOS",
    text: text,
    imageUrl: "https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg",
  },
  {
    id: 2,
    name: "Dhika Sitohang",
    position: "GM Sales and Operation",
    company: "PT.SSS",
    text: text,
    imageUrl: "https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg",
  },
  {
    id: 3,
    name: "Ega Sitorus",
    position: "GM Sales and Operation",
    company: "PT.SIS",
    text: text,
    imageUrl: "https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg",
  },
  {
    id: 4,
    name: "Prasetiyo G A",
    position: "GM Sales and Operation",
    company: "PT.SES",
    text: text,
    imageUrl: "https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg",
  },
];
