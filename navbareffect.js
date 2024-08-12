const marque = document.querySelector(".merque");

let tween;
function play() {
    let progress = tween ? tween.progress : 0;
    tween && tween.progress(0).kill();
    const width = parseFloat(getComputedStyle(marque).getPropertyValue("width"));
    console.log(width);
    const distance = -1 * (width + 50);
    console.log(distance);
    tween = gsap.fromTo(marque.children,
        { x: 0 },
        {
            x: distance,
            duration: 40,
            repeat: -1,
            ease: "none"
        });
    tween.progress(progress);
}
play();
window.addEventListener("resize", play);
const t1=gsap.timeline();
t1.to(".bigintro",
    {
        duration:1,
        ease:"none",
        opacity:1,
        delay:0,
    }
)
t1.to(".midintro",
    {
        duration:1.5,
        ease:"none",
        opacity:1,
        delay:0,
    }
)
t1.to(".lastintro",
    {
        duration:1,
        ease:"none",
        opacity:1,
        delay:0,
    }
)