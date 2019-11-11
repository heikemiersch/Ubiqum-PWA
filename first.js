console.log("start");

// fetch data for page 1 //
fetch("https://api.spacexdata.com/v3/info", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(info) {
    // console.log(info.summary);
    createFirstPage(info);
  })
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// fetch data for page 2 //
fetch("https://api.spacexdata.com/v3/rockets", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(dataRockets) {
    createSecondPage(dataRockets);
    console.log("this is where createSecondPage should be called");
  })
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// fetch more data for page 2 //
fetch("https://api.spacexdata.com/v3/dragons", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(dataDragons) {})
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// fetch data for page 2a (use if-statements later)//
fetch("https://api.spacexdata.com/v3/launches", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(dataLaunches) {})
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// fetch data for page 3 (use if-statements later)//
fetch("https://api.spacexdata.com/v3/history", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(history) {
    createThirdPage(history);
    console.log(history[0].title);
  })
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// grab elements by their id and put data in
function createFirstPage(info) {
  let logo1 = document.getElementById("logo1");
  logo1.innerHTML = '<img src="spacexlogo.jpg">';
  let home = document.getElementById("companyDescription");
  home.innerHTML = info.summary;
}

function createSecondPage(dataRockets) {
  let logo2 = document.getElementById("logo2");
  logo2.innerHTML = '<img src="spacexlogo.jpg">';

  // let rocketDescriptionShort = document.createElement("p");
  // rocketDescriptionShort.innerHTML = dataRockets[0].rocket_name;
  // rocketListItem1.appendChild(rocketDescriptionShort);

  // this would create buttons from js, i need to do that because of what's coming

  let rocketListItem1 = document.getElementById("rocketList");
  let imgbtn1 = document.createElement("img");
  imgbtn1.setAttribute("src", "falconone.jpg");
  rocketListItem1.appendChild(imgbtn1);
  let rocketListItem2 = document.getElementById("rocketList");
  let imgbtn2 = document.createElement("img");
  imgbtn2.setAttribute("src", "falconnine.jpg");
  rocketListItem2.appendChild(imgbtn2);
  let rocketListItem3 = document.getElementById("rocketList");
  let imgbtn3 = document.createElement("img");
  imgbtn3.setAttribute("src", "falconheavy.jpg");
  rocketListItem3.appendChild(imgbtn3);
  let rocketListItem4 = document.getElementById("rocketList");
  let imgbtn4 = document.createElement("img");
  imgbtn4.setAttribute("src", "bigfalconrocket.jpg");
  rocketListItem4.appendChild(imgbtn4);
  let rocketListItem5 = document.getElementById("rocketList");
  let imgbtn5 = document.createElement("img");
  imgbtn5.setAttribute("src", "dragonone.jpg");
  rocketListItem5.appendChild(imgbtn5);
  let rocketListItem6 = document.getElementById("rocketList");
  let imgbtn6 = document.createElement("img");
  imgbtn6.setAttribute("src", "dragontwo.jpeg");
  rocketListItem6.appendChild(imgbtn6);
}

function createThirdPage(history) {
  let logo3 = document.getElementById("logo3");
  logo3.innerHTML = '<img src="spacexlogo.jpg">';
  let container = document.getElementById("historyList");
  container.innerHTML = "";

  for (let i = 0; i < history.length; i++) {
    let histTitle = document.createElement("p");
    let link = document.createTextNode(
      history[i].event_date_utc.slice(0, 10) + "\n" + " " + history[i].title
    );
    histTitle.appendChild(link);
    container.appendChild(histTitle);
  }
}

// function createButtons() {
//   let a = document.getElementById("home");
//   let a = document.createElement("a");
//   let link = document.createTextNode("This is link");
//   a.appendChild(link);
//   a.title = "Home";
//   a.href = "index.html";
//   document.body.appendChild(a);

//   let b = document.getElementById("rockets");
//   let b = document.createElement("a");
//   let link = document.createTextNode("This is link");
//   b.appendChild(link);
//   b.title = "Rockets";
//   b.href = "index.html";
//   document.body.appendChild(b);

//   let c = document.getElementById("login");
//   let c = document.createElement("a");
//   let link = document.createTextNode("This is link");
//   c.appendChild(link);
//   c.title = "Login";
//   c.href = "index.html";
//   document.body.appendChild(c);
// }

// make the app change pages although there is only one
const app = {
  pages: [],
  // oh, this is old fashioned, right? (new Event)
  show: new Event("show"),
  init: function() {
    // grab all pages and save them in pages
    app.pages = document.querySelectorAll(".page");
    // add a listener to all show events to all the pages
    app.pages.forEach(pages => {
      pages.addEventListener("show", app.pageShown);
    });
    // and add listener to all the links
    document.querySelectorAll(".butt-link").forEach(link => {
      link.addEventListener("click", app.butt);
    });
    history.replaceState({}, "Home", "#home");
    window.addEventListener("popstate", app.poppin);
  },
  butt: function(event) {
    event.preventDefault();
    let currentPage = event.target.getAttribute("data-target");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(currentPage).classList.add("active");
    history.pushState({}, currentPage, `#${currentPage}`);
    document.getElementById(currentPage).dispatchEvent(app.show);
  },
  pageShown: function(event) {},
  poppin: function(event) {
    // going to previous page via browserback
    let hash = location.hash.replace("#", "");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(hash).classList.add("active");
    document.getElementById(hash).dispatchEvent(app.show);
  }
};
// init-function gets called on dom content loaded
document.addEventListener("DOMContentLoaded", app.init);
