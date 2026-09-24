// ================================
// Contact Form Validation
// ================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

    } else {

        alert("Thank you, " + name + "! Your message has been received.");

    }

});


// ================================
// View My Work Button
// ================================

const viewWorkButton = document.getElementById("view-work-btn");

viewWorkButton.addEventListener("click", function() {

    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });

});