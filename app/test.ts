/**@format */

import { MessageCenter } from "../dty/common/MessageCenter";
import { DialogCenter } from "../dty/common/DialogCenter";

export function testF(): void {
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
}
