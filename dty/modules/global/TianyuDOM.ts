/**@format */

import { Console } from "../../core/Console";
import { Tianyu as TianyuNS } from "./ViewComponent";

export class TianyuDOM {
    public static render(component: TianyuNS.ViewComponent, root: string | HTMLElement): void {
        const rootElement = typeof root === "string" ? document.getElementById(root) : root;
        if (!rootElement) {
            Console.warn("Tianyu DOM", `Rendering Failed - Can't find root ${root}`);
            return;
        }

        rootElement.appendChild(component.render());

        component.componentLoaded();
    }

    public static renderDom(dom: HTMLElement, root: string | HTMLElement): void {
        const rootElement = typeof root === "string" ? document.getElementById(root) : root;
        if (!rootElement) {
            Console.warn("Tianyu DOM", `Rendering Failed - Can't find root ${root}`);
            return;
        }

        rootElement.appendChild(dom);
    }
}
