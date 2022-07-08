/**@format */

import { IShellProperty } from "dty-core/model/IShell";
import { Tianyu as TianyuNS } from "./Component";

export namespace Tianyu {
    export class ViewComponent extends TianyuNS.Component {
        protected props: IShellProperty;

        public constructor(props?: IShellProperty) {
            super();
            this.props = props || {};
        }

        public render(): HTMLElement {
            const viewBaseDiv = document.createElement("div");
            viewBaseDiv.innerText = "Hello World!";
            return viewBaseDiv;
        }

        public componentLoaded(): void {
            //
        }
    }
}
