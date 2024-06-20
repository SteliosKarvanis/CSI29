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
    cards: [],
  };
  let i = 0
  for(let resp of responses) {
    cardsList['cards'].push(
      {
        id: `${i}`,
        city: responses[i]["nome_residencia"],
        county: responses[i]["nome_residencia"],
        street: responses[i]["descricao"],
        price: responses[i]["preco_compra"],
        pricePerSquareMeter: responses[i]["metros_quadrados"],
        imgSrc: "http://localhost:8000/" + responses[i]["images"][0] // "/house_example.jpg"// "http://backend:8000/static/" + responses[1]["images"][0], // TODO: image not found
      }
    )
    i++
  }
  return (
    <Col>
      <HomeImage />
      <Search />
      <VerticalCardList {...cardsList} />
    </Col>
  );
}
