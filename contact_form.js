function SubmitContactForm() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        $("#messageSuccess").addClass('show') //Shows Bootstrap alert
      }
        if (this.readyState == 4 && this.status !== 200) {
        $("#messageFailure").addClass('show') //Shows Bootstrap alert
        }
      }

    xhttp.open("POST", "your_rest_api_url_here", true);

    var email = $("#contact_email").val();
    var subject = $("#contact_subject").val();
    var message = $("#contact_message").val();

    var data = {
      email : email,
      subject : subject,
      message : message,
      };

    xhttp.send(JSON.stringify(data));
};
