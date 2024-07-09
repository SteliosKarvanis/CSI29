"use client";

import { HorizontalCardList } from "@/components/HorizontalCardList";
import { HorizontalCardListProps } from "@/lib/types";
import { useParams } from "next/navigation";
import { GET_HORIZONTAL_CARD_LIST } from "../../api/product/route";

export default async function Broker() {
  const params = useParams();
  const responses = await GET_HORIZONTAL_CARD_LIST(
    "http://backend:8000/endpoints/imoveis_por_corretor/" + params["BrokerID"]
  );
  const props: HorizontalCardListProps = {
    name: "My Ads",
    cards: responses,
  };
  return (
    <div>
      <HorizontalCardList isBrokerPage {...props} />;
    </div>
  );
}
