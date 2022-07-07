/**@format */

import { MessageCenter } from "dty-core/common/MessageCenter";
import { DialogCenter } from "dty-core/common/DialogCenter";
import { MessageBundle } from "dty-core/common/MessageBundle";

import { Tianyu } from "dty-core/common/TianyuUI";

// import "./test.view.json";

export const Apps = {};

export function beforeLoad(): void {
    const dialogCenter = DialogCenter.dialogCenter();

    const oDiv = document.createElement("div");
    oDiv.innerText = "全局的弹窗-用于测试当前界面的全局锁定";
    oDiv.addEventListener("click", () => {
        dialogCenter.closeDialog();
    });

    setTimeout(() => {
        dialogCenter.openDialog(oDiv);
    }, 2750);

    const messageCenter = MessageCenter.msgCenter();
    setTimeout(() => {
        messageCenter.popMessage("当前消息弹出框：消息提示", 3);
    }, 1000);
    setTimeout(() => {
        messageCenter.popMessage("当前消息弹出框：警告！！", 1);
    }, 1500);
    setTimeout(() => {
        messageCenter.popMessage("当前消息弹出框：错误！！", 0);
    }, 2000);

    const message = MessageBundle.getI18n("t1", "test", "::", 4, 6, -2, 10);
    console.log(message);
}

export function onLoaded(): void {
    //
}
