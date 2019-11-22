firebase.initializeApp(firebaseConfig);
firebase.analytics();

console.log(firebase);

let username = "";
let loggedIn = false;
let signedIn = false;
// google sign in
// create an instance of the google provider object (sign in with google)
let provider = new firebase.auth.GoogleAuthProvider();
// initialize cloud firestore through firebase
let database = firebase.firestore();

function loginGoogle() {
  // to sign in with a pop-up window, call signinwithpopup
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function(result) {
      // The signed-in user info.
      let user = result.user;
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

function createAccount() {
  let newEmail = document.getElementById("signupEmail").value;
  let newPassword = document.getElementById("signupPassword").value;
  firebase
    .auth()
    .createUserWithEmailAndPassword(newEmail, newPassword)
    .then(() => isUser())
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  // readComments();
  // modal.style.display = "none";
}

// Get the modal
var modal = document.getElementById("loginPasswordModal");
// Get the button that opens the modal
var btn = document.getElementById("modalButton");
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
};

function loginPassword() {
  let userEmail = document.getElementById("loginEmail").value;
  let userPassword = document.getElementById("loginPassword").value;

  firebase
    .auth()
    .signInWithEmailAndPassword(userEmail, userPassword)
    .then(() => isUser())
    .catch(function(error) {
      // Handle Errors here.
      alert("Are you kidding me? That ain't no valid entry, man!!!");
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  // readComments();
}

function isUser() {
  console.log("isUser called");
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      // signedIn = true;
      loggedIn = true;
      modal.style.display = "none";
      readComments();
    }
  });
}

function writeComment() {
  if (loggedIn == true) {
    let message = document.getElementById("message").value;
    // console.log("message", message);
    let date = new Date();
    // let timestamp = date.getTime();
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
        user.innerHTML = "(" + name + ")";
        comment.innerHTML = message;
        // dateP.innerHTML = date;
        // console.log(date);
        // console.log(user);
        // console.log(message);
        container.appendChild(comment);
        comment.appendChild(user);
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
