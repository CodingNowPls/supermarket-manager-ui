import request from "@/utils/request";

const apiPrefix = '/sale/saleRecord'
// 销售记录
/*得到订单号*/
export function getCn() {
  return request({
    url: apiPrefix + "/getCn",
    method: 'get'
  })
}

export function getOptionSaleRecordsGoods() {
  return request({
    url: apiPrefix + "/getOptionSaleRecordsGoods",
    method: 'get'
  })
}

export function saveSaleRecords(data) {
  return request({
    url: apiPrefix + "/saveSaleRecords",
    method: 'post',
    data: data
  })
}

export function queryPageByQoSaleRecords(data) {
  return request({
    url: apiPrefix + "/queryPageByQoSaleRecords",
    method: 'post',
    data: data
  })
}

export function delSaleRecords(data) {
  return request({
    url: apiPrefix + "/delSaleRecords",
    method: 'get',
    data: data
  })
}
