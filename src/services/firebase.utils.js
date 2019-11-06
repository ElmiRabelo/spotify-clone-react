import firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDvrv0wWOK3aZlfV5jkemIdlbQKgBBOmJ8",
  authDomain: "crown-clothing-db-c73ad.firebaseapp.com",
  databaseURL: "https://crown-clothing-db-c73ad.firebaseio.com",
  projectId: "crown-clothing-db-c73ad",
  storageBucket: "",
  messagingSenderId: "322537233388",
  appId: "1:322537233388:web:3a43844f060c5948"
});

const db = firebaseApp.firestore();

const saveDataInFirestore = data => {
  db.collection("spotify")
    .doc("spotify")
    .set(data)
    .then(() => console.tron.log("salvo"));
};
//function para fazer um request de determinado doc detro de spotify collection no firestore
const getSpotifyData = docName => {
  return db
    .collection("spotify")
    .doc(docName)
    .get()
    .then(response => {
      const data = response.data();
      return data;
    });
};

export { db, getSpotifyData, saveDataInFirestore };
