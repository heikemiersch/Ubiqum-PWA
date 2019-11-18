firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log(firebase);

var username = "";
var email = "";
// google sign in
// create an instance of the google provider object
var provider = new firebase.auth.GoogleAuthProvider();
var database = firebase.database();

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
            email = user.email;
            // console.log("user", user);
            // console.log("Hello ", username);
            readPosts();
            // ...
        })
        .catch(function (error) {
            // Handle Errors here.
            console.log("error", error);
        });
}