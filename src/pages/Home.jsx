import React from "react";
import Banner from "@/components/Banner";
import ProductExample from "@/components/ProductExample";
import HeroSlider from "@/components/HeroSection/HeroSlider";
import Testimonials from "@/components/Testimonials";

function Home() {
  return (
    <div>
      <HeroSlider />

      <ProductExample />
      <Banner />
      <Testimonials />
    </div>
  );
}

export default Home;
