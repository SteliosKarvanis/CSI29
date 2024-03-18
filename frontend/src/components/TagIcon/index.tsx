import { TagProps } from "@/lib/types";
import { Flex } from "antd";
import Image from "next/image";

export const TagIcon = (props: TagProps): JSX.Element => {
  return (
    <Flex align="center" justify="flex-start" gap="5px">
      <Image alt="icon" width="30" height="30" src={props.imageSrc} />
      <p style={{color: "black", textAlign: "center"}}>
        {props.value}
      </p>
    </Flex>
  );
};
