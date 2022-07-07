/**@format */

import { formatedLocationArea } from "../core/AreaHelper";
import { PromiseReject, PromiseResolve } from "dty/model/Types";
import { StringHelper } from "./StringHelper";

export interface IMessageBundle {
    getI18n(key: string, src: string): string;
    getText(key: string, src: string, ...params: string[]): string | null;
}

interface IMessageSrc {
    [src: string]: any;
}

class MessageBundleInternal implements IMessageBundle {
    private static msgBundle: MessageBundleInternal | null;

    private _MessageSrc: IMessageSrc;

    private constructor() {
        this._MessageSrc = {
            default: {},
        };
    }

    public getText(key: string, src: string): string | null {
        return this._MessageSrc[src]?.[key] ?? null;
    }

    public getI18n(key: string, src: string, ...params: string[]): string {
        const srcText = this.getText(key, src);
        if (!srcText) {
            return `${src}_${key}`;
        }

        return StringHelper.format(srcText, ...params);
    }

    public loadMessageSrc(src: string, obj: any): void {
        if (!this._MessageSrc[src]) {
            this._MessageSrc[src] = {};
        }

        this._MessageSrc[src] = {
            ...this._MessageSrc[src],
            ...obj,
        };
    }

    public static getMsgBundle(): MessageBundleInternal {
        if (!this.msgBundle) {
            this.msgBundle = new MessageBundleInternal();
        }

        return this.msgBundle;
    }
}

export class MessageBundle {
    public static getText(key: string, src = "default"): string | null {
        if (!key) {
            return null;
        }

        const msgBundle = MessageBundleInternal.getMsgBundle();
        return msgBundle.getText(key, src);
    }

    public static getI18n(key: string, src = "default", ...params: string[]): string {
        if (!key) {
            return "";
        }

        const msgBundle = MessageBundleInternal.getMsgBundle();
        return msgBundle.getI18n(key, src, ...params);
    }
}

export async function loadMessageSource(name: string): Promise<void> {
    let resolveCallback: PromiseResolve<void>;
    let rejectCallback: PromiseReject;

    const oPromise = new Promise<void>((resolve, reject) => {
        resolveCallback = resolve;
        rejectCallback = reject;
    });

    const lang = formatedLocationArea();
    import(`/i18n/messagebundle-${name}_${lang}`).then(
        (i18nFile: any) => {
            const msgBundle = MessageBundleInternal.getMsgBundle();
            msgBundle.loadMessageSrc(name, i18nFile);

            resolveCallback?.();
        },
        (reason?: string) => {
            rejectCallback?.(reason);
        },
    );

    return oPromise;
}
