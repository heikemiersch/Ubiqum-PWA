firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log(firebase);

// let username = "";
// let email = "";
// google sign in
// create an instance of the google provider object (sign in with google)
let provider = new firebase.auth.GoogleAuthProvider();
let database = firebase.firestore();

function login() {
    // to sign in with a pop-up window, call signinwithpopup
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
            // The signed-in user info.
            var user = result.user;
            // all that she wants
            username = user.displayName;
            console.log("Hello ", username);
            // readPosts();
            // ...
        })
        .catch(function (error) {
            // Handle Errors here.
            console.log("error", error);
        });
}