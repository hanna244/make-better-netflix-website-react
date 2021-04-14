/* eslint-disable no-useless-escape */
// 참고: https://emailregex.com/
// email의 글자 값이 0 이거나, 이메일 형식이 틀리다면 false
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 참고: https://www.regextester.com/106615
// -(대쉬)없음
const phoneNumberRegEx = /^[0-9]{3}([0-9]{3}|[0-9]{4})[0-9]{4}$/

// password가 4자 미만, 60자 초과일 경우 false
const passwordRegEx = /^[0-9].{3,61}$/

export const isValidEmail = (value) => emailRegEx.test(value)
export const isValidPhoneNumber = (value) => phoneNumberRegEx.test(value)
export const isValidPassword = (value) => passwordRegEx.test(value)
