import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({ weight: "800", subsets: ["latin"] });

export function Section1() {
  return (
    <section className="flex w-full justify-center bg-gradient-to-r from-[#bea92e] via-custom-yellow to-custom-yellow mb-6">
      <div
        className="flex flex-col lg:flex-row justify-between w-full max-w-7xl bg-[url('/images/background_landing.webp')] bg-cover
        py-6"
      >
        <div className="flex flex-col gap-4 mb-8 md:mb-0 text-white justify-center px-4">
          <p className="text-lg">Indonesia&#39;s #1 Fleet Maintenance</p>
          <h1
            className={`${poppins.className} text-3xl md:text-5xl font-extrabold leading-tight md:leading-[3.5rem]`}
          >
            Transform your business through one smart fleet maintenance system
          </h1>
          <p className="text-lg">
            Fleetify.id menyediakan sistem terintegrasi untuk mengelola perawatan armada dan
            meningkatkan efisiensi bisnis.
          </p>
          <div className="flex gap-4">
            <button className="text-white bg-custom-red rounded-lg px-4 py-2 hover:scale-110 transition-all duration-300">
              Free Demo
            </button>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Image src="/images/object_landing.webp" alt="object" width={640} height={640} />
        </div>
      </div>
    </section>
  );
}
