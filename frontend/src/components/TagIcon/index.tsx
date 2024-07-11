import { TagProps } from "@/lib/types";
import { Flex } from "antd";
import Image from "next/image";

export const TagIcon = (props: TagProps): JSX.Element => {
  return (
    <Flex align="center" justify="flex-start" gap="5px">
      <Image
        priority
        unoptimized
        width={20}
        height={20}
        loader={({ src, width, quality }) => src}
        alt="icon"
        src={props.imageSrc}
        style={{
          objectFit: "cover", // cover, contain, none
        }}
      />
      <p style={{ color: "black", textAlign: "center" }}>{props.value}</p>
    </Flex>
  );
};
