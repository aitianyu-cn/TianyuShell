/**@format */

import { getCurrentThemeName } from "dty-core/common/ThemeCenter";
import { Console } from "dty-core/common/Console";
import { TianyuDOM } from "./global/TianyuDOM";
import { Background } from "./layer/Background";
import { DialogLayer } from "./layer/DialogLayer";
import { MessageLayer } from "./layer/MessageLayer";
import { loadMessageSource } from "dty-core/common/MessageBundle";
import { PromiseReject, PromiseResolve } from "dty-core/model/Types";

export class Application {
    public constructor() {
        //
    }

    public async buildApp(): Promise<void> {
        const background = new Background();
        const dialogLayer = new DialogLayer();
        const msgLayer = new MessageLayer();

        const oBasicDiv = document.createElement("div");
        oBasicDiv.classList.add(`${getCurrentThemeName()}_application_main_def_main`);

        TianyuDOM.render(background, oBasicDiv);
        TianyuDOM.render(dialogLayer, oBasicDiv);
        TianyuDOM.render(msgLayer, oBasicDiv);

        TianyuDOM.renderDom(oBasicDiv, "root");

        return this.initApp();
    }

    private async initApp(): Promise<void> {
        const defaultI18nPromise = loadMessageSource("default");
        const appBuildPromise = new Promise<void>((resolve: PromiseResolve<void>, reject: PromiseReject) => {
            import("application/App").then(
                (StartModules) => {
                    StartModules.beforeLoad();
                    // StartModules.Apps
                    StartModules.onLoaded();

                    resolve();
                },
                (reason?: string) => {
                    Console.warn("Application", `Currect app is empty - ${reason}`);

                    reject();
                },
            );
        });

        return Promise.all([defaultI18nPromise, appBuildPromise]).then();
    }
}
