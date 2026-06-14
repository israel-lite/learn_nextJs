"use client";

import FirstCard from "@/components/FirstCard.js";
import DivededComponentOne from "@/components/DivededComponentOne.js";
import DivededComponentTwo from "@/components/DivededComponentTwo.js";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] p-12 antialiased">
      <div className="mx-auto w-full max-w-[1480px] flex flex-col xl:flex-row items-start gap-12">
        <div className="w-full xl:w-[420px]">
          <FirstCard />
        </div>
        <div className="w-full">
          <DivededComponentOne />
        </div>
        <DivededComponentTwo />
      </div>
    </main>
  );
}