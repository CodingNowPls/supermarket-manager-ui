import request from "@/utils/request";

const apiPrefix = '/person'

export function queryInformation() {
  return request({
    url: apiPrefix + "/information",
    method: 'get'
  })
}
