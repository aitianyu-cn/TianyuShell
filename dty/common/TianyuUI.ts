/**@format */

import { Tianyu as TYComponent } from "dty-core/modules/global/Component";
import { Tianyu as TVComponent } from "dty-core/modules/global/ViewComponent";

export { TianyuDOM } from "dty-core/modules/global/TianyuDOM";

export namespace Tianyu {
    export class UIComponent extends TYComponent.Component {}
    export class UIViewComponent extends TVComponent.ViewComponent {}
}
