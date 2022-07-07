/**@format */

import { IShellProperty } from "dty/model/IShell";
import { TYStyle } from "../global/StyleHelper";
import { Tianyu } from "../global/ViewComponent";

import "./css/message.css";

export class MessageLayer extends Tianyu.ViewComponent {
    public constructor(props?: IShellProperty) {
        super(props);
    }

    public override render(): HTMLElement {
        const oMsgArea = document.createElement("div");
        oMsgArea.id = "__msg_area0";
        oMsgArea.className = "msg_container";

        const style = new TYStyle(null);
        style.addStyle("global_message_index");
        style.addStyle("global_msg_additional");

        const oMsgDiv = document.createElement("div");
        oMsgDiv.className = style.getStyleString();
        oMsgDiv.appendChild(oMsgArea);

        return oMsgDiv;
    }
}
