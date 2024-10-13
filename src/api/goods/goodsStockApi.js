import request from "@/utils/request";

const apiPrefix = '/goods/stock'

/*列表显示*/
export function queryPageByQo(data) {
  return request({
    url: apiPrefix + "/queryPageByQo",
    method: 'post',
    data: data
  })
}

export function queryGoodsStoreById(data) {
  return request({
    url: apiPrefix + "/queryGoodsStoreById",
    method: 'get',
    params: data
  })
}

export function updateInventory(data) {
  return request({
    url: apiPrefix + "/updateInventory",
    method: 'post',
    data: data
  })
}
