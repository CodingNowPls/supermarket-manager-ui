import request from "@/utils/request";

const apiPrefix = '/goods/saleStatistic'

/*销售统计列表显示*/
export function queryPageByQo(data) {
  return request({
    url: apiPrefix + "/queryPageByQo",
    method: 'post',
    data: data
  })
}
