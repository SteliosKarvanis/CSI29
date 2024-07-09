import { HorizontalCardList } from "@/components/HorizontalCardList";
import { HorizontalCardListProps } from "@/lib/types";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { GET, GET_HORIZONTAL_CARD_LIST } from "../api/product/route";

export default async function Broker() {
  const router = useRouter();
  const brokerID = useMemo(() => {
    return router.query.brokerID as string;
  }, [router]);

  const responses = await GET_HORIZONTAL_CARD_LIST('http://backend:8000/endpoints/imoveis_por_proprietario/' + brokerID);
  const props: HorizontalCardListProps = {
    name: "My Ads",
    cards: [],
  };
  for (const response of responses) {
    props.cards.push(response);
  }
  return (
    <div>
      <HorizontalCardList isBrokerPage {...props} />;
    </div>
  );
};
