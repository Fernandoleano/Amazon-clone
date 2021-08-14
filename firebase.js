var firebaseConfig = {
    apiKey: "AIzaSyD6CcfTVI18xrM4QlUaN_cLP4b1rskhbCQ",
    authDomain: "clo-54ecf.firebaseapp.com",
    projectId: "clo-54ecf",
    storageBucket: "clo-54ecf.appspot.com",
    messagingSenderId: "343547061652",
    appId: "1:343547061652:web:8dbf3eae9d7cf7525adb81",
    measurementId: "G-4PV2W6KQL6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();