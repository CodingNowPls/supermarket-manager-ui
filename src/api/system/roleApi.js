import request from "@/utils/request";

const apiPrefix = '/system/role'

//获取角色全部信息
export function roleList(data) {
  return request({
    url: apiPrefix + "/list",
    method: 'post',
    data: data
  })
}

//停用角色
export function forbiddenRole(id) {
  return request({
    url: apiPrefix + "/forbiddenRole",
    method: 'post',
    data: {rid: id}
  })
}

//修改角色信息
export function editRole(data) {
  return request({
    url: apiPrefix + "/edit_role",
    method: 'post',
    data: data
  })
}

//创建角色
export function saveRole(data) {
  return request({
    url: apiPrefix + "/save",
    method: 'post',
    data: data
  })
}

/*授权按钮*/
export function checkPermissions(rid) {
  return request({
    url: apiPrefix + "/checkPermissions",
    method: 'get',
    data: {rid: rid}
  })
}

/*保存角色-权限关系*/
export function saveRolePermissions(data) {
  return request({
    url: apiPrefix + "/saveRolePermissions",
    method: 'post',
    data: data
  })
}

export function getAllRole() {
  return request({
    url: apiPrefix + "/all",
    method: 'get'
  })
}

/*保存角色和员工的关系*/
export function saveRoleEmp(data) {
  return request({
    url: apiPrefix + "/saveRoleEmp",
    method: 'post',
    data: data
  })
}

export function queryRoleIdsByEid(eid) {
  return request({
    url: apiPrefix + "/queryRoleIdsByEid",
    method: 'get',
    data: {eid: eid}
  })

}
