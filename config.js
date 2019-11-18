// information about how to authenticate with firebase

var firebaseConfig = {
    apiKey: "AIzaSyCIDA43KxaRbD2Z-MX11zadCaut93qMCqU",
    authDomain: "ubiqum-spa.firebaseapp.com",
    databaseURL: "https://ubiqum-spa.firebaseio.com",
    projectId: "ubiqum-spa",
    storageBucket: "ubiqum-spa.appspot.com",
    messagingSenderId: "640779917941",
    appId: "1:640779917941:web:86d2059b1a6552fad8f63c",
    measurementId: "G-LZTYCHCMD1"
};
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

console.log(firebase);

function login() {
    // put google auth stuff in there
}

// login button in html will then be onclick'd

function writePost() {
    // objects' collection
}