import request from "@/utils/request";


const apiPrefix = '/person/employee'

//获取仓库信息
export function pageByQo(data) {
  return request({
    url: apiPrefix + "/list",
    method: 'post',
    data: data
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

/*离职*/
export function deactivate(id) {
  return request({
    url: apiPrefix + "/deactivate",
    method: 'post',
    data: {id: id}
  })
}

/*详情*/
export function detail(id) {
  return request({
    url: apiPrefix + "/detail",
    method: 'get',
    data: {uid: id}
  })
}

/*修改按钮*/
export function editBtnClick(id) {
  return request({
    url: apiPrefix + "/editbtn",
    method: 'get',
    data: {uid: id}
  })
}

/*重置密码*/
export function resetPwd(data) {
  return request({
    url: apiPrefix + "/resetPwd",
    method: 'post',
    data: data
  })
}
