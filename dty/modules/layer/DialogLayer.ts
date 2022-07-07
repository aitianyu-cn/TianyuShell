/**@format */

import { TYStyle } from "dty-core/modules/global/StyleHelper";
import { IShellProperty } from "dty-core/model/IShell";
import { Tianyu } from "dty-core/modules/global/ViewComponent";

import "./css/dialog.css";

export class DialogLayer extends Tianyu.ViewComponent {
    public constructor(props?: IShellProperty) {
        super(props);
    }

    public override render(): HTMLElement {
        const oDialogContent = document.createElement("div");
        oDialogContent.className = "dialog_content";
        oDialogContent.appendChild(this.buildDialogPanel());

        const style = new TYStyle({ background: "bg_dialog" });

        style.addStyle("dialog_base");
        style.addStyle("global_total_size");
        style.addStyle("global_dialog_index");

        const bgClick = () => {
            // to avoid the click under track
        };

        const oDialogDiv = document.createElement("div");
        oDialogDiv.className = style.getStyleString();
        oDialogDiv.addEventListener("click", bgClick);
        oDialogDiv.id = "__dialog";

        oDialogDiv.appendChild(oDialogContent);

        return oDialogDiv;
    }

    private buildDialogPanel(): HTMLElement {
        const style = new TYStyle({ background: "bg_global" });

        style.addStyle("dialog_area");
        style.addStyle("text_setting_wrap");
        style.addStyle("none_user_select");

        const oDiv = document.createElement("div");
        oDiv.id = "__dialog_area0";
        oDiv.className = style.getStyleString();

        return oDiv;
    }
}
