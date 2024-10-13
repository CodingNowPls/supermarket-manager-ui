import Cookies from 'js-cookie'

const TokenKey = 'token'
export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token, expireTime) {
    return Cookies.set(TokenKey, token, {expires: expireTime})
}

export function removeToken() {
    return Cookies.remove(TokenKey)
}
