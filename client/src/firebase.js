import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCtfK0JazCh1tvLY3ldZ-yEO2UHvtZuRfo",
  authDomain: "ucci-de185.firebaseapp.com",
  databaseURL: "https://ucci-de185-default-rtdb.firebaseio.com",
  projectId: "ucci-de185",
  storageBucket: "ucci-de185.appspot.com",
  messagingSenderId: "566336513874",
  appId: "1:566336513874:web:1fcfc0bacd09afeb3fbc8b"
};

// 위에 있는 config 옵션을 통해 app을 생성하고
const app = initializeApp(firebaseConfig);

// 그 app에 대한 인증 서비스를 사용하고싶다고 선언
export const auth = getAuth(app)