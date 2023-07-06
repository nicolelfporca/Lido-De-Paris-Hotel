function sendEmail() {
    var email = "inquiry@lidodeparishotel.com";
    var subject = document.getElementById("typeText").value;
    var message = document.getElementById("textAreaExample").value;

    // Perform client-side validation here
    if (!email || !subject || !message) {
        Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: 'Please fill in all fields.'
        });
        return;
    }

    // Construct the mailto URL
    var mailtoUrl = "mailto:" + email +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(message);

    // Open the user's default email client
    window.location.href = mailtoUrl;
}
