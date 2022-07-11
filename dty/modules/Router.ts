/**@format */

import { IRouterData, IRouters } from "dty-core/model/IRouter";
import { IShellProperty } from "dty-core/model/IShell";

export class Router {
    private props: IShellProperty;

    private constructor(props?: IShellProperty) {
        this.props = props || {};
    }

    private setHash(routers: IRouters): void {
        // Todo: 注册路由表
    }

    private registerRouter(): void {
        // Todo: 注册路由相关事件，并初始化所有必须的组件

        window.onhashchange = this.onHashchanged.bind(this);
    }

    public addHash(routerKey: string, router: IRouterData): void {
        // Todo: 向路由表中增加一条路有记录，如果路由存在则替换路由记录
    }

    public removeHash(routerKey: string): void {
        // Todo:
    }

    private onHashchanged(ev: HashChangeEvent): void {
        // Todo:
    }

    /**
     * static methods
     */

    private static oRouter: Router | null;

    public static generateRouter(routers: IRouters, props?: IShellProperty): void {
        Router.oRouter = new Router(props);

        Router.oRouter.setHash(routers);
        Router.oRouter.registerRouter();
    }

    public static isEnabled(): boolean {
        return !Router.oRouter;
    }

    public static getRouter(): Router | null {
        return this.oRouter;
    }

    public static router(): void {
        //
    }
}
