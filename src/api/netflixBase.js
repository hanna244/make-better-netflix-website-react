import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

/* config ------------------------------------------------------------------- */

const config = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
}

/* 앱 초기화 -------------------------------------------------------------------- */

firebase.initializeApp(config)

/* 모듈 ----------------------------------------------------------------------- */

export const netflixAuth = firebase.auth()
export const netflixDatabase = firebase.firestore()

/* 이메일, 비밀번호 인증 ------------------------------------------------------------- */

// 이메일, 비밀번호 로그인 함수

export const logInWithEmailAndPassword = async (email, password) => {
  let data
  try {
    data = await netflixAuth.signInWithEmailAndPassword(email, password)
    console.log('로그인 성공')
  } catch (error) {
    console.error('로그인 인증에 실패하였습니다.')
  }
  console.log(data)
}

export const signUpWithEmailAndPassword = async (email, password) => {
  let data
  try {
    data = await netflixAuth.createUserWithEmailAndPassword(email, password)
    console.log('회원가입 성공')
  } catch (error) {
    console.error('회원가입에 실패하였습니다.')
  }
  console.log(data)
}

/* 구글, 깃헙 인증 --------------------------------------------------------------- */

export const socialAuth = (name) => {
  let provider

  switch (name) {
    case 'google':
      provider = new firebase.auth.GoogleAuthProvider()
      provider.setCustomParameters({ prompt: 'select_account' })
      console.log('구글 로그인')
      return netflixAuth.signInWithPopup(provider)

    case 'github':
      provider = new firebase.auth.GithubAuthProvider()
      console.log('깃헙 로그인')
      return netflixAuth.signInWithPopup(provider)

    default:
      return console.log('해당 업체는 로그인이 제공되는 업체가 아닙니다.')
  }
}
/* 로그아웃 --------------------------------------------------------------------- */

export const signOut = netflixAuth.signOut()
