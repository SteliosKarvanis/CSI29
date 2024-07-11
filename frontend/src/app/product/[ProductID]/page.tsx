import { HorizontalCardList } from "@/components/HorizontalCardList";
import { ProductView } from "@/components/ProductView";
import { HorizontalCardListProps,ProductProps } from "@/lib/types";
import { Col } from "antd";
import { useParams } from "next/navigation";
import { GET, GET_HORIZONTAL_CARD_LIST } from "../../api/product/route";
//import {useRouter} from 'next/router';
export default async function ProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}){
  //const router = useRouter();
  //const { ProductID } = router.query;
  //const params=useParams();
  // const ProductID=params["ProductID"]
  const ProductID = searchParams.search as string
  const product = await GET('http://backend:8000/endpoints/imovel_detalhes/'+ProductID);
  const productdata=product[0].fields
  const imgs=await GET('http://backend:8000/endpoints/multimidia_por_imovel/'+ProductID);

  const imgstr: string[] = [];
  for (const img of imgs) {
    imgstr.push("http://localhost:8000/"+img["fields"]["arquivo"]);
  }
  // Suggestions
  const destaques = await GET_HORIZONTAL_CARD_LIST(
    "http://backend:8000/endpoints/imoveis_ativos_info_completa"
  );
  const cardsList: HorizontalCardListProps = {
    name: "Imóveis similares",
    cards: destaques,
  };
  const prodprops:ProductProps={
    imgSrcs: imgstr,
    imovel_id:'288a7aad-f037-44d6-9aa1-4c2894b4c7b0',
    destaque: productdata["destaque"],
    nome_residencia: productdata["nome_residencia"],
    comprar: productdata["comprar"],
    preco_compra: productdata["preco_compra"],
    alugar: productdata["alugar"],
    preco_aluguel: productdata["preco_aluguel"],
    taxa_condominio: productdata["taxa_condominio"],
    iptu: productdata["iptu"],
    metros_quadrados: productdata["metros_quadrados"],
    quartos_total: productdata["quartos_total"],
    quartos_suite: productdata["quartos_suite"],
    banheiros_total: productdata["banheiros_total"],
    mobiliado: productdata["mobiliado"],
    varanda: productdata["varanda"],
    direcao_sol: productdata["direcao_sol"],
    pet_friendly: productdata["pet_friendly"],
    acessibilidade: productdata["acessibilidade"],
    estacionamento: productdata["estacionamento"],
    descricao: productdata["descricao"],
    data_insercao: productdata["data_insercao"],  // ISO 8601 format
    data_ultima_modificacao: productdata["data_ultima_modificacao"],  // ISO 8601 format
    proprietario_id: productdata["proprietario_id"],  // Assuming Proprietario model has a string ID
    corretagem: productdata["corretagem"],
  }
  return (
    <Col>
      <ProductView {...prodprops}/> 
      <HorizontalCardList {...cardsList} />
    </Col>
  );
}
