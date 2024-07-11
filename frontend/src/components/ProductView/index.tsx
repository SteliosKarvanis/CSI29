import {
  background_color_default,
  background_color_secondary,
} from "@/lib/constants";
import { ImageGalleryProps, ProductProps } from "@/lib/types";
import { Button, Flex } from "antd";
import { ImageGallery } from "./media";

export const ProductView = (props: ProductProps): JSX.Element => {
  const imgprops: ImageGalleryProps = {
    images: props.imgSrcs,
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
          {props.nome_residencia}
        </p>
        <p style={{ fontSize: "20px", color: "black" }}>{props.descricao}</p>
        <p style={{ fontSize: "20px", color: "black" }}>
          {props.metros_quadrados} m2
        </p>
      </div>
      <div>
        {props.preco_compra ? (
          <p style={{ color: "black" }}>{"R$ " + props.preco_compra}</p>
        ) : (
          <p style={{ color: "black" }}></p>
        )}
        {props.preco_aluguel ? (
          <p style={{ color: "black" }}>
            {"aluguel: R$ " + props.preco_aluguel}
          </p>
        ) : (
          <p style={{ color: "black" }}></p>
        )}
        {props.estacionamento ? (
          <p style={{ color: "black" }}>{"Estacionamento"}</p>
        ) : (
          <p style={{ color: "black" }}></p>
        )}
        {props.pet_friendly ? (
          <p style={{ color: "black" }}>{"Pet Friendly"}</p>
        ) : (
          <p style={{ color: "black" }}></p>
        )}
        {props.mobiliado ? (
          <p style={{ color: "black" }}>{"Mobiliado"}</p>
        ) : (
          <p style={{ color: "black" }}></p>
        )}
      </div>
      <Button
        shape="round"
        style={{
          background: background_color_default,
          color: "white",
          height: "100%",
          width: "100%",
        }}
        href={"/broker/" + props.corretagem[0]}
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
      <ImageGallery {...imgprops} />
      {infosCol}
    </Flex>
  );
};
