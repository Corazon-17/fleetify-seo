import Image from "next/image";

export function Section6() {
  return (
    <section className="flex w-full justify-center mt-20">
      <div className="flex flex-col-reverse lg:flex-row-reverse w-full max-w-7xl justify-between gap-8 px-4">
        <div className="flex flex-col justify-center w-full flex-grow gap-4">
          <p className="text-custom-yellow">Excellent customer service</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold">Technical Support ......</h2>
          <p>
            Hubungi Customer success Agent Fleetify.id kapan saja ketika terjadi permasalan yang
            terjadi dilapangan. Permasalahan Anda akan diselesaikan secara cepat dan real-time.
          </p>
        </div>
        <div className="flex justify-center lg:justify-start lg:min-w-max">
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
