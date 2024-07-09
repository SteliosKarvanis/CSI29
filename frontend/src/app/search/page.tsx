import { HorizontalCardList } from "@/components/HorizontalCardList";
import { Search } from "@/components/Search";
import { HorizontalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { GET_HORIZONTAL_CARD_LIST } from "../api/product/route";

export default async function SearchPage() {
  const responses = await GET_HORIZONTAL_CARD_LIST('http://backend:8000/endpoints/imoveis_ativos_info_completa');
  const cardsList: HorizontalCardListProps = {
    name: "Resultados",
    cards: responses,
  };
  return (
    <Col>
      <Search />
      <HorizontalCardList {...cardsList} />
    </Col>
  );
}
