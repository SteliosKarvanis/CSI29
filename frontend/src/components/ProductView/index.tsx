import { Button, Carousel, Flex, Row } from "antd";
import { ProductProps } from "@/lib/types";
import {
  background_color_default,
  background_color_secondary,
} from "@/lib/constants";
import { ImageGallery } from "./media";

export const ProductView = (props: ProductProps): JSX.Element => {
  const infosCol = (
    <Flex
      vertical
      align="flex-start"
      justify="center"
      gap={20}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div>
        <p style={{ fontSize: "32px", color: "black" }}>
          {props.district + ", " + props.city}
        </p>
        <p style={{ fontSize: "20px", color: "black" }}>{props.street}</p>
      </div>
      <div>
        <p style={{ color: "black" }}>{"R$ " + props.price}</p>
        <p style={{ color: "black" }}>
          {"Valor do m2: R$ " + props.pricePerSquareMeter}
        </p>
      </div>
      <Button
        shape="round"
        style={{
          background: background_color_default,
          color: "white",
          height: "100%",
          width: "100%",
        }}
      >
        Contatar Corretor
      </Button>
    </Flex>
  );

  return (
    <Flex
      align="center"
      justify="center"
      gap={50}
      style={{
        height: "600px",
        width: "100%",
        overflow: "hidden",
        padding: "200px",
        background: background_color_secondary,
      }}
    >
      <ImageGallery images={props.images} size="500px" />
      {infosCol}
    </Flex>
  );
};
