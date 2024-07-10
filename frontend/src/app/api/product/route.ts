import { HorizontalCardProps } from "@/lib/types";

export async function GET(url: string) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data
}

export async function GET_HORIZONTAL_CARD_LIST(url: string,isbroker:boolean=false) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responses = await res.json();

  const outputs: HorizontalCardProps[] = [];
  for (const responsey of responses) {
    let response;
    if(!isbroker){
      response=responsey;
    } else{
      response=responsey.fields;
    }
    let price;
    if (response["preco_compra"]) {
      price = response["preco_compra"];
    } else {
      price = response["preco_aluguel"];
    }
    let price_per_meter = price / response["metros_quadrados"];
    let imgSrc = null;
    if (response["images"]) {
      imgSrc ="http://localhost:8000/"+response["images"][0];
    } else{
      if(isbroker){
        const imgs=await GET('http://backend:8000/endpoints/multimidia_por_imovel/'+responsey["pk"]);
        imgSrc="http://localhost:8000/"+imgs[0]["fields"]["arquivo"];
      }
    }
    const brokerid=response["corretagem"][0];
    const bi=await GET('http://backend:8000/endpoints/corretor_detalhes/'+brokerid);
    const brokerinfo=bi[0].fields;
    const card: HorizontalCardProps = {
      id: responsey["pk"],
      imgSrc: imgSrc,
      name: response["nome_residencia"],
      size: response["metros_quadrados"],
      price: price,
      pricePerSquareMeter: price_per_meter,
      isPetFriendly: response["pet_friendly"],
      withFurniture: response["mobiliado"],
      withAccessibility: response["acessibilidade"],
      parkingSpaces: response["estacionamento"],
      bathrooms: response["banheiros_total"],
      bedrooms: response["quartos_total"],
      toRent: response["alugar"],
      broker: { // TODO: get broker info by id
        id: response["corretagem"][0],
        name: brokerinfo["nome"],
        role: "Corretor Associado",
        imgSrc: "http://localhost:8000/"+brokerinfo["foto"],
      },
    };
    outputs.push(card);
  }
  return outputs;
}



