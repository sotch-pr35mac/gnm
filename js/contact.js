$(document).ready(function() {
  $("#sendMessageButton").click(function() {
    var userName = $("#nameInput").val();
    var userEmail = $("#emailInput").val();
    var subject = $("#subjectInput").val();
    var messageBody = $("#messageInput").val();

    if(userName == " " || userName == "" || userEmail == "" || userEmail == " " || messageBody == "" || messageBody == " ") {
      swal("Incomplete Form", "Please complete all required fields. 'Subject' is the only optional field.", "error");
    }
    else {
      if(subject == "" || subject == " ") {
        subject = "Message from "+userName;
      }

      var message = userName+' says: "'+messageBody+'"';

      $.ajax({
        type: 'POST',
        url: 'php/contact.php',
        data: {
          name: userName,
          email: userEmail,
          subject: subject,
          message: message
        },
        success: function(data) {
          console.log(data);
          swal("Message Sent", "Your message was successfully delivered.", "success");
        },
        error: function(data) {
          console.log(data);
          swal("Message Failed to Send", "An error occured and we could not deliver your message. ", "error");
        }
      });
    }
  });
});
