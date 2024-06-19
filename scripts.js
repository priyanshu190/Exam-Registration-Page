// scripts.js

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const exam = document.getElementById('exam').value;
    const terms = document.getElementById('terms').checked;

    let message = "Registration Successful!\n\n";
    message += `Name: ${name}\n`;
    message += `Email: ${email}\n`;
    message += `Phone: ${phone}\n`;
    message += `Date of Birth: ${dob}\n`;
    message += `Selected Exam: ${exam}\n`;

    if (terms) {
        document.getElementById('message').textContent = message;
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = "Please agree to the terms and conditions.";
        document.getElementById('message').style.color = 'red';
    }
});
