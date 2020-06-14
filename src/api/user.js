import request from '@/utils/request'

const api = '/apis/'

export function login(data) {
  const { username, password } = data // admin 123456
  return request(api + `auth/oauth/token?grant_type=password&username=${username}&password=${password}&scope=all`, {
    method: 'POST',
    headers: {
      'Authorization': 'Basic bXdrLWZpbmFsOjEyMzQ1Ng=='
    }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
