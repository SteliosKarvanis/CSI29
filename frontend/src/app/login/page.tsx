import { Login } from "@/components/Login";
import {
  background_color_default,
  background_color_secondary,
  button_color,
} from "@/lib/constants";
import { Modal } from "antd";

export default function LoginPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Adjust as needed
        background: background_color_secondary,
      }}
    >
      <Login />
    </div>
  );
}
