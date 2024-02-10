const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nave_menu");
const contectBtns = document.querySelector('.contectBtn');

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    contectBtns.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    contectBtns.classList.toggle("active");
}))


// -- here is background text effect code --
let mouseFollowText = document.querySelector('#background-text');
let mouse_courser = document.querySelector('.mouse_trin');

window.onmousemove = (details) => {
    let xAxis = details.clientX / 50;
    let yAxis = details.clientY / 30;
    let X_axis = details.clientX;
    let Y_axis = details.clientY;
    mouseFollowText.style.transform = `translate(${xAxis}%,${yAxis}%)`;
    mouse_courser.style.transform = `translate(${X_axis}px,${Y_axis}px)`
}

//  -- here is hello word code --
let letters = "abcdefghijklmnopqrestuvwxyz";

let interval = null;
let changeText = document.querySelector('.letterchange');
changeText.onmouseover = (event) => { texthacktoggle(event) };


function texthacktoggle(event) {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
            .split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.value[index];
                }

                return letters[Math.floor(Math.random() * 26)]
            })
            .join("");

        if (iteration >= event.target.dataset.value.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 40);
}

// -- here is horizonte row code here --
let aboutpage = document.querySelector('.about-page');

let horizonteRuler = document.querySelectorAll('hr');
let varticalRuler = document.querySelector('.about-varticalruler');
window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    let scrolledPercentage = (scrollTop / (scrollHeight - window.innerHeight)) * 100;

    // Set the width of the <hr> based on the scrolled percentage
    horizonteRuler.forEach((ele) => {
        ele.style.width = `${scrolledPercentage}%`
    });
    varticalRuler.style.height = `${scrolledPercentage * 2}%`;
});

// -- here is about page card effects -- 

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
        else {
            entry.target.classList.remove('show')
        }
    })
})

let abotuCards = document.querySelectorAll('.cards');
abotuCards.forEach((el) => observer.observe(el));

let otherobserver = new IntersectionObserver((ente) => {
    ente.forEach((entr) => {
        if (entr.isIntersecting) {
            entr.target.classList.add('linkshow')
        }
        else {
            entr.target.classList.remove('linkshow')
        }
    })
})
let linkIcons = document.querySelectorAll('.links');
linkIcons.forEach((ele) => otherobserver.observe(ele))

// -- here is project page js script --

let showBtn = document.querySelector('.show_all');

showBtn.onclick = () => {
    let allCards = document.querySelectorAll('.main-card');
    let allCardsImg = document.querySelectorAll('.card_img ');

    for (var i = 0; i < allCards.length; i++) {
        allCards[i].style.height = "35vh";
    }

    for (var i = 0; i < allCardsImg.length; i++) {
        allCardsImg[i].style.opacity = '1';
    }

    setTimeout(function () {
        for (var i = 0; i < allCards.length; i++) {
            allCards[i].style.height = '4vh';
            allCardsImg[i].style.opacity = '0';
            setTimeout(() => {
                location.reload()
            }, 2000);
        }
    }, 5000);


}


let form = document.querySelector('form');
let Name = document.querySelector('#Name');
let Mail = document.querySelector('#Mail');
let phoneno = document.querySelector('#PhoneNo')
let Msagess = document.querySelector('#Msagess')



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const msgBody = `Name:${Name.value},<br> Phone No:${phoneno.value},<br> Email:${Mail.value},<br>Message:${Msagess.value}`;
    checkInputtext();
    if (!Name.classList.contains('error') && !Mail.classList.contains('error') && !phoneno.classList.contains('error') && !Msagess.classList.contains('error')) {
        console.log("mail sending")
        Email.send({
            Host: "smtp.gmail.com",
            Username: "ersajan123@gmail.com",
            Password: "jxjxemmgyycsbamh",
            To: [${Mail.value}],
            From: "ersajan123@gmail.com",
            Subject: "Your porfolio message",
            Body: msgBody
        }).then(
            message => {
                if (message == "OK") {
                    Swal.fire({
                        title: "Success!",
                        text: "Message sent SeccessFully!",
                        icon: "success"
                    });
                }
            }
        )
        form.reset();

        return false;
    }
})

// function sentEmail(msgBody) {
    
// }


function checkInputtext() {
    const allInputePart = document.querySelectorAll('.inputItem');

    for (const item of allInputePart) {
        if (item.value == "") {
            item.classList.add('error')
            item.parentElement.classList.add('error');
        }


        item.addEventListener('keyup', () => {
            if (item.value != "") {
                item.classList.remove('error');
                item.parentElement.classList.remove('error');
            }
            else {
                item.classList.add('error');
                item.parentElement.classList.add('error');
            }
        })

    }

}

function validatePhoneNumber(input) {
    input.value = input.value.replace(/\D/g, '');

    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10);
    }
}
