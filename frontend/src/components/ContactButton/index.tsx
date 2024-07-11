import { background_color_default } from "@/lib/constants";
import { Button } from "antd";

const MailtoButton = () => {
  return (
    <Button
      shape="round"
      href="mailto:someone@example.com?subject=Hello&body=Just%20testing"
      style={{
        background: background_color_default,
        color: "white",
        height: "100%",
        width: "80%",
      }}
    >
      Contatar Corretor
    </Button>
  );
};

export default MailtoButton;
