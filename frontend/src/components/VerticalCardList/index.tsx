import { VerticalCardListProps } from "@/lib/types";
import { Flex } from "antd";
import { VerticalCard } from "../VerticalCard";

export const VerticalCardList = (props: VerticalCardListProps): JSX.Element => {
  return (
    <Flex
      vertical
      gap="20px"
      style={{
        background: "white",
        paddingLeft: "20%",
        paddingRight: "20%",
        paddingTop: "50px",
      }}
    >
      <p style={{ color: "black", fontSize: "32px", textAlign: "center" }}>
        {props.name}
      </p>
      <Flex align="center" justify="center" gap="50px">
        {props.cards.map((card, index) => (
          <VerticalCard key={index} {...card} />
        ))}
      </Flex>
    </Flex>
  );
};
