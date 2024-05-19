"use client";

import { HorizontalCardProps } from "@/lib/types";
import { Button, Card, Flex, List } from "antd";
import { BrokerIcon } from "../BrokerIcon";
import { TagIcon } from "../TagIcon";
import {
  background_color_default,
  background_color_secondary,
  button_color,
} from "@/lib/constants";

export const HorizontalCard = (props: HorizontalCardProps): JSX.Element => {
  const brokerRender = BrokerIcon(props.broker);
  const topPadding = "20px";
  const bottomPadding = "20px";
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
        <p style={{ fontSize: "32px", color: "black" }}>
          {props.county + ", " + props.city}
        </p>
        <p style={{ color: "black" }}>{props.street}</p>
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
      dataSource={props.tags}
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
  );
};
