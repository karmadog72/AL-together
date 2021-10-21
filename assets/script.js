// function generateDate () {
//     currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
//     document.getElementById("currentDay").innerHTML = currentDay;
//     console.log("currentDay")
// }

$(document).ready(function () {
    var currentDate = moment().format('dddd, MMMM Do YYYY');
    $("#currentDay").text(currentDate);
}) 