import { company_name } from "@/lib/constants";
import Link from "next/link";

export const HomeImage = (): JSX.Element => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: "478px",
        paddingRight: "478px",
        paddingTop: "213px",
        paddingBottom: "213px",
        backgroundImage: "url(house_example.jpg)",
        backgroundSize: "cover",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          textAlign: "center",
          color: "white",
          fontSize: "64px",
          fontFamily: "Inter",
          fontWeight: 700,
          wordWrap: "break-word",
        }}
      >
        {company_name}
      </div>
      <div
        style={{
          textAlign: "center",
          color: "white",
          fontSize: "36px",
          fontFamily: "Inter",
          fontWeight: 700,
          lineHeight: "54px",
          wordWrap: "break-word",
        }}
      >
        OS melhores imoveis
      </div>
      <div
        style={{
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingTop: "14px",
          paddingBottom: "14px",
          background: "black",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          display: "inline-flex",
        }}
      >
        <Link href="/search">
        <div
          style={{
            color: "white",
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: 500,
            lineHeight: "24px",
            wordWrap: "break-word",
          }}
        >
          Buscar
        </div>
        </Link>
      </div>
    </div>
  );
};
