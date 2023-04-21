$(document).ready(function () {

//user name validaton

  $("#usercheck").hide();
  $("#full-name").keyup(function () {
    validateUsername();
  });

//email validation

  $("#emailvalid").hide();
  $("#email").keyup(function () {
    validateEmail();
  });

// subject validation

$("#subjectcheck").hide();
$("#subject").keyup(function () {
    validateSubject();
});

//message validation

$("#messagecheck").hide();
$("#message").keyup(function () {
    validateMessage();
});

//date check
$("#datecheck").hide();
$("#date").keyup(function () {
    validateDate();
});

//check before submission

$('#myForm').submit(function(event) {
    event.preventDefault();
    validateUsername();
    validateEmail();
    validateSubject();
    validateMessage();
    validateDate();
});

});

function validateUsername() {
  let usernameValue = $("#full-name").val();
  if (usernameValue.length == "") {
    $("#usercheck").show();
    $("#usercheck").html("Username is missing");

    return false;
  } else if (usernameValue.length < 3 || usernameValue.length > 20) {
    $("#usercheck").show();
    $("#usercheck").html("length of username must be between 3 and 20");
    return false;
  } else {
    $("#usercheck").hide();
  }
}

function validateEmail() {
  var sEmail = $("#email").val();
  var filter = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
  if (filter.test(sEmail)) {
    $("#emailvalid").hide();
  } else {
    $("#emailvalid").show();
  }
}

function validateSubject() {
    let subjectNameValue = $("#subject").val();
    if (subjectNameValue.length == "") {
      $("#subjectcheck").show();
      $("#subjectcheck").html("Subject is missing");
  
    } else if (subjectNameValue.length < 2 || subjectNameValue.length > 20) {
      $("#subjectcheck").show();
      $("#subjectcheck").html("length of Subject must be between 1 and 20");
    } else {
      $("#subjectcheck").hide();
    }
  }

  function validateMessage() {
    let messageValue = $("#message").val();
    if (messageValue.length == "") {
      $("#messagecheck").show();
      $("#messagecheck").html("message is missing");
  
    }  else {
      $("#messagecheck").hide();
    }
  }


  function validateDate() {
    var date = $("#date").val();
    console.log(date)
    if (date.length == "") {
        $("#datecheck").show();
        $("#datecheck").html("date is missing");
    
      }  else {
        $("#datecheck").hide();
      }
  }



