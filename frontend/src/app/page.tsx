import { HomeImage } from "@/components/HomeScreen";
import { Search } from "@/components/Search";
import { VerticalCardList } from "@/components/VerticalCardList";
import { VerticalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { GET } from "./api/product/route";

export default async function Home() {
  const responses = await GET('http://backend:8000/endpoints/imoveis_ativos_info_completa');
  const cardsList: VerticalCardListProps = {
    name: "Em Alta",
    cards: [
      {
        id: "0",
        city: responses[0]["nome_residencia"],
        county: responses[0]["nome_residencia"],
        street: responses[0]["descricao"],
        price: responses[0]["preco_compra"],
        pricePerSquareMeter: responses[0]["metros_quadrados"],
        imgSrc: "/house_example.jpg" //"http://backend:8000/static/" + responses[0]["images"][0], // TODO: image not found
      },
      {
        id: "1",
        city: responses[1]["nome_residencia"],
        county: responses[1]["nome_residencia"],
        street: responses[1]["descricao"],
        price: responses[1]["preco_compra"],
        pricePerSquareMeter: responses[1]["metros_quadrados"],
        imgSrc: "/house_example.jpg"// "http://backend:8000/static/" + responses[1]["images"][0], // TODO: image not found
      },
      {
        id: "2",
        city: responses[2]["nome_residencia"],
        county: responses[2]["nome_residencia"],
        street: responses[2]["descricao"],
        price: responses[2]["preco_compra"],
        pricePerSquareMeter: responses[2]["metros_quadrados"],
        imgSrc: "/house_example.jpg" //"http://backend:8000/static/" + responses[2]["images"][0], // TODO: image not found
      },
    ],
  };
  return (
    <Col>
      <HomeImage />
      <Search />
      <VerticalCardList {...cardsList} />
      <VerticalCardList {...cardsList} />
      <VerticalCardList {...cardsList} />
    </Col>
  );
}
