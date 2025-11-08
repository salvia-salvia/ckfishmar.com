"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";
import { IFishPortPopulated } from "@/lib/database/models/FishPort.model";
import { SortField } from "./FishPriceInfo";
import { countriesToSelect } from "@/constants";

export default function FishPriceTable({
  fishPrices,
  handleSort,
  selectedRowId,
  selectedCountryCode,
  dataLength,
}: {
  fishPrices?: IFishPortPopulated[];
  handleSort: (type: SortField) => void;
  selectedRowId: string;
  selectedCountryCode: string;
  dataLength: number;
}) {
  return (
    <div className="overflow-x-auto">
      <div className="max-h-[580px] overflow-y-auto">
        <table className="w-full">
          <thead className="bg-muted sticky top-0">
            <tr className="text-left text-xs md:text-sm text-muted-foreground">
              <th className="px-2 ml-6 block md:px-4 py-3 font-normal">
                Fish Species
              </th>
              <th className="px-2 md:px-4 py-3 text-center font-normal">
                Scientifc Name
              </th>
              <th className="px-2 md:px-4 py-3 text-center">
                <Button
                  variant="ghost"
                  className="h-auto p-0 font-normal hover:text-foreground"
                  onClick={() => handleSort("price")}
                  data-testid="header-price"
                >
                  Price/kg
                  <ArrowUpDown className="ml-1 h-3 w-3" />
                </Button>
              </th>
              <th className="px-2 md:px-4 py-3 text-center font-normal">
                Port
              </th>
              <th className="px-2 md:px-4 py-3 text-center font-normal">
                Change
              </th>
              <th className="px-2 md:px-4 py-3 text-center">
                <div className="h-auto p-0 font-normal hover:text-foreground">
                  Actions
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {fishPrices?.map((fishPrice: IFishPortPopulated, idx) => {
              const isSelected = selectedRowId === fishPrice._id.toString();
              const selectedCountry = countriesToSelect.find(
                (c) => c.code === selectedCountryCode
              );
              return (
                <tr
                  key={idx}
                  className={`hover:bg-muted/50 text-sm md:text-base transition-colors cursor-pointer ${
                    isSelected ? "bg-accent/10" : ""
                  }`}
                  // onClick={() => handleRowClick()}
                  data-testid={`row-fish-${fishPrice._id}`}
                >
                  <td className="px-2 md:px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10  rounded-full flex items-center justify-center text-xs font-bold text-white`}
                      >
                        <Image
                          width={50}
                          height={40}
                          alt={`${fishPrice.fish.name} image`}
                          src={`${fishPrice.fish.image}`}
                        />
                      </div>

                      <span
                        className="font-medium"
                        data-testid={`text-species-${fishPrice._id}`}
                      >
                        <ul>
                          {fishPrice.fish?.commercialNames?.[
                            selectedCountry?.name ?? ""
                          ]?.map((item, idx) => (
                            <li key={idx}>
                              <span className="bg-[#34699a]/30 capitalize px-1 py-0.5 rounded  text-sm">
                                {item.slug}
                              </span>
                              <span className="px-2 py-1 text-sm text-gray-700">
                                {item.commercialName}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </span>
                    </div>
                  </td>
                  <td className="px-2 md:px-4 py-3 text-center">
                    <span
                      className="font-medium text-gray-700"
                      data-testid={`text-price-${fishPrice._id}`}
                    >
                      {fishPrice.fish.scientifcName}
                    </span>
                  </td>
                  <td className="px-2 md:px-4 py-3 text-center">
                    <span
                      className="font-semibold text-gray-700"
                      data-testid={`text-price-${fishPrice._id}`}
                    >
                      {fishPrice.price.toFixed(2)} MAD
                    </span>
                  </td>

                  <td className="px-2 md:px-4 py-3 text-center">
                    <span
                      className="bg-gray-50 px-2 py-1 rounded text-xs font-poppins text-gray-800"
                      data-testid={`text-port-${fishPrice._id}`}
                    >
                      {fishPrice.port.name}
                    </span>
                  </td>
                  <td className="px-2 md:px-4  text-center py-3">
                    <span
                      className={`font-medium ${
                        Number(fishPrice.change) >= 0
                          ? "text-green-500"
                          : "text-destructive"
                      }`}
                      data-testid={`text-change-${fishPrice._id}`}
                    >
                      {Number(fishPrice.change) >= 0 ? "+" : ""}
                      {Number(fishPrice.change).toFixed(1)}%
                    </span>
                  </td>
                  <td
                    title="Details"
                    className="px-2 md:px-4 text-center py-3 "
                  >
                    <svg
                      width={24}
                      height={24}
                      className="fill-[#34699a]/80 hover:fill-[#34699a] mx-auto"
                      viewBox="0 0 256 256"
                      xmlSpace="preserve"
                    >
                      <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                        <path
                          d="M 80.335 78.219 L 60.806 58.691 c 8.208 -10.306 7.549 -25.354 -1.989 -34.892 c -5.126 -5.126 -11.845 -7.689 -18.564 -7.689 s -13.438 2.563 -18.564 7.689 c -10.253 10.253 -10.253 26.875 0 37.128 c 5.126 5.126 11.845 7.689 18.564 7.689 c 5.782 0 11.562 -1.904 16.329 -5.701 L 76.11 82.443 c 0.583 0.583 1.348 0.875 2.112 0.875 s 1.529 -0.292 2.112 -0.875 C 81.501 81.277 81.501 79.386 80.335 78.219 z M 25.914 56.702 c -3.83 -3.83 -5.94 -8.923 -5.94 -14.34 s 2.109 -10.509 5.94 -14.339 c 3.83 -3.83 8.923 -5.94 14.339 -5.94 s 10.509 2.109 14.34 5.94 c 3.83 3.83 5.94 8.923 5.94 14.339 s -2.109 10.509 -5.94 14.34 c -3.83 3.83 -8.923 5.94 -14.34 5.94 S 29.744 60.532 25.914 56.702 z"
                          transform=" matrix(1 0 0 1 0 0) "
                          strokeLinecap="round"
                        />
                        <path
                          d="M 14.374 56.026 c -0.438 -0.828 -0.837 -1.675 -1.192 -2.54 L 9.41 57.467 c -0.938 -0.571 -2.035 -0.906 -3.214 -0.906 C 2.774 56.562 0 59.336 0 62.759 c 0 3.422 2.774 6.197 6.197 6.197 c 3.422 0 6.197 -2.774 6.197 -6.197 c 0 -1.298 -0.401 -2.502 -1.083 -3.498 L 14.374 56.026 z M 6.197 66.344 c -1.977 0 -3.585 -1.608 -3.585 -3.585 c 0 -1.977 1.608 -3.585 3.585 -3.585 s 3.585 1.608 3.585 3.585 C 9.782 64.736 8.174 66.344 6.197 66.344 z"
                          transform=" matrix(1 0 0 1 0 0) "
                          strokeLinecap="round"
                        />
                        <path
                          d="M 83.803 6.681 c -3.422 0 -6.197 2.774 -6.197 6.197 c 0 1.255 0.376 2.421 1.017 3.396 l -12.249 12.93 c 0.426 0.848 0.809 1.711 1.147 2.588 l 1.172 -1.237 c 0 0 0 0 0 -0.001 l 11.793 -12.448 c 0.96 0.61 2.096 0.969 3.317 0.969 c 3.422 0 6.197 -2.774 6.197 -6.197 C 90 9.456 87.226 6.681 83.803 6.681 z M 83.803 16.464 c -1.977 0 -3.585 -1.608 -3.585 -3.585 c 0 -1.977 1.608 -3.585 3.585 -3.585 s 3.585 1.608 3.585 3.585 C 87.388 14.855 85.78 16.464 83.803 16.464 z"
                          transform=" matrix(1 0 0 1 0 0) "
                          strokeLinecap="round"
                        />
                        <path
                          d="M 57.185 38.905 l -6.711 7.084 c -0.973 -0.637 -2.135 -1.01 -3.385 -1.01 c -1.38 0 -2.65 0.457 -3.68 1.219 l -6.916 -6.611 h 0 c 0.58 -0.943 0.92 -2.049 0.92 -3.237 c 0 -3.422 -2.774 -6.197 -6.197 -6.197 c -3.422 0 -6.197 2.774 -6.197 6.197 c 0 1.299 0.401 2.503 1.084 3.498 h 0 l -3.092 3.264 c 0.048 1.128 0.203 2.234 0.461 3.311 l 4.531 -4.783 c 0.938 0.571 2.035 0.906 3.214 0.906 c 1.289 0 2.485 -0.394 3.476 -1.067 l 6.987 6.679 c -0.499 0.893 -0.787 1.921 -0.787 3.018 c 0 3.422 2.774 6.197 6.197 6.197 c 1.023 0 1.986 -0.252 2.836 -0.691 c 0.667 -0.452 1.296 -0.967 1.902 -1.516 c 0.909 -1.078 1.459 -2.469 1.459 -3.99 c 0 -1.226 -0.361 -2.366 -0.975 -3.328 l 5.22 -5.51 C 57.529 41.171 57.411 40.023 57.185 38.905 z M 31.216 39.935 c -1.977 0 -3.585 -1.608 -3.585 -3.585 s 1.608 -3.585 3.585 -3.585 c 1.977 0 3.585 1.608 3.585 3.585 S 33.193 39.935 31.216 39.935 z M 47.089 54.761 c -1.977 0 -3.585 -1.608 -3.585 -3.585 c 0 -1.977 1.608 -3.585 3.585 -3.585 s 3.585 1.608 3.585 3.585 C 50.674 53.153 49.066 54.761 47.089 54.761 z"
                          transform=" matrix(1 0 0 1 0 0) "
                          strokeLinecap="round"
                        />
                      </g>
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {dataLength === 0 && (
          <div
            className="text-center py-8 text-muted-foreground"
            data-testid="text-no-results"
          >
            No fish data found for the current filters
          </div>
        )}
      </div>
    </div>
  );
}
