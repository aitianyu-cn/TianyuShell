/**@format */

export type ErrorAdditionKey =
    | "400"
    | "401_1"
    | "401_2"
    | "401_3"
    | "401_4"
    | "401_5"
    | "403"
    | "403_1"
    | "403_2"
    | "403_3"
    | "403_4"
    | "403_5"
    | "403_6"
    | "403_7"
    | "403_8"
    | "403_9"
    | "403_10"
    | "403_11"
    | "403_12"
    | "403_13"
    | "403_15"
    | "403_16"
    | "403_17"
    | "404"
    | "404_1"
    | "405"
    | "406"
    | "407"
    | "408"
    | "409"
    | "410"
    | "411"
    | "412"
    | "413"
    | "414"
    | "415"
    | "416"
    | "417"
    | "500"
    | "500_11"
    | "500_12"
    | "500_13"
    | "500_14"
    | "500_15"
    | "501"
    | "502"
    | "503"
    | "504"
    | "505";

export enum ErrorCode {
    // 400
    RequestError,
    // 401
    Unauthorized,
    // 403,
    AvoidAccess,
    // 404
    ResourceNotFound,
    // 405
    AvoidSources,
    // 406
    Unaccepted,
    // 407
    RequestAuthorize,
    // 408
    RequestTimeout,
    // 409
    Conflict,
    // 410
    UnavailableAlways,
    // 411
    AskLength,
    // 412
    PreconditionFailed,
    // 413
    RequestOversize,
    // 414
    URLOverlength,
    // 415
    UnsupportedMIME,
    // 416
    UnexpectedRange,
    // 417
    ExpcetedFailed,
    // 500
    ServerError,
    // 501
    Unimplemented,
    // 502
    BadGateway,
    // 503
    ServiceUnavailable,
    // 504
    GatewayTimeout,
    // 505
    UnsupportVersion,
}

export interface IErrorResolving {
    errorCode: ErrorCode;
    additionKey: ErrorAdditionKey;
    customized?: string;
}

export function postError(additionKey: ErrorAdditionKey, customized?: string): void {
    const originURL = window.location.origin;
    let newURL = `${originURL}/error.html#${additionKey}`;

    if (customized) {
        newURL = `${newURL}/${customized}`;
    }

    window.location.href = newURL;
}

export function parseError(): IErrorResolving {
    const hash = window.location.hash.substring(1);
    const hashPathes: string[] = [];

    for (const path of hash.split("/")) {
        if (path) {
            hashPathes.push(path);
        }
    }

    const errorKey = ((!!hashPathes.length && hashPathes[0]) as ErrorAdditionKey) || "404";
    const customized = hashPathes.length > 1 ? hashPathes[1] : null;
    const errorCode = mapErrorCode(errorKey);

    const resolving: IErrorResolving = {
        errorCode: errorCode,
        additionKey: errorKey,
    };
    if (customized) resolving.customized = customized;

    return resolving;
}

function mapErrorCode(errorKey: ErrorAdditionKey): ErrorCode {
    const mainKey = errorKey.substring(0, 3);

    switch (mainKey) {
        case "400":
            return ErrorCode.RequestError;
        case "401":
            return ErrorCode.Unauthorized;
        case "403":
            return ErrorCode.AvoidAccess;
        case "404":
            return ErrorCode.ResourceNotFound;
        case "405":
            return ErrorCode.AvoidSources;
        case "406":
            return ErrorCode.Unaccepted;
        case "407":
            return ErrorCode.RequestAuthorize;
        case "408":
            return ErrorCode.RequestTimeout;
        case "409":
            return ErrorCode.Conflict;
        case "410":
            return ErrorCode.UnavailableAlways;
        case "411":
            return ErrorCode.AskLength;
        case "412":
            return ErrorCode.PreconditionFailed;
        case "413":
            return ErrorCode.RequestOversize;
        case "414":
            return ErrorCode.URLOverlength;
        case "415":
            return ErrorCode.UnsupportedMIME;
        case "416":
            return ErrorCode.UnexpectedRange;
        case "417":
            return ErrorCode.ExpcetedFailed;
        case "500":
            return ErrorCode.ServerError;
        case "501":
            return ErrorCode.Unimplemented;
        case "502":
            return ErrorCode.BadGateway;
        case "503":
            return ErrorCode.ServiceUnavailable;
        case "504":
            return ErrorCode.GatewayTimeout;
        case "505":
        default:
            return ErrorCode.ResourceNotFound;
    }
}
