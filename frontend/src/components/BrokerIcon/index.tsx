import { BrokerProps } from "@/lib/types";

export const BrokerIcon = (props: BrokerProps): JSX.Element => {
  return (
    <div
      style={{
        alignSelf: "stretch",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "10px",
        display: "inline-flex",
      }}
    >
      <img
        style={{ width: "50px", height: "50px", borderRadius: "50px" }}
        src={props.imgSrc}
      />
      <div
        style={{
          flex: "1 1 0",
          alignSelf: "stretch",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "inline-flex",
        }}
      >
        <div
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            color: "black",
            fontSize: "20px",
            fontFamily: "Inter",
            fontWeight: 500,
            wordWrap: "break-word",
          }}
        >
          {props.name}
        </div>
        <div
          style={{
            alignSelf: "stretch",
            flex: "1 1 0",
            color: "black",
            fontSize: "14px",
            fontFamily: "Inter",
            fontWeight: 500,
            wordWrap: "break-word",
          }}
        >
          {props.role}
        </div>
      </div>
    </div>
  );
};
