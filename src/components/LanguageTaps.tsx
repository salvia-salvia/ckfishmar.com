"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Language, LANGUAGES } from "@/types";

interface LanguageTabsProps {
  activeLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function LanguageTabs({
  activeLanguage,
  onLanguageChange,
}: LanguageTabsProps) {
  return (
    <Tabs
      value={activeLanguage}
      onValueChange={(value) => onLanguageChange(value as Language)}
    >
      <TabsList className="grid w-full bg grid-cols-7">
        {LANGUAGES.map((lang) => (
          <TabsTrigger
            key={lang.code}
            value={lang.code}
            className="flex w-fit items-center gap-2 cursor-pointer"
          >
            <span className="text-[#34699a]">{lang.flag}</span>
            {/* <span>{lang.name}</span> */}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
