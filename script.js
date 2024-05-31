function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal')

    for(var i = 0; i <reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}

const myText = new SplitType('.name');
gsap.to('.char',{
    y: 0,
    stagger: 0.05,   //Offset 
    delay: 0.2,
    duratio: .1
})