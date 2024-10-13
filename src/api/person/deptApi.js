import request from '@/utils/request'


const apiPrefix = '/person/dept'

//获取仓库信息
export function listByQo(data) {
  return request({
    url: apiPrefix + "/list",
    method: 'get',
    params: data
  })
}

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
export function deactivate(id) {
  return request({
    url: apiPrefix + "/deactivate",
    method: 'post',
    data: {id: id}
  })
}
