import Image from "next/image";

export function Section8() {
  return (
    <section className="flex w-full justify-center mt-10">
      <div className="flex flex-col w-full max-w-7xl gap-4 px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-2 w-full justify-between lg:items-center">
          <div className="flex flex-col gap-2">
            <p className="text-2xl lg:text-3xl font-extrabold">Blog & Articles</p>
            <p className="text-lg">Take a look at our lastest article and resources</p>
          </div>
          <button className="text-white bg-custom-yellow px-4 py-2 border border-custom-yellow rounded-3xl w-max transition-all duration-300 hover:bg-white hover:text-custom-yellow">
            Show More &rarr;
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-4 sm:gap-x-8 md:gap-x-12 gap-y-8">
          {blogs.map((blog, idx) => {
            return (
              <div key={idx} className="flex flex-col justify-between gap-2 cursor-pointer group">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-2xl">&bull;</span>
                    <p className="text-sm">{blog.category}</p>
                  </div>
                  <p className="text-lg font-bold">{blog.title}</p>
                </div>
                <div className="flex relative w-full h-48">
                  <div
                    className="absolute bottom-0 right-0 w-[calc(100%-1rem)] h-[calc(100%-1rem)] bg-gray-300 rounded-xl 
                      group-hover:bg-custom-yellow group-hover:shadow-2xl group-hover:shadow-custom-yellow transition-all duration-300"
                  ></div>
                  <div className="absolute top-0 left-0 w-[calc(100%-1rem)] h-[calc(100%-1rem)] bg-[#D9D9D9] rounded-xl overflow-hidden">
                    <Image
                      src={blog.imageUrl}
                      alt={blog.title}
                      width={0}
                      height={0}
                      sizes="auto"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const blogs = [
  {
    title: "Reverse Logistics: Pengertian dan Manfaatnya",
    category: "Content A",
    imageUrl: "https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg",
  },
  {
    title: "Safety Induction: Hal-Hal yang Harus Dilakukan Agar Tetap Aman di Tempat Kerja",
    category: "Content B",
    imageUrl: "https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg",
  },
  {
    title: "Mengenal Berbagai Jenis dan Fungsi Alat Berat pada Pekerjaan Konstruksi",
    category: "Content A",
    imageUrl: "https://www.fleetify.id/static/media/ControlTowerFleetify.8ca81e07.jpg",
  },
];
