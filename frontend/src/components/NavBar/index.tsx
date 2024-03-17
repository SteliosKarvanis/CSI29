import { background_color_default, company_name } from "@/lib/constants";
import Link from "next/link";

export const NavBar = (): JSX.Element => {
  const links = [
    { name: "Alugar", url: "/search" },
    { name: "Comprar", url: "/search" },
    { name: "Busca", url: "/search" },
    { name: "Financiamento", url: "/financiamento" },
    { name: "Anunciar", url: "/anunciar" },
  ];
  const buttons = [
    { name: "Criar Conta", url: "/signin" },
    { name: "Entrar", url: "/login" },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        background: background_color_default,
        justifyContent: "space-between",
        alignItems: "flex-start",
        display: "inline-flex",
      }}
    >
      <Link href="/">
        <div
          style={{
            width: "138px",
            alignSelf: "stretch",
            textAlign: "center",
            color: "black",
            fontSize: "20px",
            fontFamily: "Inter",
            fontWeight: 500,
            lineHeight: "30px",
            wordWrap: "break-word",
          }}
        >
          {company_name}
        </div>
      </Link>
      <div
        style={{
          width: "515px",
          alignSelf: "stretch",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "20px",
          display: "flex",
        }}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.url}>
            <div
              style={{
                color: "black",
                fontSize: "15px",
                fontFamily: "Inter",
                fontWeight: 400,
                lineHeight: "22.50px",
                wordWrap: "break-word",
              }}
            >
              {link.name}
            </div>
          </Link>
        ))}
      </div>
      <div
        style={{
          width: "235px",
          alignSelf: "stretch",
          borderRadius: "20px",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "20px",
          display: "flex",
        }}
      >
        {buttons.map((button, index) => (
          <Link key={index} href={button.url}>
            <div
              style={{
                paddingLeft: "16px",
                paddingRight: "16px",
                paddingTop: "14px",
                paddingBottom: "14px",
                background: "#70CBFF",
                boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                borderRadius: "16px",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
                display: "flex",
                color: "white",
                fontSize: "16px",
                fontFamily: "Inter",
                fontWeight: 500,
                lineHeight: "24px",
                wordWrap: "break-word",
              }}
            >
              {button.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
