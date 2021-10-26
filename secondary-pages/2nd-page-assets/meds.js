var today = moment().format("MMMM Do YYYY, h:mm:ss a");
var displayDate = (document.getElementById("date").innerHTML = today);
var hours = [6, 7, 8, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
var militaryHours = [
  0600, 0700, 0800, 0900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800,
  1900, 2000, 2100, 2200, 2300,
];

// momentjs time code
moment().format("MMMM Do YYYY, h:mm:ss a");

var loadTimeBlock = function (i) {
  for (var i = 0; i < hours.length; i++) {
    createTimeBlock(i);
  }
};
var createTimeBlock = function (i) {
  var newLi = $("<li>").addClass("list-group-item");
  var newRow = $("<div></div>").addClass("row");
  var newTime = $("<div></div>")
    .addClass(
      "col-2 d-flex align-items-center border border-light border-left-color: transparent; justify-content-center "
    )
    .text(hours[i]);
  var newColInput = $("<div></div>").addClass(
    "col-8 bg-white d-flex align-items-left justify-content-center "
  );
  var newInput = $(
    "<input type='textArea' style='height: 100%; width:100%'></input>"
  ).attr("id", hours[i]);
  var saveBtn = $("<button type='button'></button>")
    .addClass("saveBtn btn-default")
    .attr("data-id", hours[i])
    .append('<i class="fas fa-save"></i>');
  var btnCol = $("<div></div>").addClass(
    "col-1 bg-light text-dark d-flex align-items-center"
  );
  var task = localStorage.getItem(hours[i]);
  if (task) {
    newInput.val(task);
  }
  var hour = moment().format("H");
  if (hour > militaryHours[i]) {
    newInput.addClass("bg-dark text-white");
  }
  if (hour == militaryHours[i]) {
    newInput.addClass("bg-light");
  }
  if (hour < militaryHours[i]) {
    newInput.addClass("bg-info text-white");
  }
  btnCol.append(saveBtn);
  newColInput.append(newInput);
  // append to ul list on the page
  newRow.append(newTime, newColInput, btnCol);
  newLi.append(newRow);
  $("#list").append(newLi);
};
loadTimeBlock();
$(".saveBtn").click(function () {
  var taskHour = $(this).attr("data-id");
  var taskText = $("#" + taskHour).val();
  localStorage.setItem(taskHour, taskText);
});
