import { Button, Carousel, Flex, Row } from "antd";
import { BrokerProps, ProductProps, ImageGalleryProps } from "@/lib/types";
import {
  background_color_default,
  background_color_secondary,
} from "@/lib/constants";
import { ImageGallery } from "./media";

export const ProductView = (props: ProductProps): JSX.Element => {
  const imgprops:ImageGalleryProps={
    images: props.imgSrcs
  };
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
          {props.nome_residencia + ", " + props.comprar}
        </p>
        <p style={{ fontSize: "20px", color: "black" }}>{props.metros_quadrados}</p>
      </div>
      <div>
        <p style={{ color: "black" }}>{"compra: R$ " + props.preco_compra}</p>
        <p style={{ color: "black" }}>
          {"aluguel: R$ " + props.preco_aluguel}
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
        href={"/broker/"+props.corretagem[0]}
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
      <ImageGallery {...imgprops}/>
      {infosCol}
    </Flex>
  );
};
