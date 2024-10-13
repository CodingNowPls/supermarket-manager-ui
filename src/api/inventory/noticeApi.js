import request from "@/utils/request";


const apiPrefix = '/inventory/stockDetail/notice'

export function queryPageNoticeIn(data) {
  return request({
    url: apiPrefix + "/queryPageNoticeIn",
    method: 'post',
    data: data
  })
}

export function queryPageNoticeOut_shelves(data) {
  return request({
    url: apiPrefix + "/queryPageNoticeOut_shelves",
    method: 'post',
    data: data
  })
}

export function saveOut_shelves(data) {
  return request({
    url: apiPrefix + "/saveOut_shelves",
    method: 'post',
    data: data
  })
}

export function queryPageNoticeOut_untreated(data) {
  return request({
    url: apiPrefix + "/queryPageNoticeOut_untreated",
    method: 'post',
    data: data
  })
}

export function resolveOutUntreatedForm(data) {
  return request({
    url: apiPrefix + "/resolveOutUntreatedForm",
    method: 'post',
    data: data
  })
}
