function loading(){
    var tl=gsap.timeline()

tl.to("#loader #yellow",{
    top:"-100%",
    duration:0.5
})
tl.to("#loader video",{
    top:"-100%",
    duration:0.5,
},"anim")
tl.from("#loader h1",{
    color:"white",
    delay:0.1
},"anim")
}
function image(){
    var elems=document.querySelectorAll(".container")
    var background=document.querySelector("#page-2")
    elems.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            var backimg=elem.getAttribute("img-url");
            background.style.backgroundImage=`url(${backimg})`
            h1tag.style.fontStyle="italic"
        })
    })
}

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
loading();
image();
