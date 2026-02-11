import HeroSec from "@/components/sections/HeroSec";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rishik Roy Portfolio",
  description: "",
};

const page = () => {
  return (
    <section className="relative flex h-screen flex-col items-center space-y-24">
      <div className="mx-autor w-full md:w-[50dvh] lg:w-[95dvh]">
        <HeroSec />
      </div>
    </section>
  );
};

export default page;
