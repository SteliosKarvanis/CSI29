import { HomeImage } from "@/components/HomeScreen";
import { Search } from "@/components/Search";
import { VerticalCardList } from "@/components/VerticalCardList";
import { VerticalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { GET } from "./api/product/route";
import { log } from "console";

export default async function Home() {
  const responses = await GET('http://backend:8000/endpoints/imoveis_ativos_info_completa');
  const cardsList: VerticalCardListProps = {
    name: "Em Alta",
    cards: [],
  };
  log(responses);
  for(const response of responses) {
    const card = {
      id: response["pk"],
      imgSrc: response["images"][0],
      name: response["nome_residencia"],
      size: response["metros_quadrados"],
      price: response["preco_compra"],
      pricePerSquareMeter: response["price_per_square_meter"],
      isPetFriendly: response["pet_friendly"],
      withFurniture: response["mobiliado"],
      withAccessibility: response["acessibilidade"],
      parkingSpaces: response["estacionamento"],
      bathrooms: response["banheiros_total"],
      bedrooms: response["quartos_total"],
      toRent: response["alugar"],
      broker: {
        name: response["corretagem"],
        role: response["corretagem"],
        imgSrc: response["corretagem"],
      },
    };
    cardsList.cards.push(card);
  }
  log(cardsList);
  return (
    <Col>
      <HomeImage />
      <Search />
      <VerticalCardList {...cardsList} />
    </Col>
  );
}
