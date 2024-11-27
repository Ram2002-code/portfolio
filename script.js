/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
    let menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {
    headerShadow()
};

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
    strings: ["Front-End Developer", "Back-End Developer", "Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', {
    delay: 100
})
sr.reveal('.featured-text-info', {
    delay: 200
})
sr.reveal('.featured-text-btn', {
    delay: 200
})
sr.reveal('.social_icons', {
    delay: 200
})
sr.reveal('.featured-image', {
    delay: 300
})

/* -- PROJECT BOX -- */
sr.reveal('.project-box', {
    interval: 200
})

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', {
    delay: 100
})
srLeft.reveal('.contact-info', {
    delay: 100
})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', {
    delay: 100
})
srRight.reveal('.form-control', {
    delay: 100
})

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

document.getElementById('resume').addEventListener('click', function() {
    // Replace 'your-resume.pdf' with the actual URL or path to your PDF file
    const pdfUrl = 'https://drive.google.com/file/d/10THR0uwXAvPa4BAyEe_s7AtRUhoZiUe8/view?usp=sharing';
    window.open(pdfUrl, '_blank');
});

document.getElementById('downloadButton').addEventListener('click', function() {
    // Replace 'your-resume.pdf' with the actual URL or path to your PDF file
    const pdfUrl = 'https://drive.google.com/file/d/10THR0uwXAvPa4BAyEe_s7AtRUhoZiUe8/view?usp=sharing'
    window.open(pdfUrl, '_blank');
});

document.getElementById('hire').addEventListener('click', function() {
    // Replace 'your-resume.pdf' with the actual URL or path to your PDF file
    const Url = 'https://www.linkedin.com/in/ramprasaath-m/';
    window.open(Url, '_blank');
});

window.addEventListener('scroll', scrollActive)


// Email Sender
function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("fromName").value,
        to_name: "RAMPRASAATH M",
        email_sender: document.getElementById("emailSender").value,
        subject_sender: document.getElementById("subjectSender").value,
        message_sender: document.getElementById("message").value,
    };
    if (tempParams.from_name !== "" && tempParams.email_sender !== "" && tempParams.subject_sender !== "" && tempParams.message_sender !== "") {
        emailjs.send('service_hghihjq', 'template_bx29gpj', tempParams)
            .then(function(res) {
                console.log(`Email sent, ${tempParams}`);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Mail Sent Successfully!',
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
        document.getElementById("fromName").value = "";
        document.getElementById("emailSender").value = "";
        document.getElementById("subjectSender").value = "";
        message_sender: document.getElementById("message").value = "";
    }

}