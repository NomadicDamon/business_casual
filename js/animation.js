window.addEventListener('DOMContentLoaded', function(){
    animatedSectionCheck();
});
function throttle(func, wait = 100) {
    let timer = null;
    return function(...args) {
if (timer === null) {
timer = setTimeout(() => {
    func.apply(this, args);
    timer = null;
}, wait); 
}
    };
}
window.onscroll = throttle(animatedSectionCheck, 60);
function animatedSectionCheck(){
    let animatedSection = document.getElementsByClassName('animateme') 
    let scrollPos = window.pageYOffset;
    let WindowHgt = (window.innerHeight * .9);
    for (i = 0; i < animatedSection.length; i++) {
let elementPos = animatedSection[i].offsetTop;
if(scrollPos > (elementPos - WindowHgt)) {
    animatedSection[i].classList.add("animatedEnter");
}
else {
    animatedSection[i].classList.remove("animatedEnter");
}
    }
}