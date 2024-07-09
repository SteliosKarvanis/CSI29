import { HomeImage } from "@/components/HomeScreen";
import { Search } from "@/components/Search";
import { VerticalCardList } from "@/components/VerticalCardList";
import { VerticalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { GET } from "./api/product/route";

export default async function Home() {
  const responses = await GET(
    "http://backend:8000/endpoints/imoveis_ativos_info_completa"
  );
  const cardsList: VerticalCardListProps = {
    name: "Em Alta",
    cards: [],
  };
  for (const response of responses) {
    let price;
    if (response["preco_compra"]) {
      price = response["preco_compra"];
    } else {
      price = response["preco_aluguel"];
    }
    const card = {
      id: response["pk"],
      imgSrc: response["images"][0],
      name: response["nome_residencia"],
      toRent: response["alugar"],
      price: price,
    };
    cardsList.cards.push(card);
  }
  return (
    <Col>
      <HomeImage />
      <Search />
      <VerticalCardList {...cardsList} />
    </Col>
  );
}
