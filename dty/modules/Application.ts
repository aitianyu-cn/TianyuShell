/**@format */

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

        TianyuDOM.render(background, "root");
        TianyuDOM.render(dialogLayer, "root");
        TianyuDOM.render(msgLayer, "root");

        return this.initApp();
    }

    private async initApp(): Promise<void> {
        const defaultI18nPromise = loadMessageSource("default");
        const appBuildPromise = new Promise<void>((resolve: PromiseResolve<void>, reject: PromiseReject) => {
            import("application/App").then(
                (StartModules) => {
                    StartModules.beforeLoad();

                    const app = new StartModules.Apps();

                    const oBasicDiv = document.createElement("div");
                    oBasicDiv.className = "global_body_index none_user_select text_setting_wrap";
                    TianyuDOM.render(app, oBasicDiv);
                    TianyuDOM.renderDom(oBasicDiv, "root");

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
