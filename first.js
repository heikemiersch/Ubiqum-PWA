console.log("start");

// fetch data for page 1 //
fetch("https://api.spacexdata.com/v3/info", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(info) {
    console.log(info.summary);
    createFirstPage(info);
  })
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// fetch data for page 2 //
fetch("https://api.spacexdata.com/v3/dragons", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(dataDragons) {
    console.log(dataDragons[0].name);
    console.log(dataDragons[0].description);
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
    console.log(dataRockets[0].rocket_name);
    // createSecondPage(dataRockets);
  })
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// fetch data for page 3 (use if-statements later)//
fetch("https://api.spacexdata.com/v3/launches", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(dataLaunches) {
    console.log(dataLaunches);
    console.log(dataLaunches[0].rocket.rocket_name);
    console.log(dataLaunches[100].rocket.fairings.reused);
  })
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// grab elements by their id and put data in
function createFirstPage(info) {
  let logo = document.getElementById("logo");
  logo.innerHTML = '<img src="spacexlogo.jpg">';
  let home = document.getElementById("companyDescription");
  home.innerHTML = info.summary;
}

// function createSecondPage(dataRockets) {
//   let rocketsAndDragons = document.getElementById("rockets");
//   rocketsAndDragons.innerHTML = dataRockets[0].rocket_name;
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
