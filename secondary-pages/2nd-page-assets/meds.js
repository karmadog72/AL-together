var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var displayDate = (document.getElementById("date").innerHTML = today);
var searchBtn = document.getElementById("search-btn");
var newConfirmed = document.getElementById("newConfirmed");
var newRecovered = document.getElementById("newRecovered");
var totalDeaths = document.getElementById("totalDeaths");
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

function getForescast(e) {
  e.preventDefault();
  var unitedStates = document.getElementById("unitedStates").value;
  var apiUrl = `https://api.covid19api.com/total/${country}/${unitedStates}`;
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log("unitedStates is:", data.main.unitedStates);
      console.log("confirmed is:", data.main.newConfirmed);
      console.log("recovered is:", data.main.newRecovered);
      console.log("Deaths is:", data.totalDeaths);

      unitedStates.textContent = "Country-" + data.name;
      confirmed.textContent = "Confirmed Cases" + data.main.newConfirmed;
      recovered.textContent = "Recovered" + data.main.newRecovered;
      deaths.textContent = "Deaths" + data.totalDeaths;
      lat = data.coord.lat;
      lon = data.coord.lon;
      getForecast();
    });
}
document.getElementById("unitedStates").value = "";

searchBtn.addEventListener("click", getForescast);
