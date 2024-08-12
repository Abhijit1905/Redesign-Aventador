
let t3=gsap.timeline();
t3
.fromTo(
    "#features",
    {
        backgroundColor: "black",
    },
    {
        backgroundColor: "white",
        scrollTrigger:{
            trigger:"#features",
            start:"top center",
            end:'+20%',
           
            scrub:"2"
        }
    }
)
.from(
    ".heropic",
    {
        x:'100%',
        opacity:0.2,
        scrollTrigger:{
            trigger:".heropic",
            start:"top 72%",
            end:'0 10%',
           
            scrub:"2"
        }
    }
)
.to(
    ".tyre",
    {
        rotateZ:"-360deg",
        scrollTrigger:{
            trigger:".heropic",
            start:"top 72%",
            end:'0 10%',
           
            scrub:"1"
        }
        
    }
)
let t4=gsap.timeline();
t4
.from(
    ".engine"
    ,{
        opacity:0.2,
       x:'-70px',
       y:'-70px',
       scrollTrigger:{
        trigger:"#features",
        start:"top center",
        end:'+20% 10%',
       
        scrub:"2"
    }
    }
)
.from(
    ".body"
    ,{
        opacity:0.2,
       y:'-70px',
       scrollTrigger:{
        trigger:"#features",
        start:"top center",
        end:'+20% 10%',
       
        scrub:"2"
    }
    }
)
.from(
    ".wings"
    ,{
        opacity:0.2,
       x:'70px',
       y:'-70px',
       scrollTrigger:{
        trigger:"#features",
        start:"top center",
        end:'+20% 10%',
       
        scrub:"2"
    }
    }
)
.from(
    ".below"
    ,{
        opacity:0.2,
       y:'-70px',
       scrollTrigger:{
        trigger:"#features",
        start:"top center",
        end:'+20% 10%',
       
        scrub:"2"
    }
    }
)
