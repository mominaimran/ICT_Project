input1 = document.getElementById("fav-gadget");
input2 = document.getElementById("reason");
btn = document.getElementById("submit-button");

btn.addEventListener("click", () => {
    if (input1.value == "" || input2.value == "") {
        alert("Please fill out all fields!");
    }
    else {
        window.location.href = "submit.html";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-animate");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("image-visible");
                observer.unobserve(entry.target);
            }
        });
    });

    images.forEach(image => {
        observer.observe(image);
    });
});
