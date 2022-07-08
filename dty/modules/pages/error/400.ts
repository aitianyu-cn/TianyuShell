/**@format */

import { IShellProperty } from "dty-core/model/IShell";
import { ErrorPageBase } from "../ErrorPageBase";

export class RequestErrorPage extends ErrorPageBase {
    public constructor(props?: IShellProperty) {
        super(props);
    }

    public override render(): HTMLElement {
        const oBasicDiv = document.createElement("div");

        oBasicDiv.innerText = this.errorKey;

        return oBasicDiv;
    }
}
