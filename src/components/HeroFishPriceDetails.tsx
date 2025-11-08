import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Badge,
  Calendar,
  FishIcon,
  MapPin,
  Star,
} from "lucide-react";
export default function HeroFishPriceDetails() {
  const fish = {
    name: "Atlantic Salmon",
    scientific_name: "Salmo salar",
    description:
      "Premium Atlantic salmon known for its rich flavor and high omega-3 content. Sustainably sourced from pristine waters, this fish offers exceptional taste and nutritional benefits. Perfect for grilling, baking, or serving as sashimi.",
    current_price: 24.5,
    price_change: 2.3,
    availability_status: "abundant",
    quality_grade: "premium",
    season: "Year-round (Peak: Sep-Nov)",
    origin: "Norwegian Fjords",
    image_url:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
  };
  return (
    <div className="relative overflow-hidden mt-35 w-fit mx-auto">
      <div className="absolute inset-0  "></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Fish Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#34699a]/10 flex items-center justify-center">
                  <FishIcon className="w-6 h-6 text-[#34699a]" />
                </div>
                <Badge className="bg-[#34699a]/10 text-[#34699a] border-[#34699a]/20">
                  Fresh Catch
                </Badge>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {fish.name}
              </h1>

              <p className="text-xl text-gray-600 italic">
                {fish.scientific_name}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl">
                {fish.description}
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{fish.origin}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{fish.season}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Star className="w-4 h-4" />
                <span className="font-medium">4.8 Rating</span>
              </div>
            </div>

            {/* Current Price Display */}
            <Card className="p-6 bg-gradient-to-r from-[#34699a]/5 to-blue-600/5 border border-[#34699a]/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Current Price (per kg)
                  </p>
                  <p className="text-4xl font-bold text-[#34699a]">
                    ${fish.current_price.toFixed(2)}
                  </p>
                </div>
                <div
                  className={`text-right ${
                    fish.price_change >= 0 ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  <p className="text-sm font-medium">
                    {fish.price_change >= 0 ? "+" : ""}
                    {fish.price_change.toFixed(1)}%
                  </p>
                  <p className="text-xs text-gray-500">vs last week</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Fish Image */}
          <div className="relative">
            <div className="aspect-square  overflow-hidden bg-gradient-to-br from-[#34699a]/10 to-blue-600/10 border border-[#34699a]/20">
              <img
                src={fish.image_url}
                alt={fish.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
