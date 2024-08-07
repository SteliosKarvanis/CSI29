"use client";

import { HorizontalCardList } from "@/components/HorizontalCardList";
import { HorizontalCardListProps } from "@/lib/types";
import { useParams } from "next/navigation";
import { GET_HORIZONTAL_CARD_LIST } from "../../api/product/route";

export default async function Broker() {
  //TODO: add contact information about the broker on this page
  const params = useParams();
  const responses = await GET_HORIZONTAL_CARD_LIST(
    "http://:8000/endpoints/imoveis_por_corretor/" + params["BrokerID"],true);
  const props: HorizontalCardListProps = {
    name: "My Ads",
    isBrokerPage: true,
    cards: responses,
  };
  return (
    <div>
      <HorizontalCardList isBrokerPage {...props} />;
    </div>
  );
}
