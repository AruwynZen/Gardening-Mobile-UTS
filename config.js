import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
        apiKey: "AIzaSyDwT9EL5mLc1G-zA3pxGuuTBTfqRIfC7m0",
        authDomain: "react-native-project-9bf4a.firebaseapp.com",
        databaseURL: "https://react-native-project-9bf4a-default-rtdb.firebaseio.com",
        projectId: "react-native-project-9bf4a",
        storageBucket: "react-native-project-9bf4a.appspot.com",
        messagingSenderId: "315308450037",
        appId: "1:315308450037:web:faba6b1ff055133695a5bc",
        measurementId: "G-9KDTLFM5CK"
};

if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
}
      
export default firebase;