/**@format */

import { Console } from "dty-core/common/Console";

export function loadApplication(): void {
    import("dty-core/modules/Application" as any).then(
        ({ Application }) => {
            const application = new Application();
            application.buildApp();

            Console.log("Loader", "Application loaded.");
        },
        (reason: string) => {
            Console.error("Loader", `Application loaded failed!!! ${reason}`);
        },
    );
}
