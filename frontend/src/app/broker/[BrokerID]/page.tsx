import { HorizontalCardList } from "@/components/HorizontalCardList";
import { HorizontalCardListProps } from "@/lib/types";
import { GET_HORIZONTAL_CARD_LIST } from "../../api/product/route";

export default async function Broker() {
  // const responses = await GET_HORIZONTAL_CARD_LIST('http://backend:8000/endpoints/imoveis_por_proprietario/' + brokerID);
  const responses = await GET_HORIZONTAL_CARD_LIST('http://backend:8000/endpoints/imoveis_ativos_info_completa');
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
