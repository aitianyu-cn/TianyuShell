/**@format */

import { MessageTip } from "dty-core/modules/components/MessageTip";

import "dty-core/modules/components/msg.tip.css";

/**
 * message type
 *  Error   : 需要手动关闭的消息框（永久存在 - 不可以手动设置背景）
 *  Infom   : 可以手动关闭的消息框（默认5分钟后关闭 - 可以手动设置消失时间 - 不可以手动设置背景）
 *  Warning : 可以手动关闭的消息框（默认5分钟后关闭 - 不能手动设置消失时间 - 不可以手动设置背景）
 *  Tip     : 自动消失的消息框（默认10秒 - 可以手动设置消失时间 - 可以手动设置背景）
 */

export enum MessageType {
    Error,
    Warning,
    Info,
    Tip,
}

export interface IMsgTipParameters {
    timeout?: number;
    backgroundColor?: string;
    link?: boolean;
    hyperUrl?: string;
}

interface IMsgRecords {
    [id: string]: number;
}

const MessageDefaultTimeout = 300000;
const MessageTipDefaultTimeout = 10000;

export class MessageCenter {
    private static oMsgCenter: MessageCenter | null = null;

    private showingMsg: IMsgRecords;

    private constructor() {
        this.showingMsg = {};
    }

    public closeMessage(id: string): void {
        if (this.showingMsg[id]) {
            window.clearTimeout(this.showingMsg[id]);
            delete this.showingMsg[id];
        }
        this.closeMsgTip(id);
    }

    private closeMsgTip(id: string): void {
        const msgItem = document.getElementById(id);
        if (!msgItem) {
            console.error("message removed failed!!!");
            return;
        }

        msgItem.remove();
    }

    public popMessage(text: string, type: MessageType, param?: IMsgTipParameters): string {
        const id = `__msgTip_${Date.now()}`;

        const timeout = param?.timeout || type === MessageType.Tip ? MessageTipDefaultTimeout : MessageDefaultTimeout;

        const msgTipElem = this.generateMsgTipElement(id);
        // to create a html dom to render
        const msgParam = param || {};
        const msgTip = new MessageTip({
            id: id,
            text: text,
            type: type,
            ...msgParam,
        });
        msgTipElem.appendChild(msgTip.render());

        this.renderMsgTipElement(msgTipElem);
        if (type !== MessageType.Error) {
            const timer = window.setTimeout(() => {
                if (this.showingMsg[id]) {
                    delete this.showingMsg[id];
                }
                this.closeMsgTip(id);
            }, timeout);

            this.showingMsg[id] = timer;
        }

        return id;
    }

    private renderMsgTipElement(element: HTMLElement): void {
        const msgArea = document.getElementById("__msg_area0");
        if (!msgArea) {
            console.error("message added failed!!!");
            return;
        }

        msgArea.appendChild(element);
    }

    private generateMsgTipElement(id: string): HTMLElement {
        const msgTip = document.createElement("div");

        msgTip.id = id;
        msgTip.classList.add("msg_tip_area");

        return msgTip;
    }

    public static msgCenter(): MessageCenter {
        if (!MessageCenter.oMsgCenter) {
            MessageCenter.oMsgCenter = new MessageCenter();
        }

        return MessageCenter.oMsgCenter;
    }
}
