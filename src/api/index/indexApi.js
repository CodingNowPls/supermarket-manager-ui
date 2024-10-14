import request from '@/utils/request'


export function empMenu() {
  return request({
    url: "/empMenu",
    method: 'get'
  })
}


export function exit(data) {
  return request({
    url: "/exit",
    method: 'get',
    params: data
  })
}


