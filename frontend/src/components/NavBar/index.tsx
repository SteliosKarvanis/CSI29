export const NavBar = (): JSX.Element => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        paddingLeft: "20px",
        paddingRight: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        background: "#FBFCC8",
        justifyContent: "space-between",
        alignItems: "flex-start",
        display: "inline-flex",
      }}
    >
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
        Corretora XXX
      </div>
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
          Alugar
        </div>
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
          Comprar
        </div>
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
          Lancamentos
        </div>
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
          Busca
        </div>
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
          Financiamento
        </div>
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
          Anunciar
        </div>
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
          Criar Conta
        </div>
        <div
          style={{
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "14px",
            paddingBottom: "14px",
            background: "#70CBFF",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            borderRadius: "16px",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            display: "flex",
            color: "white",
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: 500,
            lineHeight: "24px",
            wordWrap: "break-word",
          }}
        >
          Entrar
        </div>
      </div>
    </div>
  );
};
