/**@format */

import { ErrorCode, parseError } from "dty-core/common/HttpErrors";
import { loadMessageSource } from "dty-core/common/MessageBundle";
import { RequestErrorPage } from "dty-core/modules/pages/error/400";

function buildErrorPage(): void {
    const defaultI18nPromise = loadMessageSource("default");
    const errorResolving = parseError();

    let errorPagePromise = null;
    switch (errorResolving.errorCode) {
        case ErrorCode.RequestError:
            // errorPage = new RequestErrorPage({ ...errorResolving });
            break;
    }

    if (!errorPagePromise) errorPagePromise = Promise.resolve();

    Promise.all([defaultI18nPromise, errorPagePromise]).then();
}

buildErrorPage();
