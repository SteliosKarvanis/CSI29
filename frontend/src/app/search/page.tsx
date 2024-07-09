import { HorizontalCard } from "@/components/HorizontalCard";
import { HorizontalCardList } from "@/components/HorizontalCardList";
import { Search } from "@/components/Search";
import { HorizontalCardListProps } from "@/lib/types";
import { Col } from "antd";
// import { GET } from "../api/product/route";

export default async function SearchPage() {
  // const responses = await GET('http://backend:8000/endpoints/imoveis_ativos_info_completa');
  const card = {
    id: "1",
    imgSrc: "/house_example.jpg",
    name: "Casa Exemplo",
    // city: responses[0]["nome_residencia"],
    city: "asda",
    county: "Ilfov",
    street: "sdascas",
    // street: responses[0]["descricao"],
    size: 100,
    // size: responses[1]["metros_quadrados"],
    price: 10000,
    // price: responses[0]["preco_aluguel"],
    pricePerSquareMeter: 100,
    // pricePerSquareMeter: responses[0]["metros_quadrados"],
    isPetFriendly: true,
    withFurniture: true,
    withAccessibility: true,
    parkingSpaces: 2,
    bathrooms: 2,
    bedrooms: 2,
    toRent: true,
    broker: {
      name: "Vinicius Menezes",
      role: "Corretor Associado",
      imgSrc: "broker.png",
    },
  };
  const cardsList: HorizontalCardListProps = {
    name: "Resultados",
    cards: [card, card, card],
  };
  return (
    <Col>
      <Search />
      <HorizontalCardList {...cardsList} />
    </Col>
  );
}
