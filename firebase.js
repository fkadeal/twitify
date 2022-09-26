import { initializeApp ,getApp,getApps} from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyAYSW3Q5JflB0ecUQF_Zl0-2IanWxK26u4",
    authDomain: "twitify21.firebaseapp.com",
    projectId: "twitify21",
    storageBucket: "twitify21.appspot.com",
    messagingSenderId: "55073923694",
    appId: "1:55073923694:web:9c21f4c6862d0e67be7c7f"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
  const db = getFirestore();
  const storage = getStorage();

  export default app;
  export { db,storage};