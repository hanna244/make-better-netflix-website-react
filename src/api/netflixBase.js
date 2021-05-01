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

// --------------- 구글
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// 사용자의 컴퓨터에 등록되어 있는 Google 계정 중 하나를 사용자가 선택할 수 있도록 설정.
// prompt=select_account는 세션에 저장된 모든 계정이 표시되는 계정 선택기로 사용자를 전송한다.
// https://docs.microsoft.com/ko-kr/azure/active-directory/develop/v2-oauth2-implicit-grant-flow
googleAuthProvider.setCustomParameters({ prompt: 'select_account' })

// 로그인 함수
// export const signInWithGoogle = () =>
//   netflixAuth.signInWithPopup(googleAuthProvider)

// --------------- 깃헙

const githubAuthProvider = new firebase.auth.GithubAuthProvider()

// githubAuthProvider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGithub = netflixAuth.signInWithPopup(githubAuthProvider)

/* 로그아웃 --------------------------------------------------------------------- */

export const signOut = netflixAuth.signOut()
