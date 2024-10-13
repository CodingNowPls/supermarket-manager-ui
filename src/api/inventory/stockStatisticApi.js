import {ajaxGet, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/inventory/stock/statistic'

export function queryPageByQo(data) {
    return ajaxPost(apiPrefix + "/queryPageByQo", data)
}

export function queryStoreGoodsByStoreId(data) {
    return ajaxPost(apiPrefix + "/queryStoreGoodsByStoreId", data)
}
