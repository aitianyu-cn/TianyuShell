/**@format */

export type StringFormatParam = string | number | boolean;

export class StringHelper {
    public static format(text: string, ...params: StringFormatParam[]): string {
        const paramMatches = text.match(/\{\w+\}/g) || [];
        const replacedParam: string[] = [];

        let target = text;
        if (params.length && paramMatches.length) {
            for (const paramItem of paramMatches) {
                if (replacedParam.includes(paramItem)) {
                    continue;
                }
                replacedParam.push(paramItem);

                const indexString = paramItem.replaceAll(/\{|\}/g, "");
                const index = Number.parseInt(indexString);
                if (!Number.isInteger(index)) {
                    continue;
                }

                if (index < 0 || index >= params.length) {
                    continue;
                }

                target = target.replaceAll(paramItem, params[index].toString());
            }
        }

        return target;
    }
}
