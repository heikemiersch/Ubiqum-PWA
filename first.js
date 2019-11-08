console.log("start");

// fetch data for page 1 //
fetch("https://api.spacexdata.com/v3/info", {
    method: "GET"
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (info) {
    // console.log(info.summary);
    createFirstPage(info);
  })
  .catch(function (error) {
    console.log(error, "<-- error");
  });

// fetch data for page 2 //
fetch("https://api.spacexdata.com/v3/rockets", {
    method: "GET"
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (dataRockets) {
    // console.log(dataRockets[0].rocket_name);
    createSecondPage(dataRockets);
    console.log("this is where createSecondPage should be called");
  })
  .catch(function (error) {
    console.log(error, "<-- error");
  });

// fetch more data for page 2 //
fetch("https://api.spacexdata.com/v3/dragons", {
    method: "GET"
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (dataDragons) {
    // console.log(dataDragons[0].name);
    // console.log(dataDragons[0].description);
  })
  .catch(function (error) {
    console.log(error, "<-- error");
  });

// fetch data for page 3 (use if-statements later)//
fetch("https://api.spacexdata.com/v3/launches", {
    method: "GET"
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (dataLaunches) {
    // console.log(dataLaunches);
    // console.log(dataLaunches[0].rocket.rocket_name);
    // console.log(dataLaunches[100].rocket.fairings.reused);
  })
  .catch(function (error) {
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
  let rocketDescriptionShort = document.createElement("p");
  rocketDescriptionShort.innerHTML = dataRockets[0].rocket_name;
  rocketListItem1.appendChild(rocketDescriptionShort);

  // this would create buttons from js, but why, it's static

  // let rocketsAndDragons = document.getElementById("rocketList");
  // let buttons = document.createElement("img");
  // buttons.setAttribute("src", "falconone.jpg");
  // rocketsAndDragons.appendChild(buttons);
}

// just wrong 

// function createThirdPage() {
//   document.getElementsByTagName("img").addEventListener("click", function () {
//     let rocketDescriptionShort = document.createElement("p");
//     rocketDescriptionShort.setAttribute("src", dataRockets[0].description);
//     rocketListItem1.appendChild(rocketDescriptionShort);
//     console.log("Where am I?");
//   });
// }


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
  init: function () {
    app.pages = document.querySelectorAll(".page");
    app.pages.forEach((pages) => {
      pages.addEventListener("show", app.pageShown);
    })

    document.querySelectorAll(".butt-link").forEach((link) => {
      link.addEventListener("click", app.butt);
    })
    history.replaceState({}, "Home", "#home");
    window.addEventListener("popstate", app.poppin);
  },
  butt: function (event) {
    event.preventDefault();
    let currentPage = event.target.getAttribute("data-target");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(currentPage).classList.add("active");
    history.pushState({}, currentPage, `#${currentPage}`);
    document.getElementById(currentPage).dispatchEvent(app.show);
  },
  pageShown: function (event) {},
  poppin: function (event) {
    // going to previous page via browserback
    let hash = location.hash.replace("#", "");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(hash).classList.add("active");
    document.getElementById(hash).dispatchEvent(app.show);
  }
}
document.addEventListener("DOMContentLoaded", app.init);