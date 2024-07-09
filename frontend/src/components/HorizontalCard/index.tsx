"use client";

import {
  background_color_default,
  background_color_secondary,
} from "@/lib/constants";
import { HorizontalCardProps } from "@/lib/types";
import { Button, Card, Flex, List } from "antd";
import Link from "next/link";
import { BrokerIcon } from "../BrokerIcon";
import { TagIcon } from "../TagIcon";

export const HorizontalCard = (props: HorizontalCardProps): JSX.Element => {
  const brokerRender = BrokerIcon(props.broker);
  const topPadding = "20px";
  const bottomPadding = "20px";
  const tags = [
    {
      imageSrc: "/size.png",
      value: props.size.toString(),
    },
    {
      imageSrc: "/car.png",
      value: props.parkingSpaces.toString(),
    },
    {
      imageSrc: "/bathroom.png",
      value: props.bathrooms.toString(),
    },
    {
      imageSrc: "/room.png",
      value: props.bedrooms.toString(),
    },
  ];
  if (props.isPetFriendly) {
    tags.push({
      imageSrc: "/pet.png",
      value: "Pet Friendly",
    });
  }
  if (props.withAccessibility) {
    tags.push({
      imageSrc: "/accessibility.png",
      value: "Acessibilidade",
    });
  }
  if (props.withFurniture) {
    tags.push({
      imageSrc: "/furniture.png",
      value: "Mobiliado",
    });
  }
  const infosCol = (
    <Flex
      vertical
      align="flex-start"
      justify="space-between"
      style={{
        width: "100%",
        height: "100%",
        paddingTop: topPadding,
        paddingBottom: bottomPadding,
      }}
    >
      <div>
        <p style={{ fontSize: "32px", color: "black" }}>{props.name}</p>
      </div>
      <div>
        <p style={{ color: "black" }}>{"R$ " + props.price}</p>
        <p style={{ color: "black" }}>{props.size + " m2"}</p>
        <p style={{ color: "black" }}>
          {"Valor do m2: R$ " + props.pricePerSquareMeter}
        </p>
      </div>
    </Flex>
  );
  const tagsCol = (
    <List
      dataSource={tags}
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 4,
        lg: 4,
        xl: 6,
        xxl: 2,
      }}
      style={{
        width: "100%",
        height: "100%",
        paddingTop: topPadding,
        paddingBottom: bottomPadding,
        alignItems: "center",
      }}
      renderItem={(tag) => (
        <List.Item>
          <TagIcon {...tag} />
        </List.Item>
      )}
    />
  );
  const contactCol = (
    <Flex
      vertical
      gap="10px"
      style={{
        width: "100%",
        height: "100%",
        paddingTop: topPadding,
        paddingBottom: bottomPadding,
        display: props.isBrokerPage ? "none" : undefined,
      }}
    >
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
      {brokerRender}
    </Flex>
  );

  return (
    <Link href={"/imovel/" + props.id}>
      <Card
        hoverable
        style={{ height: "200px", borderRadius: "30px" }}
        styles={{ body: { padding: 0, overflow: "hidden" } }}
      >
        <Flex
          align="center"
          gap="10px"
          style={{
            height: "200px",
            width: "100%",
            overflow: "hidden",
            borderRadius: "30px",
            paddingRight: "30px",
            background: background_color_secondary,
            padding: 0,
          }}
        >
          <img
            alt="house"
            width="100%"
            height="100%"
            src={props.imgSrc}
            style={{ objectFit: "cover" }}
          />
          {infosCol}
          {tagsCol}
          {contactCol}
        </Flex>
      </Card>
    </Link>
  );
};
