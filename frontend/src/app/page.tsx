import { HomeImage } from "@/components/HomeScreen";
import { Search } from "@/components/Search";
import { VerticalCardList } from "@/components/VerticalCardList";
import { VerticalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { GET, GET_HORIZONTAL_CARD_LIST } from "./api/product/route";

export default async function Home() {
  const responses = await GET_HORIZONTAL_CARD_LIST(
    "http://backend:8000/endpoints/imoveis_ativos_info_completa"
  );
  const cardsList: VerticalCardListProps = {
    name: "Em Alta",
    cards: responses,
  };
  return (
    <Col>
      <HomeImage />
      <Search />
      <VerticalCardList {...cardsList} />
    </Col>
  );
}
