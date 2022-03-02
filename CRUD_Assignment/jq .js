$(function() {
    console.log("Script load hogya!");
    $("#btnUpdate").hide();
    loadapis();
    $("#btnAdd").click(addPersons);
    $("#myTable").on("click", ".dlt_btn", deletePerson);
    $("#myTable").on("click", ".upd_btn", updatePerson);
    $("#btnUpdate").click(sendAjaxUpdate);
});

function sendAjaxUpdate() {
    console.log("Send Ajax called");
    var name = $("#addName").val();
    var gender = $("#male").is(":checked");
    console.log(gender);
    var age = $("#addAge").val();
    var id = $("#hiddenid").html();
    var city = $("#addCity").val();

    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person/" + id,
        method: "PUT",
        data: { name, gender, age, city },
        success: function() {
            $("#addName").val("");
            $("#addGender").val("");
            $("#addAge").val("");
            $("#addCity").val("");
            $("#hiddenid").html("");
            //  $("#upd_btn").hide();

            loadapis();
        },
    });
}

function updatePerson() {
    console.log("Update Called");
    $("#btnAdd").hide();
    var btn = $(this);
    var id = btn.attr("data-id");

    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person/" + id,
        method: "GET",
        success: function(person) {
            console.log(person);
            console.log("zzzz");
            $("#addName").val(person.name);
            $("#addAge").val(person.age);

            $("#male").prop("checked", person.gender);
            $("#female").prop("checked", !person.gender);
            $("#addCity").val(person.city);
            $("#hiddenid").append(person._id);
            $("#btnUpdate").show();
        },
    });
}

function deletePerson() {
    console.log("Delete Called");
    var btn = $(this);
    var id = btn.attr("data-id");

    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person/" + id,
        method: "DELETE",
        success: loadapis,
        error: function() {
            console.log("Error on Server...");
        },
    });
}

function addPersons() {
    console.log("addPersons called");
    var name = $("#addName").val();
    var gender = $("#male").is(":checked");
    console.log(gender);

    var boolGender;
    if (gender == "Male") {
        boolGender == true;
    } else {
        boolGender == false;
    }
    var age = $("#addAge").val();
    var city = $("#addCity").val();

    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person",
        method: "POST",
        data: { name, gender, age, city },
        success: function() {
            $("#addName").val("");
            $("#addAge").val("");
            $("#addCity").val("");
            $("#addGender").is("");
            loadapis();
        },
    });
}

function loadapis() {
    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person",
        method: "GET",
        success: getPerson,
        error: function() {
            console.log("Error on Server");
        },
    });
}

function getPerson(person) {
    console.log(person);
    $("#myTable").html("");
    for (var i = 0; i < person.length; i++) {
        $("#myTable").append(`<tr><td>${person[i].name}</td><td>${
      person[i].gender ? "Male" : "Female"
    }</td><td>${person[i].age}</td><td>${
      person[i].city
    }</td><td><b class ="dlt_btn bg-danger text-white rounded"  data-id ="${
      person[i]._id
    }">Remove </b><b class ="upd_btn bg-warning text-white rounded" data-id="${
      person[i]._id
    }"> Edite</b></td></tr>
`);
    }
}