import BoxSlider from "@/components/SharedComponent/BoxSlider";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import "@/Style/style.css";
import Skills from "@/components/Home/Skills";
import TicketSection from "@/components/Home/TicketSection";
import Testimonials from "@/components/Home/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Skills | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/skills", text: "Skills" },
  ];
  return (
    <>
      <HeroSub
        title="Technical Skills"
        description="A versatile software engineer skilled in building scalable applications using modern technologies across frontend, backend, and system-level development."
        breadcrumbLinks={breadcrumbLinks}
      />
      <div className="container upcoming pt-10 pb-40">
        <Skills />
      </div>
      <div></div>
    </>
  );
};

export default page;
