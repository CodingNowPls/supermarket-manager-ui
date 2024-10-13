import {ajaxGet, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/goods/saleStatistic'

/*销售统计列表显示*/
export function queryPageByQo(data) {
    return ajaxPost(apiPrefix + "/queryPageByQo", data)
}
