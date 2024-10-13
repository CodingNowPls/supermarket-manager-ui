import request from "@/utils/request";

const apiPrefix = '/person'

export function queryInformation() {
  return request({
    url: apiPrefix + "/information",
    method: 'get'
  })
}

export function editPwd(data) {
  return request({
    url: apiPrefix + "/editPwd",
    method: 'post',
    data: data
  })
}
