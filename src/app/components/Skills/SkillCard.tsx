import { Card, CardContent, CardTitle } from "../ui/card";
import React from "react";

interface SkillCardProps {
  cardName: string;
  cardIcon: React.ReactNode;
  iconColor: string;
}
export default function SkillCard(cardProps: SkillCardProps) {
  return (
    <Card className="group relative flex cursor-default items-center justify-center text-center transition-all duration-500 hover:bg-opacity-90">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-80" />

      <CardTitle
        className={`absolute inset-0 z-10 flex items-center justify-center p-4 text-2xl font-bold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${cardProps.iconColor}`}
      >
        {cardProps.cardName}
      </CardTitle>

      <CardContent
        className={`flex items-center justify-center self-center p-7 ${cardProps.iconColor} transition-opacity duration-500 group-hover:opacity-0`}
      >
        {cardProps.cardIcon}
      </CardContent>
    </Card>
  );
}
