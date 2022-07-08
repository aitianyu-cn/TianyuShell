/**@format */

import { Tianyu } from "dty-core/common/TianyuUI";
import { IShellProperty } from "dty-core/model/IShell";

export class ErrorPageBase extends Tianyu.UIViewComponent {
    protected errorKey: string;
    protected customized: string;

    public constructor(props?: IShellProperty) {
        super(props);

        this.errorKey = (props?.["additionKey"] as string) || "404";
        this.customized = (props?.["customized"] as string) || "";
    }
}
