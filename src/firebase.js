
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
        apiKey: "AIzaSyCvKp66UEacQR9sDkBVWi8GLkE5m7pt-QQ",
        authDomain: "gamecenter-valent.firebaseapp.com",
        databaseURL: "https://gamecenter-valent.firebaseio.com",
        projectId: "gamecenter-valent",
        storageBucket: "gamecenter-valent.appspot.com",
        messagingSenderId: "79432652179",
        appId: "1:79432652179:web:9bd2e597b085e07b068466",
        measurementId: "G-D2JSJDSCFN"
     
})

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

