import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB7KUQ1BRifFSIHgfOcggApVS6xOC6KysY",
  authDomain: "refactor9ucci.firebaseapp.com",
  projectId: "refactor9ucci",
  storageBucket: "refactor9ucci.appspot.com",
  messagingSenderId: "149330295588",
  appId: "1:149330295588:web:ddac56a538eeb20971d1b1"
};

// 위에 있는 config 옵션을 통해 app을 생성하고
const app = initializeApp(firebaseConfig);

// 그 app에 대한 인증 서비스를 사용하고싶다고 선언
export const auth = getAuth(app)

// 스토리지에 접근 가능
export const storage = getStorage(app)

// 데이터베이스에 접근 가능
export const db = getFirestore(app)