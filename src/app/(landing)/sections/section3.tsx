"use client";

import { features } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const featureContent = features.map((feature) => ({
  name: feature,
  title: "Unlock The True Analytics",
  body: "Satu dashboard otomatis mengumpulkan berbagai data real-time untuk memberikan visibilitas dan analitik yang dapat ditindaklanjuti untuk membantu stakeholder membuat langkah strategis",
  imageUrl: "/images/object_landing.webp",
  pageUrl: "/",
}));

export function Section3() {
  return (
    <section id="features" className="flex w-full justify-center pt-20">
      <div className="flex flex-col w-full max-w-7xl gap-4 px-4">
        <p className="text-center text-[#F9DA35] text-sm">How can we help you!</p>
        <div className="flex w-full justify-center">
          <h2 className="w-full md:w-[32rem] text-center text-2xl md:text-3xl font-extrabold">
            We&apos;re Control Tower for maintenance process
          </h2>
        </div>
        <div className="flex w-full justify-center">
          <p className="w-full md:w-[40rem] text-center">
            Fleetify.id menyediakan solusi sesuai kebutuhan perusahaan untuk mempermudah segala
            proses pengawasan dalam perbaikan armada Anda.
          </p>
        </div>
        <FeatureSlideshow />
      </div>
    </section>
  );
}

const FeatureSlideshow = () => {
  const contentRef = useRef<any[]>([]);
  const [active, setActive] = useState<string>(features[0]);
  const [contentHeight, setContentHeight] = useState<number>(0);

  const handleResize = useCallback(() => {
    const activeIdx = features.indexOf(active);
    if (contentRef.current[activeIdx]) setContentHeight(contentRef.current[activeIdx].clientHeight);
  }, [active]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-xs lg:text-base">
        {features.map((feature, idx) => {
          const isActive = active === feature;

          return (
            <div
              key={`${feature}-${idx}`}
              className={`px-5 py-1 rounded-2xl border-2 border-custom-yellow transition-all duration-300 cursor-pointer hover:bg-transparent hover:text-custom-yellow ${
                isActive ? "bg-transparent text-custom-yellow" : "bg-custom-yellow"
              }`}
              onClick={() => setActive(feature)}
            >
              {feature}
            </div>
          );
        })}
      </div>
      <div className="relative" style={{ height: contentHeight || "fit-content" }}>
        {featureContent.map((content, idx) => {
          const isActive = active === content.name;

          return (
            <div
              key={`${content.name}-${idx}`}
              ref={(element) => (contentRef.current[idx] = element)}
              className={`flex w-full justify-center rounded-xl p-8 transition-all duration-[1s] ${
                idx === 0 ? "static" : "absolute top-0"
              } ${
                isActive
                  ? "bg-custom-gray opacity-100 z-10 scale-100"
                  : "bg-transparent opacity-0 z-0 scale-0"
              }`}
            >
              <div className="flex flex-col-reverse lg:flex-row justify-between gap-4">
                <div className="flex flex-col text-lg gap-4">
                  <p className="font-bold">{content.title}</p>
                  <p>{content.body.repeat(idx + 1)}</p>
                  <Link
                    href={content.pageUrl}
                    className="text-base px-6 py-1.5 rounded-lg bg-custom-yellow text-white w-max transition-all duration-300 border border-custom-yellow hover:bg-transparent hover:text-custom-yellow"
                  >
                    Selengkapnya
                  </Link>
                </div>
                <div className="flex w-full justify-center lg:justify-end lg:min-w-max">
                  <Image src={content.imageUrl} alt="content" width={480} height={360} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
