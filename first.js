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

// fetch data for page 2 and 2a //

let urlArray = [
  "https://api.spacexdata.com/v3/rockets",
  "https://api.spacexdata.com/v3/dragons"
];
// let finalData = {};
// Promise.all(
//   urlArray.map(url => {
//     fetch(url, {
//       method: "GET"
//     }).then(response => {
//       console.log(response);
//       return response.json();
//     });
//   })
// )
//    .then(data => {
//     console.log(data);
//     // if(data.length == 2){
//     //   finalData.dragons = data.push
//     // }
//     // else {
//     //   finalData.rockets = data.
//     // }
//     // finalData.push(...data);
//     // console.log(finalData);

//     // createSecondPage(finalData);
//     // console.log(rockets[0].description);
//   })
//   .catch(function(error) {
//     console.log(error, "<-- error");
//   });

Promise.all(urlArray.map(url => fetch(url).then(resp => resp.json())))
  .then(data => {
    console.log(data);
    let rockets = data[0];
    let dragons = data[1];
    // console.log(dragons);
    createSecondPage(rockets, dragons);
  })
  .catch(function (error) {
    console.log(error, "<-- error");
  });

// two fetches for page 2a (before the promise.all)//

// fetch("https://api.spacexdata.com/v3/rockets", {
//   method: "GET"
// })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(rockets) {
//     createSecondPage(rockets);
//     // console.log(rockets[0].description);
//   })
//   .catch(function(error) {
//     console.log(error, "<-- error");
//   });

