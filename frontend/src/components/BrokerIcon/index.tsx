import { BrokerProps } from "@/lib/types";
import { Flex } from "antd";

export const BrokerIcon = (props: BrokerProps): JSX.Element => {
  return (
    <Flex
      align="center"
      justify="flex-start"
      style={{ width: "100%", height: "50px" }}
    >
      <img
        style={{ width: "50px", height: "50px", borderRadius: "50px" }}
        src={props.imgSrc}
      />
      <Flex
        vertical
        align="flex-start"
        justify="center"
        style={{ marginLeft: "10px" }}
      >
        <p style={{ fontSize: "20px", color: "black" }}>{props.name}</p>
        <p style={{ fontSize: "14px", color: "black" }}>{props.role}</p>
      </Flex>
    </Flex>
  );
};
