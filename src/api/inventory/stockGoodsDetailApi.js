import request from "@/utils/request";


const apiPrefix_in = '/inventory/stockIn'
const apiPrefix_out = '/inventory/stockOut'
/**入库模块**/

/*入库保存*/
export function saveIn(data) {
  return request({
    url: apiPrefix_in + "/save",
    method: 'post',
    data: data
  })
}

/*入库列表显示*/
export function queryPageByQoIn(data) {
  return request({
    url: apiPrefix_in + "/queryPageByQo",
    method: 'post',
    data: data
  })
}

/*删除入库记录*/
export function delIn(data) {
  return request({
    url: apiPrefix_in + "/delIn",
    method: 'post',
    data: data
  })
}

/*删除出库记录*/
export function delOut(data) {
  return request({
    url: apiPrefix_out + "/delOut",
    method: 'post',
    data: data
  })
}

export function queryOptionsSuppliers() {
  return request({
    url: apiPrefix_in + "/queryOptionsSuppliers",
    method: 'get'
  })
}

/**出库模块**/

/*出库列表显示*/
export function queryPageByQoOut(data) {
  return request({
    url: apiPrefix_out + "/queryPageByQoOut",
    method: 'post',
    data: data
  })
}

/*初始化选择框*/
export function initOutOptions() {
  return request({
    url: apiPrefix_out + "/initOutOptions",
    method: 'get'
  })
}

/*出库选择商品导致仓库改变*/
export function changeOutGoods(data) {
  return request({
    url: apiPrefix_out + "/changeOutGoods",
    method: 'get',
    params: data
  })
}

/*出库选择仓库导致商品改变*/
export function changeOutStore(data) {
  return request({
    url: apiPrefix_out + "/changeOutStore",
    method: 'get',
    params: data
  })
}


export function queryOutGoods(data) {
  return request({
    url: apiPrefix_out + "/queryOutGoods",
    method: 'post',
    data: data
  })
}


export function saveOut(data) {
  return request({
    url: apiPrefix_out + "/save",
    method: 'post',
    data: data
  })
}
