$(function() {
    loadapis();
    $("#btnUpdate").prop("disabled", true);
    $("#btnReset").prop("disabled", true);
    $("#btnAdd").click(addPersons);
    $("#myTable").on("click", ".dlt_btn", deletePerson);
    $("#myTable").on("click", ".upd_btn", updatePerson);
    $("#btnUpdate").click(sendAjaxUpdate);
    $("#btnReset").click(resetPerson);

});

function resetPerson() {
    $("#btnAdd").prop("disabled", false);
    $("#addName").val("");
    $("#male").prop('checked', false);
    $("#female").prop('checked', false);
    $("#addAge").val("");
    $("#addCity").val("");
}

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
            $("#male").prop('checked', false);
            $("#female").prop('checked', false);
            $("#addAge").val("");
            $("#addCity").val("");
            $("#hiddenid").html("");
            loadapis();
        },

    });
}

function updatePerson() {
    console.log("Update Called");
    $("#btnAdd").prop("disabled", true);
    var btn = $(this);
    var id = btn.attr("data-id");

    $.ajax({
        url: "https://haseeb-apis.herokuapp.com/api/person/" + id,
        method: "GET",
        success: function(person) {
            console.log(person);
            $("#addName").val(person.name);
            $("#addAge").val(person.age);

            $("#male").prop("checked", person.gender);
            $("#female").prop("checked", !person.gender);
            $("#addCity").val(person.city);
            $("#hiddenid").append(person._id);
            // $("#btnUpdate").show();
            $("#btnUpdate").prop("disabled", false);
            $("#btnReset").prop("disabled", false);
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
    $("#btnReset").prop("disabled", false);
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
        error: function handleError() {
            $("#myTable").html("");
            $("#myTable").html("Error on server");
        }
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