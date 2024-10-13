import {ajaxGet, ajaxPost} from "@/assets/js/common";
import request from '@/utils/request'

const apiPrefix = '/goods/goods'

/*列表显示*/
export function queryPageByQo(data) {
    return request({
        url: apiPrefix + "/queryPageByQo",
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

/*上/下架业务*/
export function upOrdown(data) {
    return request({
        url: apiPrefix + "/upOrdown",
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

/*查询商品信息*/
export function queryGoodsById(data) {
    return request({
        url: apiPrefix + "/queryGoodsById",
        method: 'get',
        params: data
    })
}


export function selected_goodsAll() {
    return request({
        url: apiPrefix + "/selected_goodsAll",
        method: 'get'
    })
}

export function selected_storeAll() {
    return request({
        url: apiPrefix + "/selected_storeAll",
        method: 'get'
    })
}

export function returnGoods(data) {
    return request({
        url: apiPrefix + "/returnGoods",
        method: 'post',
        data: data
    })
}
