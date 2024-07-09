"use client";

import { VerticalCardProps } from "@/lib/types";
import { Card } from "antd";
import Link from "antd/es/typography/Link";
import React from "react";

const { Meta } = Card;
const titleRender = (props: VerticalCardProps): React.ReactNode => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

const descriptionRender = (props: VerticalCardProps): React.ReactNode => {
  let buy_type = "A Venda";
  if (props.toRent) {
    buy_type = "Alugar";
  }

  return (
    <>
      <p>{buy_type}</p>
      <p>{"R$ " + props.price}</p>
    </>
  );
};

export const VerticalCard = (props: VerticalCardProps): JSX.Element => {
  return (
    <Link href={"/product/" + props.id}>
      <Card
        hoverable
        cover={<img src={props.imgSrc} width={250} height={250} />}
      >
        <Meta
          title={titleRender(props)}
          description={descriptionRender(props)}
        />
      </Card>
    </Link>
  );
};