// fetch("https://api.spacexdata.com/v3/dragons", {
//   method: "GET"
// })
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(dragons) {
//     // createSecondPage(dragons);
//     console.log(Promise);
//   })
//   .catch(function(error) {
//     console.log(error, "<-- error");
//   });

//   let promise = Promise.all([response.json(rockets), response.json(dragons)])
//   .then(result) => {

//   console.log(result)

//  .catch (error => console.log(`Error in promises ${error}`))

// fetch data for page 3 //

fetch("https://api.spacexdata.com/v3/history", {
    method: "GET"
  })
  .then(function (response) {
    return response.json();
  })
  .then(function (history) {
    createThirdPage(history);
    // console.log(history[0].title);
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

function createSecondPage(rockets, dragons) {
  // console.log(dragons);
  let logo2 = document.getElementById("logo2");
  logo2.innerHTML = '<img src="spacexlogo.jpg">';

  // this creates clickable images from js and adds event listeners

  let rocketListItem1 = document.getElementById("rocketList");
  let imgbtn1 = document.createElement("img");
  imgbtn1.setAttribute("src", "falconone.jpg");
  imgbtn1.setAttribute("data-position", 0);
  imgbtn1.setAttribute("data-target", "spacecrafts");
  imgbtn1.addEventListener("click", function (event) {
    // console.log(event);
    createPage2a(rockets, event);
    app.butt(event);
  });
  rocketListItem1.appendChild(imgbtn1);

  let rocketListItem2 = document.getElementById("rocketList");
  let imgbtn2 = document.createElement("img");
  imgbtn2.setAttribute("src", "falconnine.jpg");
  imgbtn2.setAttribute("data-position", 1);
  imgbtn2.setAttribute("data-target", "spacecrafts");
  imgbtn2.addEventListener("click", function (event) {
    createPage2a(rockets, event);
    app.butt(event);
  });
  rocketListItem2.appendChild(imgbtn2);

  let rocketListItem3 = document.getElementById("rocketList");
  let imgbtn3 = document.createElement("img");
  imgbtn3.setAttribute("src", "falconheavy.jpg");
  imgbtn3.setAttribute("data-position", 2);
  imgbtn3.setAttribute("data-target", "spacecrafts");
  imgbtn3.addEventListener("click", function (event) {
    createPage2a(rockets, event);
    app.butt(event);
  });
  rocketListItem3.appendChild(imgbtn3);

  let rocketListItem4 = document.getElementById("rocketList");
  let imgbtn4 = document.createElement("img");
  imgbtn4.setAttribute("src", "bigfalconrocket.jpg");
  imgbtn4.setAttribute("data-position", 3);
  imgbtn4.setAttribute("data-target", "spacecrafts");
  imgbtn4.addEventListener("click", function (event) {
    createPage2a(rockets, event);
    app.butt(event);
  });
  rocketListItem4.appendChild(imgbtn4);

  let rocketListItem5 = document.getElementById("rocketList");
  let imgbtn5 = document.createElement("img");
  imgbtn5.setAttribute("src", "dragonone.jpg");
  imgbtn5.setAttribute("data-position", 0);
  imgbtn5.setAttribute("data-target", "spacecrafts");
  imgbtn5.addEventListener("click", function (event) {
    createPage2a(dragons, event);
    app.butt(event);
  });
  rocketListItem5.appendChild(imgbtn5);

  let rocketListItem6 = document.getElementById("rocketList");
  let imgbtn6 = document.createElement("img");
  imgbtn6.setAttribute("src", "dragontwo.jpeg");
  imgbtn6.setAttribute("data-position", 1);
  imgbtn6.setAttribute("data-target", "spacecrafts");
  imgbtn6.addEventListener("click", function (event) {
    createPage2a(dragons, event);
    console.log(dragons);
    app.butt(event);
  });
  rocketListItem6.appendChild(imgbtn6);
  console.log(dragons);
}

function createPage2a(rockets, event) {
  // console.log(dragons.description);
  console.log(rockets[0].description);
  console.log(rockets[1].description);
  let logo4 = document.getElementById("logo4");
  logo4.innerHTML = '<img src="spacexlogo.jpg">';
  // for (let i = 0; i < rockets.length; i++) {
  // console.log(event.target.getAttribute("data-position"));
  let selectedRocket = event.target.getAttribute("data-position");
  let spacecraftsList = document.getElementById("spacecraftsList");
  spacecraftsList.innerHTML = "";
  let rocketDescription = document.createElement("p");
  rocketDescription.innerHTML = rockets[selectedRocket].description;
  spacecraftsList.appendChild(rocketDescription);
  console.log(rockets[selectedRocket].description);
  // spacecraftsList.onclick = function() {
  //   rocketDescription.style.display = "block";
  // };
  // }
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

// make the app change pages although there is only one
const app = {
  // pages: [],
  // show: new Event("show"),
  init: function () {
    // grab all pages and save them in pages
    // app.pages = document.querySelectorAll(".page");
    // add a listener to all show events to all the pages
    // app.pages.forEach(pages => {
    //   pages.addEventListener("show", app.pageShown);
    // });
    // and add listener to all the links
    document.querySelectorAll(".butt-link").forEach(link => {
      link.addEventListener("click", app.butt);
    });

    history.replaceState({}, "Home", "#home");
    window.addEventListener("popstate", app.poppin);
  },
  // changing status from active to non-active
  butt: function (event) {
    console.log(event);
    event.preventDefault();
    let currentPage = event.target.getAttribute("data-target");
    console.log(currentPage);
    document.querySelector(".active").classList.remove("active");
    document.getElementById(currentPage).classList.add("active");
    history.pushState({}, currentPage, `#${currentPage}`);
    // document.getElementById(currentPage).dispatchEvent(app.show);
  },
  // pageShown: function(event) {},
  poppin: function (event) {
    // going to previous page via browserback
    let hash = location.hash.replace("#", "");
    document.querySelector(".active").classList.remove("active");
    document.getElementById(hash).classList.add("active");
    // document.getElementById(hash).dispatchEvent(app.show);
  }
};
// init-function gets called on dom content loaded
document.addEventListener("DOMContentLoaded", app.init);

function goBack() {
  window.history.back();
}