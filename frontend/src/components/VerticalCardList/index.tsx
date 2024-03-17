import React from "react";
import { VerticalCard } from "../VerticalCard";
import { VerticalCardListProps, VerticalCardProps } from "@/lib/types";

export const VerticalCardList = (props: VerticalCardListProps): JSX.Element => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "white",
        alignItems: "flex-start",
        gap: "20px",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          color: "black",
          fontSize: "32px",
          fontFamily: "Inter",
          fontWeight: 500,
          lineHeight: "48px",
          wordWrap: "break-word",
        }}
      >
        {props.name}
      </div>
      <div
        style={{
          alignSelf: "stretch",
          paddingLeft: "40px",
          paddingRight: "40px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "64px",
          display: "inline-flex",
        }}
      >
        {props.cards.map((card, index) => (
          <VerticalCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};
