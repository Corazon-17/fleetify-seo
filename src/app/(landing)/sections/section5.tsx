import Image from "next/image";
import Link from "next/link";

export function Section5() {
  return (
    <section className="flex w-full justify-center mt-20">
      <div className="flex flex-col-reverse lg:flex-row w-full max-w-7xl justify-between gap-8 px-4">
        <div className="flex flex-col justify-between w-full flex-grow gap-4">
          <p className="text-custom-yellow">Real Time Maintenance Report</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold">
            Advance analytics tools for fleet maintenance process from anywhere
          </h2>
          <p>
            Pantau proses perbaikan armada secara real time dengan dashboard analitik untuk
            pengambilan keputusan dalam bisnis
          </p>
          <Link
            href="/"
            className="text-base px-6 py-1.5 rounded-lg bg-custom-yellow text-white w-max transition-all duration-300 border border-custom-yellow hover:bg-transparent hover:text-custom-yellow"
          >
            Selengkapnya
          </Link>
        </div>
        <div className="flex justify-center lg:justify-start lg:min-w-max max-h-64">
          <Image
            src="https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg"
            alt="content"
            width={520}
            height={480}
          />
        </div>
      </div>
    </section>
  );
}
