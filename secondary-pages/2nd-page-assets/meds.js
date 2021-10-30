var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var displayDate = (document.getElementById("date").innerHTML = today);
var searchBtn = document.getElementById("search-btn");
var confirmed = document.getElementById("newConfirmed");
var newRecovered = document.getElementById("newRecovered");
var deaths = document.getElementById("totalDeaths");
var lat;
var lon;
var unitedStates = document.getElementById("unitedStates");
// var hours = [
//   "6:00 am",
//   "7:00 am",
//   "8:00 am",
//   "9:00 am",
//   "10:00 am",
//   "11:00 am",
//   "12:00 pm",
//   "1:00 pm",
//   "2:00 pm",
//   "3:00 pm",
//   "4:00 pm",
//   "5:00 pm",
//   "6:00 pm",
//   "7:00 pm",
//   "8:00 pm",
//   "9:00 pm",
//   "10:00 pm",
//   "11:00 pm",
//   "12:00 am",
// ];

// momentjs time code
moment().format("MMMM Do YYYY, h:mm:ss a");

var loadTimeBlock = function (i) {
  for (var i = 0; i < hours.length; i++) {
    createTimeBlock(i);
  }
};

function getForecast(e) {
  // e.preventDefault();
  var unitedStates = document.getElementById("unitedStates").value;
  var apiUrl = "https://covid19.mathdro.id/api/countries/USA";
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      // console.log("unitedStates is:", data.main.unitedStates);
      console.log("confirmed is:", data.confirmed.value);
      // console.log("recovered is:", data.main.newRecovered);
      console.log("Deaths is:", data.deaths.value);

      // unitedStates.textContent = "Country-" + data.name;
      confirmed.textContent =
        " Total Confirmed Cases 😷 -" + data.confirmed.value;
      // recovered.textContent = "Recovered" + data.main.newRecovered;
      deaths.textContent = "Total Deaths 💀-" + data.deaths.value;
      // lat = data.coord.lat;
      // lon = data.coord.lon;
    });
}
getForecast();
document.getElementById("unitedStates").value = "";

// searchBtn.addEventListener("click", getForecast);
