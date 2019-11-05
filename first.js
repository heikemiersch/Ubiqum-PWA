console.log("start");

// fetch data for page 1.1 //
fetch("https://api.spacexdata.com/v3/info", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(info) {
    console.log(info.summary);
  })
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// fetch data for page 1.2 //
fetch("https://api.spacexdata.com/v3/history", {
  method: "GET"
})
  .then(function(response) {
    return response.json();
  })
  .then(function(dataHistory) {
    console.log(dataHistory[0].title);
    console.log(dataHistory[0].details);
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
  })
  .catch(function(error) {
    console.log(error, "<-- error");
  });

// fetch data for page 3 (later use if statements)//
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

// function backgroundImage(dataLaunches) {
//   switch (dataLaunches[0]) {
//     case "launches":
//       document.body.style.backgroundImage = 'url("spacexHome.jpg")';
//       break;
//     case "rockets":
//       document.body.style.backgroundImage = 'url("spacexRockets.jpg")';
//       break;
//     case "dragons":
//       document.body.style.backgroundImage = 'url("spacexDragons.jpg")';
//       break;
//   }
// }

// grab elements by their id and put data in

// function createElements() {
//   let companyInfo = document.getElementById("home");
//   companyInfo.innerHTML = info.summary;
// }

// console.log(info.summary);
