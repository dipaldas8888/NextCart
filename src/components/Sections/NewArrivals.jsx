import React from "react";
import Dresses from "../../assets/img/dresses.jpg";
import Kurtis from "../../assets/img/kurtis.jpg";
import Shirts from "../../assets/img/shirts.jpg";
import Tshirts from "../../assets/img/tshirts.jpeg";

const NewArrivals = () => {
  const [stopScroll, setStopScroll] = React.useState(false);

  const cardData = [
    { title: "Dresses", image: Dresses },
    { title: "Kurtis", image: Kurtis },
    { title: "Shirts", image: Shirts },
    { title: "T-Shirts", image: Tshirts },
  ];

  return (
    <>
      <style>{`
        .marquee-inner {
          animation: marqueeScroll linear infinite;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <section className="py-12 bg-white">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          New Arrivals
        </h2>

        {/* Scrolling Card Container */}
        <div
          className="overflow-hidden w-full relative max-w-6xl mx-auto"
          onMouseEnter={() => setStopScroll(true)}
          onMouseLeave={() => setStopScroll(false)}
        >
          <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div
            className="marquee-inner flex w-fit"
            style={{
              animationPlayState: stopScroll ? "paused" : "running",
              animationDuration: cardData.length * 2500 + "ms",
            }}
          >
            <div className="flex">
              {[...cardData, ...cardData].map((card, index) => (
                <div
                  key={index}
                  className="w-56 mx-4 h-[20rem] relative group hover:scale-90 transition-all duration-300"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="flex items-center justify-center px-4 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute bottom-0 backdrop-blur-md left-0 w-full h-full bg-black/20">
                    <p className="text-white text-lg font-semibold text-center">
                      {card.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute right-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
