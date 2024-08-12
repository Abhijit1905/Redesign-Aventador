let t6=gsap.timeline();
t6
.from(
    ".mainlogo",
    {
        x:"230%",
        opacity:0.5,
        duration:4,
        ease:'power2.In',
        
    }
)
.from(
    '.logotext',
    {
        x:'-20%',
        duration:2,
       
    },
    0.25
)
.from(
    '.logotextp',
    {
        opacity:0,
        duration:3.5,
        stagger:{
            from:"end",
            each:0.1
        },
       
    },
    0.25
)
.from(
    ".line",
    {
       opacity:0,
       duration:1
    },
    4
)