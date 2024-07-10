"use client";

import { HorizontalCardList } from "@/components/HorizontalCardList";
import { ProductView } from "@/components/ProductView";
import { HorizontalCardListProps } from "@/lib/types";
import { Col } from "antd";
import { useParams } from "next/navigation";
import { GET, GET_HORIZONTAL_CARD_LIST } from "../../api/product/route";

export default async function ProductPage() {
  const params = useParams();
  const product = await GET('http://backend:8000/endpoints/imovel_detalhes/' + params["ProductID"]);
  const imgs=await GET('http://backend:8000/endpoints/multimidia_por_imovel/'+params["ProductID"]);


  // Suggestions
  const destaques = await GET_HORIZONTAL_CARD_LIST(
    "http://backend:8000/endpoints/imoveis_ativos_info_completa"
  );
  const cardsList: HorizontalCardListProps = {
    name: "Outras Similares",
    cards: destaques,
  };
  return (
    <Col>
      <ProductView {...product[0].fields} imgSrc={"http://localhost:8000/"+imgs[0]["fields"]["arquivo"]}/>
      <HorizontalCardList {...cardsList} />
    </Col>
  );
}
