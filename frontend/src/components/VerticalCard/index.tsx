"use client";

import { VerticalCardProps } from "@/lib/types";
import { Card } from "antd";
import Link from "next/link";
import React from "react";

const { Meta } = Card;
const titleRender = (props: VerticalCardProps): React.ReactNode => {
  return (
    <>
      <h1>{props.county + ", " + props.city}</h1>
      <p>{props.street}</p>
    </>
  );
};

const descriptionRender = (props: VerticalCardProps): React.ReactNode => {
  return (
    <>
      <p>{"R$ " + props.price}</p>
      <p>{"Valor do m2 R$" + props.pricePerSquareMeter}</p>
    </>
  );
};

export const VerticalCard = (props: VerticalCardProps): JSX.Element => {
  return (
    <Link href={"/imovel/" + props.id}>
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
