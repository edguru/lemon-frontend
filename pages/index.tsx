import React from "react";
import Header from '@/components/home/Header';
import HeroSection from '@/components/home/Hero';
import NewsLetter from '@/components/home/Newsletter';
import ExploreBottomSection from '@/components/home/ExploreBottomSection';
import Footer from "@/components/home/Footer";

const index = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <NewsLetter/>
      <ExploreBottomSection/>
      <Footer />
      {/* <MobileNavbar>
      </MobileNavbar> */}
    </>
  );
};

export default index;
