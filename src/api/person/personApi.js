import {ajaxGet} from "@/assets/js/common";

const apiPrefix = '/person'

export function queryInformation() {
    return ajaxGet(apiPrefix + "/information", {})
}
