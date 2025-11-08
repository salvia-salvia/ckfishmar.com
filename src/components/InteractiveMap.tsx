"use client";
import { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  useMap,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { Button } from "./ui/button";
import { ExpandIcon } from "lucide-react";
import { IPort } from "@/lib/database/models/port.model";

const MoroccoBounds: [[number, number], [number, number]] = [
  [30.0, -17.5], // SW
  [36.5, -0.5], // NE
];

function FitToBounds() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(MoroccoBounds, { padding: [20, 20] });
  }, [map]);
  return null;
}

export type MapFilters = {
  speciesQuery: string;
  portId?: string;
  onlyWithSpecies: boolean;
};

export default function MoroccoPortsMap({
  ports,
  filters,
  selectedPortId,
  onPortSelect,
}: {
  ports?: IPort[];
  filters?: MapFilters;
  selectedPortId?: string;
  onPortSelect?: (id: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className="w-[300px] mx-auto bg-card border border-border overflow-hidden"
      data-testid="interactive-map"
    >
      <div className="border-b border-border p-4">
        <div className="flex items-center justify-between">
          <h2
            className="text-lg font-semibold text-gray-800"
            data-testid="text-map-title"
          >
            Morocco Port Locations
          </h2>
          <div className="flex items-center space-x-2"></div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="relative w-full z-[10]  h-[50vh] md:h-[60vh] overflow-hidden border bg-card"
      >
        <MapContainer
          className="w-full h-full"
          preferCanvas={false}
          scrollWheelZoom={true}
          maxBounds={MoroccoBounds}
          maxBoundsViscosity={0.9}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <FitToBounds />
          {ports?.map((p, idx) => {
            const isSelected = p.id === (filters?.portId ?? selectedPortId);
            return (
              <CircleMarker
                key={idx}
                center={[p.lat, p.lng]}
                radius={isSelected ? 8 : 6}
                pathOptions={{
                  color: "#fff",
                  fillColor: "#34699a",
                  fillOpacity: 0.85,
                  weight: isSelected ? 3 : 2,
                }}
                eventHandlers={{
                  click: () => onPortSelect?.(p.id),
                }}
              >
                <Tooltip
                  direction="top"
                  offset={[0, -6]}
                  opacity={1}
                  permanent={false}
                >
                  <span className="text-sm font-medium">{p.name}</span>
                </Tooltip>
              </CircleMarker>
            );
          })}
        </MapContainer>

      </div>
    </div>
  );
}
