
  import * as firebase from 'firebase';

  var config = {
    // apiKey: "AIzaSyCtDkhwYizmBtGYXLlObscQIyDhP_ILbpo",
    // authDomain: "crm-react-app.firebaseapp.com",
    // databaseURL: "https://crm-react-app.firebaseio.com",
    // projectId: "crm-react-app",
    // storageBucket: "crm-react-app.appspot.com",
    // messagingSenderId: "62755360527"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const auth = firebase.auth();

  export {
    auth,
  };