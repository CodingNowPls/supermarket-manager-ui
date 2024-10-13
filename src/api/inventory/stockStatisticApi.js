import request from "@/utils/request";


const apiPrefix = '/inventory/stock/statistic'

export function queryPageByQo(data) {
  return request({
    url: apiPrefix + "/queryPageByQo",
    method: 'post',
    data: data
  })
}

export function queryStoreGoodsByStoreId(data) {
  return request({
    url: apiPrefix + "/queryStoreGoodsByStoreId",
    method: 'post',
    data: data
  })
}
