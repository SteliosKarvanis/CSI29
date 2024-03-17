import { BrokerProps } from "@/lib/types";

export const BrokerIcon = (props: BrokerProps): JSX.Element => {
    return (
        <div style={{ width: "100%", height: "100%", justifyContent: "flex-start", alignItems: "flex-start", gap: "10px", display: "inline-flex" }}>
            <img
                style={{ width: "62.52px", height: "60px", borderRadius: "50px" }}
                src={props.imgSrc}
            />
            <div style={{ width: "222.27px", position: "relative" }}>
                <div style={{ width: "222px", height: "17.02px", left: "0px", top: "43.01px", position: "absolute", color: "black", fontSize: "16px", fontFamily: "Inter", fontWeight: 500, lineHeight: "24px", wordWrap: "break-word" }}>
                    {props.role}
                </div>
                <div style={{ width: "221.81px", height: "27.10px", left: "0.46px", top: "0px", position: "absolute", color: "black", fontSize: "24px", fontFamily: "Inter", fontWeight: 500, lineHeight: "36px", wordWrap: "break-word" }}>
                    {props.name}
                </div>
            </div>
        </div>
    );
};
