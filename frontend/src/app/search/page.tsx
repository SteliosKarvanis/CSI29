import { HorizontalCardList } from "@/components/HorizontalCardList";
import { Search } from "@/components/Search";
import { HorizontalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { GET } from "../api/product/route";

export default async function SearchPage() {
  const responses = await GET('http://backend:8000/endpoints/imoveis_ativos_info_completa');
  const card = {
    imgSrc: "/house_example.jpg",
    city: responses[0]["nome_residencia"],
    county: "Ilfov",
    street: responses[0]["descricao"],
    size: responses[1]["metros_quadrados"],
    price: responses[0]["preco_aluguel"],
    pricePerSquareMeter: responses[0]["metros_quadrados"],
    tags: [
      {
        imageSrc: "/bathroom.png",
        value: "2",
      },
      {
        imageSrc: "/car.png",
        value: "5",
      },
      {
        imageSrc: "/room.png",
        value: "3",
      },
      {
        imageSrc: "/size.png",
        value: "100",
      },
    ],
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
