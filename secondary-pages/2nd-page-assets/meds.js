var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var displayDate = (document.getElementById("date").innerHTML = today);
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
// var militaryHours = [
//   "0600",
//   "0700",
//   "0800",
//   "0900",
//   "1000",
//   "1100",
//   "1200",
//   "1300",
//   "1400",
//   "1500",
//   "1600",
//   "1700",
//   "1800",
//   "1900",
//   "2000",
//   "2100",
//   "2200",
//   "2300",
//   "2400",
// ];

// momentjs time code
moment().format("MMMM Do YYYY, h:mm:ss a");

var loadTimeBlock = function (i) {
  for (var i = 0; i < hours.length; i++) {
    createTimeBlock(i);
  }
};
// var createTimeBlock = function (i) {
//   var newLi = $("<li>").addClass("list-group-item");
//   var newRow = $("<div></div>").addClass("row");
//   var newTime = $("<div></div>")
//     .addClass(
//       "col-2 d-flex align-items-center border border-dark  rgb(170, 50, 220, .6); justify-content-center "
//     )
//     .text(hours[i]);
//   var newColInput = $("<div></div>").addClass(
//     "col-8 bg-white d-flex align-items-left justify-content-center "
//   );
//   var newInput = $(
//     "<input type='textArea' style='height: 100%; width:100%' ></input>"
//   ).attr("id", hours[i]);
//   var saveBtn = $("<button type='button'></button>")
//     .addClass("saveBtn btn-default")
//     .attr("data-id", hours[i])
//     .append('<i class="fas fa-save"></i>');
//   var btnCol = $("<div></div>").addClass(
//     "col-1 has-background-white   d-flex align-items-center border border-dark  rgb(170, 50, 220, .6); justify-content-center"
//   );
//   var task = localStorage.getItem(hours[i]);
//   if (task) {
//     newInput.val(task);
//   }
//   var hour = moment().format("H");
//   if (hour > militaryHours[i]) {
//     newInput.addClass("has-background-grey-lighter text-black");
//   }
//   if (hour == militaryHours[i]) {
//     newInput.addClass("has-background-danger-light  has-text-black");
//   }
//   if (hour < militaryHours[i]) {
//     newInput.addClass("has-background-primary-light  has-text-black");
//   }
//   btnCol.append(saveBtn);
//   newColInput.append(newInput);
//   // append to ul list on the page
//   newRow.append(newTime, newColInput, btnCol);
//   newLi.append(newRow);
//   $("#list").append(newLi);
// };
// loadTimeBlock();
// $(".saveBtn").click(function () {
//   var taskHour = $(this).attr("data-id");
//   var taskText = $("#" + taskHour).val();
//   localStorage.setItem(taskHour, taskText);
//   console.log(taskText);
// });
