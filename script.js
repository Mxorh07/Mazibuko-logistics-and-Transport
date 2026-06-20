document.getElementById("quoteForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    let whatsappMessage =
`Hello Mazibuko Logistics & Transport,

Name: ${name}
Phone: ${phone}
Email: ${email}

Service Required: ${service}

Details:
${message}`;

    let url = `https://wa.me/27647295896?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");

});let topBtn = document.getElementById("topBtn");

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

};

topBtn.onclick = function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});