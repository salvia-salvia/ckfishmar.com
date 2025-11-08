"use client";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RefreshCw, Search, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import { getAllFishPort } from "@/lib/actions/fishPort.actions";
import { getAllPorts } from "@/lib/actions/port.actions";

import { IFishPortPopulated } from "@/lib/database/models/FishPort.model";
import { countriesToSelect } from "@/constants";
import IsErrorInFishPriceTable from "./IsErrorInFishPriceTable";
import FishPriceTable from "./FishPriceTable";

interface FishPriceTableProps {
  selectedPort?: string;

  allFishPort?: {
    data: IFishPortPopulated[];
    total: number;
    totalPages: number;
  };
}

export type SortField = "name" | "price" | "port" | "change" | "createdAt";
type SortOrder = "asc" | "desc";

export default function FishPriceInfo({
  selectedPort,

  allFishPort,
}: FishPriceTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [portFilter, setPortFilter] = useState("");
  const [sortField, setSortField] = useState<SortField>("createdAt");
  const [sortOrder, setSortOrder] = useState<SortOrder>("asc");
  const [selectedRowId, setSelectedRowId] = useState<string>("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("es");
  const [spinning, setSpinning] = useState(false);
  const [seconds, setSeconds] = useState(30);

  // Fetch data
  const {
    data: fishPrices,
    isError: fishPricesIsErorr,

    refetch,
  } = useQuery({
    queryKey: ["fishPrices", portFilter, sortField],
    queryFn: async () =>
      await getAllFishPort({ portId: portFilter, sortBy: sortField }),
    initialData: allFishPort,
  });

  const { data: ports } = useQuery({
    queryKey: ["ports"],
    queryFn: async () => await getAllPorts(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (seconds === 1) {
      refetch();
    }
  }, [seconds, refetch]);
  const handleSort = (field: SortField) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const handleClickRefresh = () => {
    refetch();
    setSeconds(30);

    // start animation
    setSpinning(true);

    // stop after 3s
    setTimeout(() => {
      setSpinning(false);
    }, 3000);
  };

  <IsErrorInFishPriceTable IsError={fishPricesIsErorr} />;

  return (
    <div
      className="bg-card flex-1 border font-open-sans border-border my-8 lg:m-0 overflow-hidden"
      data-testid="fish-price-table"
    >
      {/* Table Header */}
      <div className="border-b border-border p-4">
        <div className="flex items-center justify-between mb-4">
          <h2
            className="text-lg flex items-center text-gray-800 gap-3 font-semibold"
            data-testid="text-table-title"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live Fish Prices
          </h2>
          <div className="flex items-center space-x-6">
            <Button
              variant="secondary"
              size="sm"
              onClick={handleClickRefresh}
              className="cursor-pointer rounded-none border bg-[#34699a] hover:bg-[#34699a]/80 duration-300 text-white"
              data-testid="button-refresh-data"
            >
              <RefreshCw
                className={`mr-1 h-3 w-3 ${spinning ? "animate-spin" : ""}`}
              />
              Refresh
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col xl:flex-row gap-3">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search fish species..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 bg-white border-border rounded-none"
                data-testid="input-search-species"
              />
            </div>
          </div>
          <div className="flex justify-between gap-5">
            <div>
              <Select
                value={selectedCountryCode}
                onValueChange={setSelectedCountryCode}
              >
                <SelectTrigger
                  className="w-44 cursor-pointer  rounded-none text-gray-600"
                  data-testid="select-country"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {countriesToSelect.map((country) => (
                    <SelectItem key={country.code} value={country.code}>
                      <div className="flex items-center space-x-6">
                        <Image
                          width={20}
                          height={20}
                          alt={`${country.code} flag`}
                          src={`/icons/squareFlags/${country.code}.svg`}
                        />
                        <span>{country.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-sm text-gray-600 hidden lg:flex">
                Select country to display commercial name (price unaffected).
              </p>
            </div>
            <Select
              value={portFilter}
              onValueChange={setPortFilter}
              disabled={!!selectedPort}
            >
              <SelectTrigger
                className="  w-[180px]  cursor-pointer  rounded-none border-border"
                data-testid="select-port-filter"
              >
                <SelectValue placeholder="All Ports" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-ports">All Ports</SelectItem>
                {ports?.map((port, idx) => (
                  <SelectItem key={idx} value={port._id}>
                    {port.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <p className="text-sm text-gray-600 lg:hidden">
            Select country to display commercial name (price unaffected).
          </p>
        </div>
      </div>

      {/* Table Content */}
      <FishPriceTable
        fishPrices={fishPrices?.data}
        handleSort={handleSort}
        selectedRowId={selectedRowId}
        selectedCountryCode={selectedCountryCode}
        dataLength={fishPrices?.data.length ?? 0}
      />

      {/* Table Footer */}
      <div className="border-t border-border p-4">
        <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground">
          <span data-testid="text-table-summary">
            Showing <span className="text-foreground font-medium">{30}</span> of
            <span className="text-foreground font-medium px-1">
              {fishPrices?.total || 0}
            </span>
            fish types
          </span>
          <div className="flex items-center space-x-2">
            <span>
              Auto-refresh: <span className="text-gray-800">{seconds}s</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
