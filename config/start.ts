/**@format */

import { Console } from "../dty/core/Console";

export const statues = true;

export const entries = {
    main: "app/test.ts",
};

export const start = {
    entry: () => {
        import("../app/test").then(
            (Entry) => {
                Entry.testF();
            },
            (reason?: string) => {
                Console.warn("Start-Point", `Customized Component can't be loaded - ${reason || "unknown reason"}.`);
            },
        );
    },
};
