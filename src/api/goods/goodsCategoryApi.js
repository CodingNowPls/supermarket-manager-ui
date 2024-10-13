import request from "@/utils/request";

const apiPrefix = '/goods/category'

/*保存*/
export function save(data) {
  return request({
    url: apiPrefix + "/save",
    method: 'post',
    data: data
  })
}

/*修改*/
export function update(data) {
  return request({
    url: apiPrefix + "/update",
    method: 'post',
    data: data
  })
}

/*停用*/
export function deactivate(sid) {
  return request({
    url: apiPrefix + "/deactivate",
    method: 'post',
    data: {
      cid: sid
    }
  })
}

/*列表显示*/
export function queryPageByQo(data) {
  return request({
    url: apiPrefix + "/queryPageByQo",
    method: 'post',
    data: data
  })
}

export function getNormalCategoryAll() {
  return request({
    url: apiPrefix + "/normalCategoryAll",
    method: 'get'
  })
}
