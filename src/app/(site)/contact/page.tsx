import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import TicketSection from "@/components/Home/TicketSection";
export const metadata: Metadata = {
  title: "Contact | Symposium",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact Me"
        description="Have a project in mind or want to discuss an opportunity? Feel free to reach out using the contact information below. I'm always open to connecting and will respond as soon as possible."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactInfo />
    </>
  );
};

export default page;
