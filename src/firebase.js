import firebase from "firebase"
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyDf1Gx2hfC2weX3HzBDz4vHfTA7nGt2a2Y",
  authDomain: "yt-clone-7aa2e.firebaseapp.com",
  projectId: "yt-clone-7aa2e",
  storageBucket: "yt-clone-7aa2e.appspot.com",
  messagingSenderId: "17449562636",
  appId: "1:17449562636:web:4460dc79776e72899f7429",
  measurementId: "G-J0VRHHM2Y9"
  };

firebase.initializeApp(firebaseConfig)
 const auth =firebase.auth()


 export { auth}
 
