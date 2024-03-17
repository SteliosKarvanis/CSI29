import { VerticalCardListProps } from "@/lib/types";
import { VerticalCard } from "../VerticalCard";

export const VerticalCardList = (props: VerticalCardListProps): JSX.Element => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingLeft: "50px",
        paddingRight: "50px",
        flexDirection: "column",
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: "10px",
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
