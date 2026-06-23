import React from "react";
import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
export const metadata: Metadata = {
  title: "Symposium",
};

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  );
}
