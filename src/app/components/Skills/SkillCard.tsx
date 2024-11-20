import { Card, CardContent, CardTitle } from "../ui/card";
import React from "react";

interface SkillCardProps {
  cardName: string;
  cardIcon: React.ReactNode;
  iconColor: string;
}
export default function SkillCard(cardProps: SkillCardProps) {
  return (
    <Card className="text-center flex justify-center items-center relative group hover:bg-opacity-90 transition-all duration-500 cursor-default">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

      <CardTitle
        className={`text-2xl font-bold p-4 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white z-10 ${cardProps.iconColor}`}
      >
        {cardProps.cardName}
      </CardTitle>

      <CardContent
        className={`p-7 flex items-center justify-center self-center ${cardProps.iconColor} group-hover:opacity-0 transition-opacity duration-500`}
      >
        {cardProps.cardIcon}
      </CardContent>
    </Card>
  );
}
