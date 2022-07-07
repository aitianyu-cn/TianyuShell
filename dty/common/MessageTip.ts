/**@format */

import { IShellProperty } from "dty/model/IShell";
import { Tianyu } from "../modules/global/ViewComponent";
import { TYStyle } from "../modules/global/StyleHelper";
import { MessageCenter, MessageType } from "./MessageCenter";

const MessageBundle = require("/dty/tools/MessageBundle").MessageBundle;

const MessageTipDefaultType = 2;

export class MessageTip extends Tianyu.ViewComponent {
    private id: string;
    private msgText: string;
    private msgType: MessageType;

    private bgColor: string;
    private hyperLink: string | null;

    public constructor(props: IShellProperty) {
        super(props);

        this.id = (props["id"] as string) || "";
        this.msgText = (props["text"] && MessageBundle.getI18n((props["text"] as string) || "")) || "";
        this.msgType = typeof props["type"] === "number" ? props["type"] : MessageTipDefaultType;

        this.bgColor = (typeof props["backgroundColor"] === "string" && props["backgroundColor"]) || "";
        this.hyperLink = (props["link"] && typeof props["hyperUrl"] === "string" && props["hyperUrl"]) || null;
    }

    public override render(): HTMLElement {
        const msgBase = document.createElement("div");
        this.buildMsgBase(msgBase);

        if (this.msgType !== MessageType.Tip) {
            const msgCButton = document.createElement("div");
            this.buildMsgCloseButton(msgCButton);
            msgBase.appendChild(msgCButton);
        }

        const msgTextArea = document.createElement("div");
        this.buildMsgText(msgTextArea);
        msgBase.appendChild(msgTextArea);

        if (this.msgType !== MessageType.Tip && this.hyperLink) {
            const msgLinkArea = document.createElement("a") as unknown as HTMLLinkElement;
            this.buildMsgLink(msgLinkArea);
            msgBase.appendChild(msgLinkArea);
        }

        return msgBase;
    }

    private buildMsgBase(msgBase: HTMLElement): void {
        const themeBg =
            this.msgType === MessageType.Error
                ? "msg_tip_err_bg"
                : this.msgType === MessageType.Warning
                ? "msg_tip_warn_bg"
                : this.msgType === MessageType.Info
                ? "msg_tip_info_bg"
                : "msg_tip_bg";

        const style = new TYStyle({ background: themeBg });
        style.addStyle("msg_tip_base");
        msgBase.className = style.getStyleString();

        if (this.msgType === MessageType.Tip && this.bgColor) {
            msgBase.style.background = this.bgColor;
        }
    }

    private buildMsgCloseButton(closeButton: HTMLElement): void {
        closeButton.addEventListener("click", () => {
            const msgCenter = MessageCenter.msgCenter();
            msgCenter.closeMessage(this.id);
        });

        closeButton.innerText = "×";

        const themeBg =
            this.msgType === MessageType.Error
                ? "msg_tip_err_fg"
                : this.msgType === MessageType.Warning
                ? "msg_tip_warn_fg"
                : this.msgType === MessageType.Info
                ? "msg_tip_info_fg"
                : "msg_tip_fg";

        const style = new TYStyle({ background: themeBg });
        style.addStyle("msg_tip_close_button");
        style.addStyle("none_user_select");

        closeButton.className = style.getStyleString();
    }

    private buildMsgText(textDiv: HTMLElement): void {
        textDiv.innerText = this.msgText;
        textDiv.classList.add("msg_tip_text");
        textDiv.classList.add("text_setting_wrap");
    }

    private buildMsgLink(linkButton: HTMLLinkElement): void {
        linkButton.innerText = MessageBundle.getI18n("MSG_TIP_HYPER_LINK");

        const style = new TYStyle({ front: "msg_tip_link" });
        style.addStyle("msg_tip_link");
        style.addStyle("none_user_select");

        linkButton.className = style.getStyleString();
        linkButton.href = this.hyperLink || "";
        linkButton.target = "_blank";
    }
}
