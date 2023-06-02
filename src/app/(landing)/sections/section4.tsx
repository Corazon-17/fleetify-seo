import Image from "next/image";

const process = [
  {
    title: "Automated Remainder",
    content: "Pengingat automatis perbaikan berkala untuk mengurangi kerusakan",
  },
  {
    title: "Documented Evidence",
    content: "Telusuri riwayat perbaikan dengan bukti yang dapat dipertanggung jawabkan",
  },
  {
    title: "Spare Parts usage history",
    content: "Ciptakan visibilitas setiap penggunaan spare parts dan inventaris anda",
  },
  {
    title: "Mechanic Management",
    content: "Kelola kinerja dan evaluasi untuk meningkatkan produktivitas mekanik",
  },
];

export function Section4() {
  return (
    <section className="flex w-full justify-center mt-20">
      <div className="flex flex-col-reverse lg:flex-row-reverse w-full max-w-7xl justify-between gap-8 px-4">
        <div className="flex flex-col w-full flex-grow gap-4">
          <p className="text-custom-yellow">Streamline Your Entire Workflow</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold">
            Effectively track major issues from parts and inventory
          </h2>
          <p>
            Fleetify.id membuat proses perbaikan yang sebelumnya rumit, kini menjadi automatis untuk
            meningkatkan efisiensi operasional bisnis
          </p>
          <div className="grid lg:grid-cols-2 gap-y-2 gap-x-4">
            {process.map((item, idx) => {
              return (
                <div key={idx}>
                  <div className="flex flex-col lg:flex-row gap-2 items-center">
                    <div className="w-5 h-5 rounded-full bg-[#D9D9D9]"></div>
                    <p>{item.title}</p>
                  </div>
                  <p className="text-sm text-center lg:text-left lg:pl-8">{item.content}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center lg:justify-start lg:min-w-max">
          <Image
            src="https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg"
            alt="content"
            width={480}
            height={480}
          />
        </div>
      </div>
    </section>
  );
}
