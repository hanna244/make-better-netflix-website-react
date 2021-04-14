import { createContext, useCallback, useContext, useReducer } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
  apiKey: 'AIzaSyBJnWzlHKFgYVClvOXzkZpfyKXbf8WB3Qg',
  authDomain: 'netflix-project-210223.firebaseapp.com',
  databaseURL: 'https://netflix-project-210223-default-rtdb.firebaseio.com',
  projectId: 'netflix-project-210223',
  storageBucket: 'netflix-project-210223.appspot.com',
  messagingSenderId: '1031422483194',
  appId: '1:1031422483194:web:a6fc12258d6c5e84fd4743',
}

//  앱 초기화
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app()

//  인증
const auth = firebase.auth()

//  인증 컨텍스트
const FirebaseAuthContext = createContext()

// ------------------------------------- 인증 리듀서

// 초기 상태
const initialAuthValue = {
  isLogined: false,
  currentUser: null,
}

const firebaseAuthReducer = (state = initialAuthValue, action) => {
  switch (action.type) {
    case signUpAction.name:
    case signInAction.name:
    case signOutAction.name:
      return action.newState

    default:
      return state
  }
}

// 액션 크리에이터
const signUpAction = (newUser) => ({
  type: signUpAction.name,
  newState: {
    isLogined: true,
    currentUser: newUser,
  },
})

const signInAction = (user) => ({
  type: signInAction.name,
  newState: {
    isLogined: true,
    currentUser: user,
  },
})

const signOutAction = () => ({
  type: signInAction.name,
  newState: {
    isLogined: false,
    currentUser: null,
  },
})

// 인증 컨텍스트 프로바이더
const FirebaseAuthProvider = ({ children, ...restProps }) => {
  const [state, dispatch] = useReducer(firebaseAuthReducer, initialAuthValue)

  const signUp = useCallback((email, password) => {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response.user)
        console.log('회원가입 성공')
        dispatch(signUpAction(response.user))
      })
  }, [])

  const signIn = useCallback((email, password) => {
    return auth.signInWithEmailAndPassword(email, password).then((response) => {
      console.log(response.user)
      console.log('로그인 성공')
      dispatch(signInAction(response.user))
    })
  }, [])

  const signOut = useCallback(() => {
    return auth.signOut().then(() => {
      console.log('로그아웃 성공')
      dispatch(signOutAction())
    })
  }, [])

  const value = { ...state, signUp, signIn, signOut }

  return (
    <FirebaseAuthContext.Provider value={value} {...restProps}>
      {children}
    </FirebaseAuthContext.Provider>
  )
}

// 인증 훅
const useFirebaseAuth = () => {
  return useContext(FirebaseAuthContext)
}

export { firebase, auth, FirebaseAuthProvider, useFirebaseAuth }
