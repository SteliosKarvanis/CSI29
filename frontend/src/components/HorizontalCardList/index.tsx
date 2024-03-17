import { HorizontalCardListProps } from "@/lib/types";
import { HorizontalCard } from "../HorizontalCard";

export const HorizontalCardList = (
  props: HorizontalCardListProps
): JSX.Element => {
  const cardsRender = props.cards.map((card, index) => (
    <HorizontalCard key={index} {...card} />
  ));
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingTop: "20px",
        paddingLeft: "200px",
        paddingRight: "200px",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "30px",
        display: "inline-flex",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          color: "black",
          fontSize: "36px",
          fontFamily: "Inter",
          fontWeight: 500,
          lineHeight: "72px",
          wordWrap: "break-word",
        }}
      >
        Resultados
      </div>
      <div
        style={{
          alignSelf: "stretch",
          height: "100%",
          paddingLeft: "50px",
          paddingRight: "50px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "50px",
          display: "flex",
        }}
      >
        {cardsRender}
      </div>
    </div>
  );
};
