import Experience from "@/components/Home/Experience";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Experience | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/experience", text: "Experience" },
  ];
  return (
    <>
      <HeroSub
        title="Professional Experience"
        description="8+ years building enterprise software, AI-powered applications, distributed systems, and cloud-native platforms."
        breadcrumbLinks={breadcrumbLinks}
      />
      <Experience showTitle={false} />
    </>
  );
};

export default page;
