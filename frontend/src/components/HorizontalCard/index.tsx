"use client";

import {
  background_color_default,
  background_color_secondary,
} from "@/lib/constants";
import { HorizontalCardProps, TagProps } from "@/lib/types";
import { Button, Card, Flex, List, Row } from "antd";
import { BrokerIcon } from "../BrokerIcon";
import { TagIcon } from "../TagIcon";
import styles from './layout.module.css';
import Link from "antd/es/typography/Link";

export const HorizontalCard = (props: HorizontalCardProps): JSX.Element => {
  const brokerRender = BrokerIcon(props.broker);
  const topPadding = "20px";
  const bottomPadding = "20px";
  const rightPadding = "20px";
  const tags: TagProps[] = [
    {
      imageSrc: "/size.png",
      value: props.size,
    },
    {
      imageSrc: "/car.png",
      value: props.parkingSpaces,
    },
    {
      imageSrc: "/bathroom.png",
      value: props.bathrooms,
    },
    {
      imageSrc: "/room.png",
      value: props.bedrooms,
    },
  ];
  if (props.isPetFriendly) {
    tags.push({
      imageSrc: "/pet.png",
      //value: props.isPetFriendly,
    });
  }
  if (props.withAccessibility) {
    tags.push({
      imageSrc: "/accessibility.png",
      //value: props.withAccessibility,
    });
  }
  if (props.withFurniture) {
    tags.push({
      imageSrc: "/furniture.png",
      //value: "Mobiliado",
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
        paddingRight: rightPadding,
      }}
    >
      <div>
        <p style={{ fontSize: "20px", color: "black" }}>{props.name}</p>
      </div>
      <div>
        <p style={{ color: "black" }}>{"R$ " + props.price}</p>
        <p style={{ color: "black" }}>{props.size + " m2"}</p>
        <p style={{ color: "black" }}>
          {"Valor do m2: R$ " + Math.round(props.pricePerSquareMeter*100000)/100000}
        </p>
      </div>
    </Flex>
  );
  const tagsCol = (
    <List
      dataSource={tags}
      grid={{
        gutter: 16,  // Space between columns (in pixels)
        xs: 1,       // Number of columns for extra small screens (less than 576px)
        sm: 1,       // Number of columns for small screens (576px and above)
        md: 2,       // Number of columns for medium screens (768px and above)
        lg: 2,       // Number of columns for large screens (992px and above)
        xl: 2,       // Number of columns for extra large screens (1200px and above)
        xxl: 2,      // Number of columns for extra extra large screens (1600px and above)
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
      <Row>
        <Button
          shape="round"
          style={{
            background: background_color_default,
            color: "white",
            height: "100%",
            width: "80%",
          }}
          href={"/broker/"+props.broker.id}
        > 
          Contatar Corretor
        </Button>
      </Row>
      <Row>
        {brokerRender}
      </Row>
    </Flex>
  );

  return (
    <Link href={"/product/"+ props.id+`?search=${props.id}`}>
      <Card
        hoverable
        style={{ height: "200px", borderRadius: "30px", width: "1000px" }}
        bodyStyle={{ padding: 0, overflow: "hidden" }}
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
            display: "flex"
          }}
        >
          <div className={styles.imageContainer}>
            <img
              alt="house"
              src={props.imgSrc}
              style={{ objectFit: "fill" }}
            />
          </div>
          <div className={styles.textContainer}>
            {infosCol}
            {tagsCol}
            {contactCol}
          </div>
        </Flex>
      </Card>
    </Link>
  );
};

