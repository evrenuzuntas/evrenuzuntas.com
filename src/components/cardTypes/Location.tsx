import { Navigation, Cloud } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import type { BentoItemData } from "@/constants/bentoItems";

export function Location({ city, countryCode }: BentoItemData) {
  return (
    <>
      <header className="flex items-start justify-between shrink-0">
        <span className="h-4 w-4 text-white/60 [&>svg]:h-full [&>svg]:w-full">
          <Navigation />
        </span>
        {countryCode && (
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{ width: "1.4em", height: "1.4em", borderRadius: "6px" }}
            aria-label="Türk Bayrağı"
          />
        )}
      </header>
      <div className="flex-1 flex flex-col min-h-0 justify-end">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium">
            {city}, {countryCode}
          </span>
          <div className="flex items-center gap-1.5 text-white/50">
            <Cloud className="h-3.5 w-3.5" strokeWidth={1.5} />
            <span className="text-xs">Hava Durumu</span>
          </div>
        </div>
      </div>
    </>
  );
}
