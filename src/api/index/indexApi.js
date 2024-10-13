import request from '@/utils/request'


export function empMenu(data) {
  return request({
    url: "/empMenu",
    method: 'get',
    headers: {'token': data}
  })
}


export function exit(data) {
  return request({
    url: "/exit",
    method: 'get',
    data: data
  })
}


