/**@format */

import { IShellProperty } from "dty/model/IShell";
import { Tianyu as TianyuNS } from "./Component";

export namespace Tianyu {
    export class ViewComponent extends TianyuNS.Component {
        protected props: IShellProperty;

        public constructor(props?: IShellProperty) {
            super();
            this.props = props || {};
        }

        public render(): HTMLElement {
            return document.createElement("div");
        }

        public componentLoaded(): void {
            //
        }
    }
}
