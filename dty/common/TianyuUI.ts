/**@format */

import { TianyuDOM as TianyuBaseDOM } from "dty-core/modules/global/TianyuDOM";
import { Tianyu as TYComponent } from "dty-core/modules/global/Component";
import { Tianyu as TVComponent } from "dty-core/modules/global/ViewComponent";

export namespace Tianyu {
    export type Component = TYComponent.Component;
    export type ViewComponent = TVComponent.ViewComponent;
    export type TianyuDOM = TianyuBaseDOM;
}
