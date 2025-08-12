import React from "react";
import banner1 from "../assets/img/banner1.png";
import banner2 from "../assets/img/banner2.png";

const Banner = () => {
  const banners = [
    {
      src: banner1,
      alt: "banner 1",
      link: "#",
    },
    {
      src: banner2,
      alt: "banner 2",
      link: "#",
    },
  ];

  return (
    <section className="lg:px-32 px-4 sm:pt-20 pt-5 pb-10">
      <div className="grid grid-cols-2 sm:gap-10 gap-2">
        {banners.map((banner, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <a href={banner.link}>
              <img
                src={banner.src}
                alt={banner.alt}
                className="transition-all duration-300 hover:scale-110 w-full h-full object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;
