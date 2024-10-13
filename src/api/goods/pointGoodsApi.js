import request from "@/utils/request";

const apiPrefix = '/goods/pointGoods'

/*列表显示*/
export function queryPageByQo(data) {
  return request({
    url: apiPrefix + "/queryPageByQo",
    method: 'post',
    data: data
  })
}

export function del(data) {
  return request({
    url: apiPrefix + "/del",
    method: 'get',
    params: data
  })
}

export function queryOptionGoods() {
  return request({
    url: apiPrefix + "/queryOptionGoods",
    method: 'get'
  })
}

export function savePointGoods(data) {
  return request({
    url: apiPrefix + "/savePointGoods",
    method: 'post',
    data: data
  })
}


export function queryPointGoodsById(data) {
  return request({
    url: apiPrefix + "/queryPointGoodsById",
    method: 'get',
    params: data
  })
}

export function updatePointGoods(data) {
  return request({
    url: apiPrefix + "/updatePointGoods",
    method: 'post',
    data: data
  })
}
