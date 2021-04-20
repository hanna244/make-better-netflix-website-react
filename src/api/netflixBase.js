import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

/* config ------------------------------------------------------------------- */

const {
  REACT_APP_FB_API_KEY,
  REACT_APP_FB_AUTH_DOMAIN,
  REACT_APP_FB_DATABASE_URL,
  REACT_APP_FB_PROJECT_ID,
  REACT_APP_FB_STORAGE_BUCKET,
  REACT_APP_FB_MESSAGING_SENDER_ID,
  REACT_APP_FB_APP_ID,
} = process.env

const config = {
  apiKey: REACT_APP_FB_API_KEY,
  authDomain: REACT_APP_FB_AUTH_DOMAIN,
  databaseURL: REACT_APP_FB_DATABASE_URL,
  projectId: REACT_APP_FB_PROJECT_ID,
  storageBucket: REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FB_MESSAGING_SENDER_ID,
  appId: REACT_APP_FB_APP_ID,
}

/* 앱 초기화 -------------------------------------------------------------------- */

firebase.initializeApp(config)

/* 모듈 ----------------------------------------------------------------------- */

export const netflixAuth = firebase.auth()

/* 이메일, 비밀번호 인증 ------------------------------------------------------------- */

// 이메일, 비밀번호 로그인 유틸리티

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
