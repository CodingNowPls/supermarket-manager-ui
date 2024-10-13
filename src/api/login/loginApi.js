import request from '@/utils/request'
import {encrypt} from '@/utils/jsencrypt'

// 登录方法
export function login(data) {
  // 集成jsencrypt实现密码加密传输方式
  // password = encrypt(password);
  return request({
    url: '/login',
    method: 'post',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    data: new URLSearchParams({
      username: data.username,
      password: data.password
    })
  })
}


// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get'
  })
}

// 退出方法
export function logout(data) {
  return request({
    url: '/logout',
    method: 'post',
    data: data
  })
}

