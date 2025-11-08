import DashbaordContent from "@/components/DashboardContent";
import Header from "@/components/Header";
import { getAllFishPort } from "@/lib/actions/fishPort.actions";
import React from "react";

export default async function page() {
  const allFishPort = await getAllFishPort({});

  return (
    <div>
      <Header isProductPage={true} />
      <DashbaordContent allFishPort={allFishPort} />
    </div>
  );
}
