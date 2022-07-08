/**@format */

import { ITianyuView } from "dty-core/model/ViewModes";

export function viewLoader(views: ITianyuView[]): HTMLElement[] {
    const root = document.createElement("div");

    const htmlElements: HTMLElement[] = [];
    for (const viewItem of views) {
        const viewElement = generateView(viewItem);
        htmlElements.push(viewElement);
    }

    return htmlElements;
}

export function generateView(view: ITianyuView): HTMLElement {
    const viewElement: HTMLElement = document.createElement(view.type);

    if (view.id) viewElement.id = view.id;
    if (view.class) viewElement.classList.add(...view.class);

    if (view.event) {
        const validEvents = Object.keys(view.event);
        for (const event of validEvents) {
            const eventKey = (event as keyof HTMLElementEventMap) || null;
            if (!eventKey) continue;

            const eventListener = view.event[eventKey];
            if (!eventListener) continue;
            viewElement.addEventListener(eventKey, eventListener);
        }
    }

    if (typeof view.content === "string") {
        viewElement.innerText = view.content;
    } else if (Array.isArray(view.content) && view.content.length) {
        for (const content of view.content) {
            if (typeof content === "string") {
                viewElement.append(content as string);
            } else {
                const childElement = generateView(content as ITianyuView);
                if (childElement) {
                    viewElement.appendChild(childElement);
                }
            }
        }
    }

    return viewElement;
}
