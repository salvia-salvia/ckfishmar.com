"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function SreachBoxFish({
  onSearch,
  fishQuery,
}: {
  onSearch: (query: string) => void;
  fishQuery: string | null;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState(fishQuery ?? "");

  const hadnleSearch = () => {
    router.push(`${pathname}?fish=${search}`);
    onSearch(search);
  };

  return (
    <div>
      <div className="w-full max-w-sm md:min-w-[330px]">
        <div className="relative flex items-center">
          <input
            defaultValue={fishQuery ?? ""}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent placeholder:text-slate-400 placeholder:font-open-sans text-[#34699a] text-sm border border-slate-200 pr-3 pl-7 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Psetta maxima, RODABALLO..."
          />

          <button
            onClick={hadnleSearch}
            className="ml-2 cursor-pointer bg-[#34699a] p-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-[#34699a] focus:shadow-none active:bg-[#34699a] hover:bg-[#34699a] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
