import { HorizontalCardProps } from "@/lib/types";
import { BrokerIcon } from "../BrokerIcon";
import { TagIcon } from "../TagIcon";

export const HorizontalCard = (props: HorizontalCardProps): JSX.Element => {
  const brokerRender = BrokerIcon(props.broker);
  const address = `${props.city}, ${props.county}`;
  const tagsRender = props.tags.map((tag, index) => (
    <TagIcon key={index} {...tag} />
  ));
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        background: "#FBFCC8",
        borderRadius: "30px",
        overflow: "hidden",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        gap: "10px",
        display: "inline-flex",
      }}
    >
      <img style={{ flex: "1 1 0", alignSelf: "stretch" }} src={props.imgSrc} />
      <div
        style={{
          flex: "1 1 0",
          alignSelf: "stretch",
          paddingTop: "20px",
          paddingBottom: "20px",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "20px",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              height: "33.89px",
              color: "black",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: "30px",
              wordWrap: "break-word",
            }}
          >
            {address}
          </div>
          <div
            style={{
              alignSelf: "stretch",
              height: "33.89px",
              color: "#828282",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: "30px",
              wordWrap: "break-word",
            }}
          >
            {props.street}
          </div>
        </div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            color: "black",
            fontSize: "20px",
            fontFamily: "Inter",
            fontWeight: "500",
            lineHeight: "30px",
            wordWrap: "break-word",
          }}
        >
          {props.size} m2
        </div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "5px",
            display: "flex",
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              flex: "1 1 0",
              color: "black",
              fontSize: "24px",
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: "36px",
              wordWrap: "break-word",
            }}
          >
            R$ {props.price}
          </div>
          <div
            style={{
              alignSelf: "stretch",
              flex: "1 1 0",
              color: "#828282",
              fontSize: "20px",
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: "30px",
              wordWrap: "break-word",
            }}
          >
            Valor do m2: R$ {props.pricePerSquareMeter}
          </div>
        </div>
      </div>
      <div
        style={{
          flex: "1 1 0",
          alignSelf: "stretch",
          paddingTop: "20px",
          paddingBottom: "20px",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "5px",
          display: "inline-flex",
        }}
      >
        {tagsRender}
      </div>
      <div
        style={{
          flex: "1 1 0",
          alignSelf: "stretch",
          paddingTop: "20px",
          paddingBottom: "20px",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: "20px",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            width: "316.25px",
            flex: "1 1 0",
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingTop: "14px",
            paddingBottom: "14px",
            background: "#86B85E",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "8px",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "16px",
              fontFamily: "Inter",
              fontWeight: "500",
              lineHeight: "24px",
              wordWrap: "break-word",
            }}
          >
            Contatar Corretor
          </div>
        </div>
        {brokerRender}
      </div>
    </div>
  );
};
