import {ajaxGet, ajaxPost} from "@/assets/js/common";
// 积分兑换历史记录
const apiPrefix = '/sale/pointRedemption'

export function queryPointProductBymemberId(data) {
    return ajaxGet(apiPrefix + "/queryPointProductBymemberId", data)
}

export function queryMemberByGoodsId(data) {
    return ajaxGet(apiPrefix + "/queryMemberByGoodsId", data)
}

export function queryPointProductByGoodsId(data) {
    return ajaxGet(apiPrefix + "/queryPointProductByGoodsId", data)
}

export function savePointRedemptionRecords(data) {
    return ajaxPost(apiPrefix + "/savePointRedemptionRecords", data)
}


export function queryOptionsMemberPhone() {
    return ajaxGet(apiPrefix + "/queryOptionsMemberPhone", {})
}

export function queryPageByQoExchangePointProducts(data) {
    return ajaxPost(apiPrefix + "/queryPageByQoExchangePointProducts", data)
}


export function delExchangePointProducts(data) {
    return ajaxGet(apiPrefix + "/delExchangePointProducts", data)
}


export function queryOptionsPointProducts() {
    return ajaxGet(apiPrefix + "/queryOptionsPointProducts", {})
}

export function queryOptionsMember() {
    return ajaxGet(apiPrefix + "/queryOptionsMember", {})
}

