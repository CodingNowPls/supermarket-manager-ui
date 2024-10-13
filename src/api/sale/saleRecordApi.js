import {ajaxGet, ajaxJson, ajaxPost} from "@/assets/js/common";

const apiPrefix = '/sale/saleRecord'
// 销售记录
/*得到订单号*/
export function getCn() {
    return ajaxGet(apiPrefix + "/getCn", {})
}

export function getOptionSaleRecordsGoods() {
    return ajaxGet(apiPrefix + "/getOptionSaleRecordsGoods", {})
}

export function saveSaleRecords(data) {
    return ajaxJson(apiPrefix + "/saveSaleRecords", data)
}

export function queryPageByQoSaleRecords(data) {
    return ajaxPost(apiPrefix + "/queryPageByQoSaleRecords", data)
}

export function delSaleRecords(data) {
    return ajaxGet(apiPrefix + "/delSaleRecords", data)
}