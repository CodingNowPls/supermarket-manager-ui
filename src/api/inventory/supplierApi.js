import request from "@/utils/request";


const apiPrefix = '/inventory/supplier'

//获取供货商信息
export function queryPageSupplier(data) {
  return request({
    url: apiPrefix + "/queryPageByQo",
    method: 'post',
    data: data
  })
}

export function saveSupplier(data) {
  return request({
    url: apiPrefix + "/save",
    method: 'post',
    data: data
  })
}

export function updateSupplier(data) {
  return request({
    url: apiPrefix + "/update",
    method: 'post',
    data: data
  })
}

export function queryByCn(data) {
  return request({
    url: apiPrefix + "/queryByCn",
    method: 'post',
    data: data
  })
}

export function delSupplier(data) {
  return request({
    url: apiPrefix + "/deactivate",
    method: 'post',
    data: data
  })
}
