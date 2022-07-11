/**@format */

export interface IRouterData {
    targetObj: string;
    source: string;
    hash: string;
    strict?: boolean;
    fallBack?: "father" | "default" | "error" | "home";
}

export interface IRouters {
    [key: string]: IRouterData;
}
