function onClickBox() {
    let checked1 = $("#box-1").is(":checked");
    let checked2 = $("#box-2").is(":checked");
    let checked3 = $("#box-3").is(":checked");
    let checked4 = $("#box-4").is(":checked");
    let checked5 = $("#box-5").is(":checked");
    let checked6 = $("#box-6").is(":checked");
    localStorage.setItem("checked1", checked1);
    localStorage.setItem("checked2", checked2);
    localStorage.setItem("checked3", checked3);
    localStorage.setItem("checked4", checked4);
    localStorage.setItem("checked5", checked5);
    localStorage.setItem("checked6", checked6);
}


function onReady() {

    let checked1 = "true" == localStorage.getItem("checked1");
    let checked2 = "true" == localStorage.getItem("checked2");
    let checked3 = "true" == localStorage.getItem("checked3");
    let checked4 = "true" == localStorage.getItem("checked4");
    let checked5 = "true" == localStorage.getItem("checked5");
    let checked6 = "true" == localStorage.getItem("checked6");
    $("#box-1").prop('checked', checked1);
    $("#box-2").prop('checked', checked2);
    $("#box-3").prop('checked', checked3);
    $("#box-4").prop('checked', checked4);
    $("#box-5").prop('checked', checked5);
    $("#box-6").prop('checked', checked6);

    $("#box-1").click(onClickBox);
    $("#box-2").click(onClickBox);
    $("#box-3").click(onClickBox);
    $("#box-4").click(onClickBox);
    $("#box-5").click(onClickBox);
    $("#box-6").click(onClickBox);

}

$(document).ready(onReady);