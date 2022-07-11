/**@format */

import { Tianyu, TianyuDOM } from "dty-core/common/TianyuUI";
import { IShellProperty } from "dty-core/model/IShell";

const route = require("./route.json");

export class Apps extends Tianyu.UIViewComponent {
    public constructor(props?: IShellProperty) {
        super(props);
    }

    public override render(): HTMLElement {
        // Todo: Replace this function to show your page.
        return super.render();
    }
}

export function beforeLoad(): void {
    // Todo: do something before the App view start to be loaded.
}

export function onLoaded(): void {
    // Todo: do something when the App view is loaded.
}
