function sendMail() {
    // Collecting parameters from the form
    let params = {
        name: document.getElementById("name").value, // Input from the name field
        email: document.getElementById("email").value, // Input from the email field
        message: document.getElementById("message").value, // Input from the message field
    };

    // Sending email using EmailJS
    emailjs.send("service_40fhwqh", "template_u4u3dqa", {
        ...params,
        reply_to: params.email // Set reply_to to the sender's email address
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert("Email sent successfully!"); // Success alert
    }, function(error) {
        console.log('FAILED...', error);
        alert("Failed to send email. Please try again."); // Error alert
    });
}