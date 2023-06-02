import Image from "next/image";

const logos = ["BBSP", "Blog", "HK SIS", "IPL", "Yosua"];

export function Section2() {
  return (
    <section className="flex w-full justify-center mt-10">
      <div className="flex flex-col w-full max-w-7xl gap-4 px-4 py-6">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold">
          Trusted by various industries in Indonesia
        </h2>
        <div className="flex w-full justify-center">
          <p className="w-full md:w-[32rem] text-center">
            Fleetify.id hadir untuk memudahkan berbagai perusahaan di Indonesia untuk dapat terus
            berkembang.
          </p>
        </div>
        <div className="flex justify-between w-full gap-8 md:px-24 py-4 overflow-x-auto">
          {logos.map((logo, idx) => {
            return (
              <div key={`${logo}-${idx}`} className="shrink-0 w-20 h-14 md:w-36 md:h-20">
                <Image
                  src={`/images/company/${logo}_Logo.webp`}
                  alt="company"
                  width={0}
                  height={0}
                  sizes="auto"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
