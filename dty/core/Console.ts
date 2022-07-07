/**@format */

export class Console {
    public static log(title: string, msg: string, ...optionalParams: any[]): void {
        console.log(Console.formatMsg(title, msg), ...optionalParams);
    }
    public static info(title: string, msg: string, ...optionalParams: any[]): void {
        console.info(Console.formatMsg(title, msg), ...optionalParams);
    }
    public static warn(title: string, msg: string, ...optionalParams: any[]): void {
        console.warn(Console.formatMsg(title, msg), ...optionalParams);
    }
    public static error(title: string, msg: string, ...optionalParams: any[]): void {
        console.error(Console.formatMsg(title, msg), ...optionalParams);
    }

    private static formatMsg(title: string, msg: string): string {
        const current = new Date();
        const fTitle = title ? `[${title}][${current.toLocaleTimeString()}]: ` : "";
        return `${fTitle}${msg}`;
    }
}
