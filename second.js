firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log(firebase);

let username = "";
let loggedIn = false;
// google sign in
// create an instance of the google provider object (sign in with google)
let provider = new firebase.auth.GoogleAuthProvider();
// initialize cloud firestore through firebase
let database = firebase.firestore();

function login() {
  // to sign in with a pop-up window, call signinwithpopup
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // The signed-in user info.
      var user = result.user;
      // all that she wants
      username = user.displayName;
      console.log("Hello ", username);
      loggedIn = true;
      readComments();
      // ...
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log("error", error);
    });
}

function writeComment() {
  let message = document.getElementById("message").value;
  console.log("message", message);
  let date = new Date();
  let timestamp = date.getTime();
  database
    .collection("comments")
    .add({
      message: message,
      name: username,
      date: date
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      readComments();
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

function readComments() {
  let chat = document.getElementById("comments");
  chat.innerHTML = "";
  database
    .collection("comments")
    .orderBy("date")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        let container = document.createElement("div");
        console.log(container);
        container.setAttribute("class", "chat");
        let comment = document.createElement("p");
        let user = document.createElement("p");
        // let dateP = document.createElement("p");

        let documents = doc.data();
        console.log(documents);
        let { name, message, date } = documents;
        user.innerHTML = name;
        comment.innerHTML = message;
        // dateP.innerHTML = date;
        // console.log(date);
        // console.log(user);
        // console.log(message);
        container.appendChild(comment);
        container.appendChild(user);
        // container.appendChild(dateP);
        chat.appendChild(container);
      });
    });
}

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      // Sign-out successful.
      console.log("Logout successful!");
      loggedIn = false;
    })
    .catch(function(error) {
      // An error happened.
    });
}
// console.log(database);
