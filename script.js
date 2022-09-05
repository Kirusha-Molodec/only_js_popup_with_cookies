// All resources
    
let link = 'https://www.google.com/',
imgSrc = '/cat.png', //Image Here
title = 'Title',
subtitle = 'Subtitle',
description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
BtnText = 'Button',
delay = 1000,
isCookie = false,
cookieTime = 5;

/*Cookie*/ 
var date = new Date;
date.setDate(date.getDate());
date.setHours(date.getHours() + cookieTime);
date = date.toUTCString();

function getCookie(name) {
var value = "; " + document.cookie;
var parts = value.split("; " + name + "=");
if (parts.length == 2) return parts.pop().split(";").shift();
}



if (isCookie) {
if (getCookie('popup') !== 'aviable'){    
        popupBuilder();
        document.cookie = 'popup=aviable; path=/; expires= '  + date ;  
} 
} else {
popupBuilder();
}

function popupBuilder(){
setTimeout(() => {

// Creating DOM

let popup = document.createElement('div'),
modal = document.createElement('div'),
modalImg = document.createElement('img');
bonusModalTitle = document.createElement('div'),
bonusModalPercent = document.createElement('div'),
bonusModalSubtitle = document.createElement('div'),
bonusModalButton = document.createElement('button');

modalImg.setAttribute('id', 'anim');

// Styles 

popup.style.cssText = 'width:100%;height:100vh;left:0;top:0;position:fixed;display:flex;background:rgba(9,15,30,0.9);z-index:999;';
modal.style.cssText = 'height:340px;position:relative;width:388px;background:#fff;margin:auto;z-index:999;box-sizing:border-box;padding:20px 19px;border-radius:16px;-webkit-box-shadow:0 4px 40px 0 #000;box-shadow:0 4px 40px 0 #000';
modalImg.style.cssText = 'position:absolute;height:150px;right:19px;top:0px;width:150px;z-index:888;opacity:0;transition:1s;';
bonusModalTitle.style.cssText = 'color:#090f1e;font-size:40px;font-weight:700;letter-spacing:-1.2px;margin-top:20px';
bonusModalPercent.style.cssText = 'font-weight:900;color:#f3d015;font-size:60px';
bonusModalSubtitle.style.cssText = 'color:#070c19;font-size:16px;line-height:1.4;margin:15px 0';
bonusModalButton.style.cssText = 'align-items:center;background-image:linear-gradient(88.72deg,#6a16df,#c773ff);border-radius:10px;box-shadow:0 6px 22px 0 #6c18e04d;cursor:pointer;display:-ms-flexbox;display:flex;font-size:20px;font-weight:600;height:45px;justify-content:center;letter-spacing:-.34px;line-height:1.25;margin-top:auto;width:100%;z-index:10;color:#fff;border:none;transition:opacity .2s linear;';

// Mobile styles

const mediaQuery = window.matchMedia('(max-width: 431px)');
if (mediaQuery.matches) {
 modalImg.style.width = '50%';
 modalImg.style.height = '50%';
}


// Сombine data into tags

modalImg.src = imgSrc;
bonusModalTitle.innerHTML = title;
bonusModalPercent.innerHTML = subtitle;
bonusModalSubtitle.innerHTML = description;
bonusModalButton.innerHTML = BtnText;

// Render popup in body

document.querySelector('html').style.setProperty('overflow',
'hidden', 'important');
document.body.appendChild(popup);
popup.appendChild(modal);
modal.appendChild(modalImg);
modal.innerHTML += '<svg id="popupClose" style="cursor:pointer;float:right;width:1em;height:1em;font-size:1rem;z-index:9999;position:relative" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" role="img"><g fill="#99A2AD"><path d="M9.5.5a.707.707 0 00-1 0L5 4l-.293.293a1 1 0 000 1.414L5 6l3.5 3.5a.707.707 0 001-1L6 5l3.5-3.5a.707.707 0 000-1z"></path><path d="M5.5.5a.707.707 0 00-1 0L1 4l-.293.293a1 1 0 000 1.414L1 6l3.5 3.5a.707.707 0 001-1L2 5l3.5-3.5a.707.707 0 000-1z"></path></g></svg>';
modal.appendChild(bonusModalTitle);
modal.appendChild(bonusModalPercent);
modal.appendChild(bonusModalSubtitle);
modal.appendChild(bonusModalButton);

// Image animation

const anim = document.getElementById('anim');
function animDelay() {
    anim.style.opacity = '1';
    anim.style.top = '-40px';
}
setTimeout(animDelay, 500);



// Hover on btn

bonusModalButton.addEventListener('mouseenter', () => {
bonusModalButton.style.opacity = '.7';
});
bonusModalButton.addEventListener('mouseleave', () => {
bonusModalButton.style.opacity = 'unset';
});
// Closing popup

let popupClose = document.getElementById('popupClose');
document.addEventListener('click', (e) => {
if (e.target !== modal && !modal.contains(e.target) || popupClose.contains(e.target)) {
    popup.remove();
    document.querySelector('html').style.overflow = "auto";  
}
});
// Click on popup

modal.addEventListener('click', (e) => {
if (!popupClose.contains(e.target))
window.open(link);
popup.remove();
document.querySelector('html').style.overflow = "auto";  
})


}, delay);
}