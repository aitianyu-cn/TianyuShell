/**@format */

import { getCurrentThemeName } from "dty-core/common/ThemeCenter";

export interface IThemes {
    background?: string;
    front?: string;
    title?: string;
    body?: string;
    button?: string;
}

interface ICustomizedStyle {
    [style: string]: boolean;
}

export class TYStyle {
    private theme: string;
    private themeItems: IThemes;

    private customizedStyles: ICustomizedStyle;

    public constructor(themes: IThemes | null) {
        this.theme = getCurrentThemeName();
        this.themeItems = themes || {};

        this.customizedStyles = {};
    }

    public addStyle(style: string, isValid = true): void {
        if (!style) {
            return;
        }

        this.customizedStyles[style] = isValid;
    }

    public removeStyle(style: string): void {
        if (!style) {
            return;
        }

        if (this.customizedStyles[style]) {
            delete this.customizedStyles[style];
        }
    }

    public setValid(style: string, isValid = true): void {
        if (style && this.customizedStyles[style]) {
            this.customizedStyles[style] = isValid;
        }
    }

    public getValid(style: string): boolean {
        return !!style && !!this.customizedStyles[style];
    }

    public contains(style: string): boolean {
        return !!style && Object.keys(this.customizedStyles).includes(style);
    }

    public getThemes(): IThemes {
        return this.themeItems;
    }

    public setThemes(themes: IThemes): void {
        this.themeItems = themes;
    }

    public getStyleString(): string {
        let result = "";

        const validCustomizedStyles: string[] = [];
        for (const style of Object.keys(this.customizedStyles)) {
            const isValid = this.customizedStyles[style];
            if (isValid) validCustomizedStyles.push(style);
        }

        if (validCustomizedStyles.length) {
            result = validCustomizedStyles.join(" ");
        }

        const themeStyle = this.generateTheme();
        if (themeStyle) {
            result = `${result} ${themeStyle}`;
        }

        return result;
    }

    private generateTheme(): string {
        const themeStyles: string[] = [];

        this.themeItems.background && themeStyles.push(`${this.theme}_${this.themeItems.background}`);
        this.themeItems.front && themeStyles.push(`${this.theme}_${this.themeItems.front}`);
        this.themeItems.title && themeStyles.push(`${this.theme}_${this.themeItems.title}`);
        this.themeItems.body && themeStyles.push(`${this.theme}_${this.themeItems.body}`);
        this.themeItems.button && themeStyles.push(`${this.theme}_${this.themeItems.button}`);

        return themeStyles.length ? themeStyles.join(" ") : "";
    }
}
