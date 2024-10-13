import request from "@/utils/request";

const menuApiPrefix = '/system/menu'

//条件分页获取菜单的信息
export function queryPageByQo(data) {
  return request({
    url: apiPrefix + "/queryPageByQo",
    method: 'post',
    data: data
  })
}
