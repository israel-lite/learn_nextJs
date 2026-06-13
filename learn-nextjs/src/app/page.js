"use client";

import FirstCard from "@/components/FirstCard.js";
import DashboardTwo from "@/components/DashboardTwo.js";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] flex flex-row flex-wrap items-start justify-start p-12 gap-12 antialiased">
      <FirstCard />
      <DashboardTwo />
    </main>
  );
}