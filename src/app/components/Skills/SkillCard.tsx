import { Card, CardContent, CardTitle } from "../ui/card";
import React from "react";

interface SkillCardProps {
  cardName: string;
  cardIcon: React.ReactNode;
  iconColor: string;
}
export default function SkillCard(cardProps: SkillCardProps) {
  return (
    <Card className="group relative flex cursor-default items-center justify-center rounded-full text-center transition-all duration-500 hover:bg-opacity-90 max-sm:h-[75px] max-sm:w-[75px] max-sm:text-sm sm:h-[150px] sm:w-[150px] sm:text-lg md:text-xl lg:text-2xl">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80" />

      <CardTitle
        className={`absolute inset-0 z-10 flex items-center justify-center p-4 font-bold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 max-sm:text-xs sm:text-lg ${cardProps.iconColor}`}
      >
        {cardProps.cardName}
      </CardTitle>

      <CardContent
        className={`flex items-center justify-center self-center p-6 max-sm:text-2xl sm:text-4xl md:text-7xl ${cardProps.iconColor} transition-opacity duration-500 group-hover:opacity-0`}
      >
        {cardProps.cardIcon}
      </CardContent>
    </Card>
  );
}
