import api from '@/http/api.js'

export function login(q) {
  return api({
    url: '/user/login_seat',
    method: 'get',
    params: q
  })
}

export function userInfo(q) {
  return api({
    url: '/user/info/seat/get',
    method: 'get',
    params: q
  })
}

export function infoUpdate(q) {
  return api({
    url: '/user/info/seat/update',
    method: 'get',
    params: q
  })
}
