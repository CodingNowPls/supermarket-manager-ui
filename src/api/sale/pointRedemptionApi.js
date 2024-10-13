import request from "@/utils/request";

// 积分兑换历史记录
const apiPrefix = '/sale/pointRedemption'

export function queryPointProductBymemberId(data) {
  return request({
    url: apiPrefix + "/queryPointProductBymemberId",
    method: 'get',
    data: data
  })
}

export function queryMemberByGoodsId(data) {
  return request({
    url: apiPrefix + "/queryMemberByGoodsId",
    method: 'get',
    data: data
  })
}

export function queryPointProductByGoodsId(data) {
  return request({
    url: apiPrefix + "/queryPointProductByGoodsId",
    method: 'get',
    data: data
  })
}

export function savePointRedemptionRecords(data) {
  return request({
    url: apiPrefix + "/savePointRedemptionRecords",
    method: 'post',
    data: data
  })
}


export function queryOptionsMemberPhone() {
  return request({
    url: apiPrefix + "/queryOptionsMemberPhone",
    method: 'get'
  })
}

export function queryPageByQoExchangePointProducts(data) {
  return request({
    url: apiPrefix + "/queryPageByQoExchangePointProducts",
    method: 'post',
    data: data
  })
}


export function delExchangePointProducts(data) {
  return request({
    url: apiPrefix + "/delExchangePointProducts",
    method: 'get',
    data: data
  })
}


export function queryOptionsPointProducts() {
  return request({
    url: apiPrefix + "/queryOptionsPointProducts",
    method: 'get'
  })
}

export function queryOptionsMember() {
  return request({
    url: apiPrefix + "/queryOptionsMember",
    method: 'get'
  })
}

