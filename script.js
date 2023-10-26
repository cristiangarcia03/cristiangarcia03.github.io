var nav = document.getElementById("navlist");
var header = document.getElementById("header");

var button = document.getElementById("menu");

function fun(){
    nav.classList.toggle('open');
    if (header.style.overflow == 'visible') {
        header.style.overflow = 'hidden'
    } else {
        header.style.overflow = 'visible'
    }
}

button.addEventListener("click", fun)


var python_page = document.getElementById("python_page")
var html_page = document.getElementById("html_page")
var swift_page = document.getElementById("swift_page")

var python_btn = document.getElementById("python_btn")
var html_btn = document.getElementById("html_btn")
var swift_btn = document.getElementById("swift_btn")

var proj = document.getElementById("projects")

function openPython() {
    python_page.style.transform = "translateX(0)"
    html_page.style.transform = "translateX(120%)"
    swift_page.style.transform = "translateX(120%)"
    python_btn.style.color = "#ff7846"
    html_btn.style.color = "#fff"
    swift_btn.style.color = "#fff"
    proj.style.height = "900px"
}

function openHtml() {
    python_page.style.transform = "translateX(120%)"
    html_page.style.transform = "translateX(0)"
    swift_page.style.transform = "translateX(120%)"
    python_btn.style.color = "#fff"
    html_btn.style.color = "#ff7846"
    swift_btn.style.color = "#fff"
    proj.style.height = "500px"
}

function openSwift() {
    python_page.style.transform = "translateX(120%)"
    html_page.style.transform = "translateX(120%)"
    swift_page.style.transform = "translateX(0)"
    python_btn.style.color = "#fff"
    html_btn.style.color = "#fff"
    swift_btn.style.color = "#ff7846"
    proj.style.height = "500px"
}


function sendEmail(){
    (function(){
      emailjs.init("IIfEX21RR-pQQuRnF"); // Account Public Key
    })();

    var params = {
      sendername: document.getElementById("input_name").value,
      email: document.getElementById("input_email").value,
      message: document.getElementById("email_message").value,
    };

    var serviceID = "service_xy2045v"; // Email Service ID
    var templateID = "template_jzsphvg"; // Email Template ID

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert("Email sent successfully!!")
    })
    .catch();
  }
