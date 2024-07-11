import { BrokerProps } from "@/lib/types";
import { Flex } from "antd";
import Image from "next/image";

export const BrokerIcon = (props: BrokerProps): JSX.Element => {
  return (
    <Flex
      align="center"
      justify="flex-start"
      style={{ width: "50px", height: "50px" }}
    >
      <Image
        priority
        unoptimized
        width={50}
        height={50}
        loader={({ src, width, quality }) => src}
        alt={props.imgSrc}
        src={props.imgSrc}
        style={{
          objectFit: 'cover', // cover, contain, none
        }}
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
