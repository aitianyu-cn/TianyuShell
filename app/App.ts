/**@format */

import { MessageCenter } from "dty-core/common/MessageCenter";
import { DialogCenter } from "dty-core/common/DialogCenter";
import { MessageBundle } from "dty-core/common/MessageBundle";

import { Tianyu } from "dty-core/common/TianyuUI";
import { IShellProperty } from "dty-core/model/IShell";

// import "./test.view.json";

export class Apps extends Tianyu.UIViewComponent {
    public constructor(props?: IShellProperty) {
        super(props);
    }

    public override render(): HTMLElement {
        // Todo: Replace this function to show your page.
        return super.render();
    }
}

export function beforeLoad(): void {
    // Todo: do something before the App view start to be loaded.
    // const dialogCenter = DialogCenter.dialogCenter();
    // const oDiv = document.createElement("div");
    // oDiv.innerText = "全局的弹窗-用于测试当前界面的全局锁定";
    // oDiv.addEventListener("click", () => {
    //     dialogCenter.closeDialog();
    // });
    // setTimeout(() => {
    //     dialogCenter.openDialog(oDiv);
    // }, 2750);
    // const messageCenter = MessageCenter.msgCenter();
    // setTimeout(() => {
    //     messageCenter.popMessage("当前消息弹出框：消息提示", 3);
    // }, 1000);
    // setTimeout(() => {
    //     messageCenter.popMessage("当前消息弹出框：警告！！", 1);
    // }, 1500);
    // setTimeout(() => {
    //     messageCenter.popMessage("当前消息弹出框：错误！！", 0);
    // }, 2000);
    // const message = MessageBundle.getI18n("t1", "test", "::", 4, 6, -2, 10);
    // console.log(message);
}

export function onLoaded(): void {
    // Todo: do something when the App view is loaded.
}
