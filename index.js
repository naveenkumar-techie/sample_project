document.addEventListener("DOMContentLoaded", (event) => {
    // const banner_divi=document.querySelector('.banner-divi')
    // banner animation
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".banner-divi .row-4 .banner-box", { opacity: 0, x: -500, duration: 1,delay:1.5 });
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".banner-divi .row-4 .banner-head", { opacity: 0, x: -500, duration: 1,delay:1.3 });
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".banner-divi .row-4 .banner-feed", { opacity: 0, x: -500, duration: 1,delay:1.1 });
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".banner-image-col", { opacity: 0, duration: 2,scale: 3,ease: "back.out(1.1)", delay:0});

    // Heading
    gsap.utils.toArray('.heading').forEach(heading => {
        gsap.fromTo(heading,{
            letterSpacing:'16px',
            opacity:0,
            x:300,
            skewX:65,
            stagger:0.5
        },{
            letterSpacing:'8px',
            opacity:1,
            x:0,
            skewX:0,
            duration:1,
            delay:.1,
            color:'#b08968',
            scrollTrigger:{
                trigger:heading,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                // markers:true,
            }
        })
    });

    gsap.utils.toArray('.sub-heading').forEach(sub_heading => {
        gsap.fromTo(sub_heading,{
            opacity:0,
            x:-300,
            skewX:65,
        },{
            opacity:1,
            x:0,
            skewX:0,
            duration:1,
            delay:.2,
            color:'#343a40',
            scrollTrigger:{
                trigger:sub_heading,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                // markers:true,
            }
        })
    });

    // Partners
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".partner-cols img:nth-child(1)", { 
        opacity: 0,
        x:1500,
        scale: 3,
        ease: "back.out(1.5)",
        duration: 1,
        scrollTrigger:{
            trigger:".partner-cols",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    });

    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".partner-cols img:nth-child(2),.partner-cols img:nth-child(3),.partner-cols img:nth-child(4)", { 
        opacity: 0,
        scale: 2,
        duration: 1,
        delay:1,
        ease: "bounce.in",
        scrollTrigger:{
            trigger:".partner-cols",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
        }
    });
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".partner-cols img:nth-child(5)", { 
        opacity: 0,
        x:-1500,
        scale: 3,
        ease: "back.out(1.5)",
        duration: 1,
        scrollTrigger:{
            trigger:".partner-cols",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    });

    // Destination
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".destination-arrow .btn", { 
        opacity: 1,
        x:-500,
        height:"0%",
        width:"0%",
        rotate:360,
        duration: 1,
        scrollTrigger:{
            trigger:".destination-arrow",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    });

    gsap.utils.toArray('.destination-card-row').forEach(destination_card_row => {
        gsap.fromTo(destination_card_row,{
            opacity:0,
            scale:.1
        },{
            opacity:1,
            scale:1,
            duration:1,
            delay:.2,
            scrollTrigger:{
                trigger:destination_card_row,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                // markers:true,
            }
        })
    });
    
    // Features
    const features_colm_row = document.querySelector('.features-colm-row');
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(features_colm_row.children,{
        opacity: 0,
        y:50,
        // scale: 1.2,
    }, { 
        opacity: 1,
        // scale: 1,
        y:0,
        stagger: 0.5,
        delay:0,
        duration: 2,
        scrollTrigger:{
            trigger:features_colm_row,
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    });
});