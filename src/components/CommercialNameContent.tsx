import { IFish } from "@/lib/database/models/fish.model";
import { nameToSlug } from "@/lib/utils";
import React from "react";

export default function CommercialNameContent({
  fishItem,
  commercialName,
}: {
  fishItem: IFish;
  commercialName: string;
}) {
  const allCommercials = Object.values(fishItem.commercialNames || {}).flat();
  const matchedCommercial = allCommercials.find(
    (c) => nameToSlug(c.commercialName) === commercialName
  );
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{fishItem.name}</h1>
      <p className="italic text-gray-500">{fishItem.scientifcName}</p>

      {matchedCommercial ? (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Commercial name</h2>
          <p>{matchedCommercial.commercialName}</p>
        </div>
      ) : (
        <p className="text-red-500 mt-4">Commercial name not found</p>
      )}
    </div>
  );
}
