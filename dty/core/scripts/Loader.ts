/**@format */

import { Console } from "../Console";

export function loadApplication(): void {
    import("/dty/modules/Application" as any).then(
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
