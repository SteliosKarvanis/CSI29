import React from "react";

export const Search = (): JSX.Element => {
    return (
        <div className="flex flex-col items-start gap-[20px] px-[300px] py-[60px] relative bg-[#e0e0e0]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-[32px] text-center tracking-[0] leading-[48px]">
                Busque o seu imovel ideal
            </p>
            <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch text-black relative mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                    Label
                </div>
                <input
                    className="px-[16px] py-[12px] relative self-stretch w-full bg-white rounded-[8px] border border-solid border-[#e0e0e0] shadow-button-shadow text-[#828282] mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
                    placeholder="Placeholder"
                    type="text"
                />
            </div>
            <div className="flex flex-col items-start gap-[8px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="self-stretch text-black relative mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]">
                    Label
                </div>
                <input
                    className="px-[16px] py-[12px] relative self-stretch w-full bg-white rounded-[8px] border border-solid border-[#e0e0e0] shadow-button-shadow text-[#828282] mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] [font-style:var(--small-text-font-style)]"
                    placeholder="Placeholder"
                    type="text"
                />
            </div>
            <div className="flex flex-col items-start gap-[1136px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-black text-[20px] tracking-[0] leading-[30px]">
                    &gt; Mais Opcoes
                </div>
            </div>
            <button className="all-[unset] box-border flex items-center justify-center gap-[8px] px-[24px] py-[14px] relative self-stretch w-full flex-[0_0_auto] bg-[#6fcbff] rounded-[16px] shadow-button-shadow">
                <div className="relative w-fit mt-[-1.00px] font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] whitespace-nowrap [font-style:var(--small-text-font-style)]">
                    Button
                </div>
            </button>
        </div>
    );
};
