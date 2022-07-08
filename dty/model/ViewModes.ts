/**@format */

export type TianyuViewContent = string | ITianyuView;

export type TianyuViewEventTypes =
    | Event
    | UIEvent
    | AnimationEvent
    | MouseEvent
    | InputEvent
    | FocusEvent
    | CompositionEvent
    | DragEvent
    | FormDataEvent
    | PointerEvent
    | KeyboardEvent
    | SecurityPolicyViolationEvent
    | TouchEvent
    | TransitionEvent
    | WheelEvent;

export type ITianyuViewEvent = {
    [key in keyof HTMLElementEventMap]?: (this: HTMLElement, ev: TianyuViewEventTypes) => void;
};

export interface ITianyuView {
    type: keyof HTMLElementTagNameMap;
    id?: string;
    class?: string[];
    content?: TianyuViewContent[] | string;
    event?: ITianyuViewEvent;
}
