/**@format */

import { IShellProperty } from "dty-core/model/IShell";
import { ITianyuView } from "dty-core/model/ViewModes";
import { Tianyu as TYComponent } from "dty-core/modules/global/Component";
import { TianyuDOM } from "dty-core/modules/global/TianyuDOM";
import { Tianyu as TVComponent } from "dty-core/modules/global/ViewComponent";

export { TianyuDOM } from "dty-core/modules/global/TianyuDOM";

export namespace Tianyu {
    export class UIComponent extends TYComponent.Component {}
    export class UIViewComponent extends TVComponent.ViewComponent {}

    export class UIStructComponent extends TVComponent.ViewComponent {
        private htmls: HTMLElement[];

        public constructor(view: ITianyuView, props?: IShellProperty) {
            super(props);

            this.htmls = TianyuDOM.createDOM([view]);
        }

        public override render(): HTMLElement {
            return this.htmls[0];
        }
    }
}
