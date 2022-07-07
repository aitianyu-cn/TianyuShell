/**@format */

import { TYStyle } from "dty-core/modules/global/StyleHelper";
import { IShellProperty } from "dty-core/model/IShell";
import { Tianyu } from "dty-core/modules/global/ViewComponent";

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
