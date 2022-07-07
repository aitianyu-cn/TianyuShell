/**@format */

import { getCurrentThemeName } from "../ThemeCenter";
import { Console } from "../core/Console";
import { TianyuDOM } from "./global/TianyuDOM";
import { Background } from "./layer/Background";
import { DialogLayer } from "./layer/DialogLayer";
import { MessageLayer } from "./layer/MessageLayer";

export class Application {
    public constructor() {
        //
    }

    public buildApp(): void {
        const background = new Background();
        const dialogLayer = new DialogLayer();
        const msgLayer = new MessageLayer();

        const oBasicDiv = document.createElement("div");
        oBasicDiv.classList.add(`${getCurrentThemeName()}_application_main_def_main`);

        TianyuDOM.render(background, oBasicDiv);
        TianyuDOM.render(dialogLayer, oBasicDiv);
        TianyuDOM.render(msgLayer, oBasicDiv);

        TianyuDOM.renderDom(oBasicDiv, "root");

        this.initApp();
    }

    private initApp(): void {
        import("../../config/start").then((StartModules) => {
            this.startApp(StartModules);
        });
    }

    private startApp(modules: any): void {
        if (!modules.statues) {
            return;
        }

        if (!modules.start) {
            Console.warn("Application", "Appliction starting done with empty.");
            return;
        }

        const start = modules.start;
        if (!start.entry) {
            Console.warn("Application", "Application can't find entry point.");
            return;
        }

        start.entry();
    }
}
