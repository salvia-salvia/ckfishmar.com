"use client";
import dynamic from "next/dynamic";
import StatsOverview from "./StatsOverview";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { IFishPortPopulated } from "@/lib/database/models/FishPort.model";
import { IPort } from "@/lib/database/models/port.model";
import FishPriceInfo from "./FishPriceInfo";
const MoroccoPortsMap = dynamic(() => import("@/components/InteractiveMap"), {
  ssr: false,
});
export default function MarketContent({
  allFishPort,
  totalPorts,
  totalSpecies,
  ports,
}: {
  allFishPort?: {
    data: IFishPortPopulated[];
    total: number;
    totalPages: number;
  };
  totalPorts: number;
  totalSpecies: number;
  ports?: IPort[];
}) {
  const [selectedPort, setSelectedPort] = useState<string>("");

  const stats = {
    totalPorts,
    totalSpecies,
  };

  return (
    <div>
      <Header isProductPage={true} />
      <main className="max-w-[1400px] mx-auto p-6 my-32">
        <div className=" py-7">
          <h1 className="text-2xl text-[#34699a] font-semibold">Live market</h1>
          <p className="text-gray-600 text-xs md:text-sm">
            Stay updated with real-time fish prices from ports across Morocco.
            Data is refreshed continuously to help you make the best trading
            decisions.
          </p>
        </div>
        <StatsOverview stats={stats} isLoading={false} />
        {/* Map and Table Container */}
        <div className="w-full flex flex-col md:flex-row gap-6">
          <MoroccoPortsMap ports={ports} onPortSelect={setSelectedPort} />
          <FishPriceInfo
            allFishPort={allFishPort}
            selectedPort={selectedPort}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
