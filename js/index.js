// 1
const nav = document.querySelectorAll(".nav-link");
nav.forEach(el => {
    el.addEventListener("click", () => {
        el.style.color = "green";
    });
});

//2
const logo = document.querySelector('.logo-heading');
logo.addEventListener("dblclick", (event) => {
    logo.textContent = "New value";
    event.stopPropagation();
});

//3
const img = document.querySelector('.intro img');
img.addEventListener("mouseover", (event) => {
    img.src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/780593/cat-lambda.png"
    event.preventDefault();
});

//4

const h2 = document.querySelector('.intro h2');
h2.addEventListener("keydown", () => {
    h2.style.backgroundColor = 'blue';
});

//5
const p = document.querySelector('.intro p');
p.addEventListener("wheel", () => {
   p.style.fontSize = '60%';   
});

//6
const imgContent = document.querySelector('.img-content img');
imgContent.addEventListener("drag", (e) => {
    TweenMax.to(e.target, 2, { width: "200px", height: "150px" });
});
//7

const textContent = document.querySelectorAll('.text-content');
textContent.forEach((e) => {
    e.addEventListener('load', (e) => {
        TweenMax.to(e.target, 2, { backgroundColor: "#ff0000", width: "50%", top: "100px", ease: Power2.easeInOut });
    });
});

//8
const contentH2 = document.querySelector('.content-destination h2');
contentH2.addEventListener("focus", (e) => {
    TweenMax.to(e.target, 2, { boxShadow: "0px 0px 20px red", color: "#FC0" });
});
//9
const contentImg = document.querySelector('.content-destination img');
contentImg.addEventListener("select", (e) => {
    TweenMax.to(e.target, 1, { opacity: 0.5, rotation: 45 });
});

//10
const destination = document.querySelectorAll('.destination h4');
destination.forEach((e) => {
    e.addEventListener('click', (e) => {
        TweenMax.to(e.target, 1, { opacity: 0, ease: Back.easeOut, useFrames: true });
    });
});