import request from "@/utils/request";


const apiPrefix = '/member/member'

/*列表显示*/
export function queryPageByQo(data) {
  return request({
    url: apiPrefix + "/queryPageByQo",
    method: 'post',
    data: data
  })
}

/*删除操作*/
export function delMember(data) {
  return request({
    url: apiPrefix + "/delMember",
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

//修改
export function update(data) {
  return request({
    url: apiPrefix + "/update",
    method: 'post',
    data: data
  })
}

/*查询会员信息*/
export function queryMemberById(data) {
  return request({
    url: apiPrefix + "/queryMemberById",
    method: 'get',
    params: data
  })
}

export function queryMemberByPhone(data) {
  return request({
    url: apiPrefix + "/queryMemberByPhone",
    method: 'get',
    params: data
  })
}
