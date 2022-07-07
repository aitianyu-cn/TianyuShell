/**@format */

import { TianyuDOM } from "dty-core/modules/global/TianyuDOM";

export class DialogCenter {
    private static oDialogCenter: DialogCenter | null;

    private isDialogOpened: boolean;

    private constructor() {
        this.isDialogOpened = false;
    }

    public openDialog(dialogNode: HTMLElement): boolean {
        if (this.isDialogOpened) {
            return false;
        }

        const dialog = document.getElementById("__dialog");
        if (dialog) {
            dialog.style.visibility = "visible";

            TianyuDOM.renderDom(dialogNode, "__dialog_area0");

            this.isDialogOpened = true;
        }

        return false;
    }

    public closeDialog(): void {
        if (!this.isDialogOpened) {
            return;
        }

        this.isDialogOpened = false;
        const dialog = document.getElementById("__dialog");
        if (dialog) {
            dialog.style.visibility = "hidden";

            const dialogArea = document.getElementById("__dialog_area0");
            if (dialogArea) {
                const children = dialogArea.childNodes;
                if (children) {
                    for (const child of children) {
                        child.remove();
                    }
                }
            }
        }
    }

    public dialogShowing(): boolean {
        return this.isDialogOpened;
    }

    public static dialogCenter(): DialogCenter {
        if (!this.oDialogCenter) {
            this.oDialogCenter = new DialogCenter();
        }

        return this.oDialogCenter;
    }
}
