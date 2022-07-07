/**@format */

import { TYStyle } from "dty-core/modules/global/StyleHelper";
import { IShellProperty } from "dty-core/model/IShell";
import { Tianyu } from "dty-core/modules/global/ViewComponent";

import "./css/background.css";

export class Background extends Tianyu.ViewComponent {
    private bgImage: string;
    private bgImageAlt: string;

    public constructor(props?: IShellProperty) {
        super(props);

        this.bgImage = (typeof props?.["image"] === "string" && props["image"]) || "";
        this.bgImageAlt = (typeof props?.["imageAlt"] === "string" && props["imageAlt"]) || "";
    }

    public override render(): HTMLElement {
        const oDiv = document.createElement("div");

        const style = new TYStyle({ background: "bg_global" });

        style.addStyle("global_total_size");
        style.addStyle("global_bg_index");
        style.addStyle("global_bg_additional");

        oDiv.className = style.getStyleString();

        if (this.bgImage) {
            const img = document.createElement("img");
            img.className = "global_bg_size global_bg_additional";
            img.src = this.bgImage;
            img.alt = this.bgImageAlt;

            oDiv.appendChild(img);
        }

        return oDiv;
    }
}
