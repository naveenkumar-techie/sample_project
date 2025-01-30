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
    gsap.from(".banner-image-col", { opacity: 0,y:-1000, duration: 2,ease: "bounce.out",rotateX:90, delay:0});
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".banner-box img", { opacity: 0, duration: 1,rotateY:90, delay:2.5});
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".banner-box p", { opacity: 0, duration: 2,rotateX:90, delay:0});
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".banner-box p", {color:'#b08968'});
    gsap.fromTo(".banner-head span",{
        opacity:0,
    },{
        opacity:1,
        duration:1,
        delay:.1,
        color:'#b08968',
        ease: "power1.inOut"
    })

    // Heading
    gsap.utils.toArray('.heading').forEach(heading => {
        gsap.fromTo(heading,{
            opacity:0,
            y:-10,
            // stagger:0.5
        },{
            opacity:1,
            y:0,
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
            y:10,
            // stagger:0.5
        },{
            opacity:1,
            y:0,
            duration:1,
            delay:.1,
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
        duration: 5,
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
        duration: 5,
        delay:1,
        // ease: "bounce.in",
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
        duration: 5,
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
        opacity: 0,
        x:-300,
        height:"0%",
        width:"0%",
        rotate:360,
        duration: 1,
        scrollTrigger:{
            trigger:".destination-row .sub-heading",
            start: "top 80%",
            end: "top 40%",
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
                start: "top 90%",
                end: "top 40%",
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
        stagger: 0.8,
        delay:0,
        duration: 2,
        scrollTrigger:{
            trigger:features_colm_row,
            start: "top 50%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    });

    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".features-image", { 
        opacity: 0,
        y:100,
        scale: 1.2,
        scrollTrigger:{
            trigger:".features-row",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    });

    var features_split = new SplitType("#features-para", { type: "chars" });
    gsap.fromTo("#features-para .char",{
        opacity:0,
        y:20,
        
    },{
        opacity: 1,
        y:0,
        stagger:0.9,
        delay:1,
        duration:1,
        scrollTrigger:{
            trigger:".features-row",
            start: "top 40%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    })

    // Text animation
    
    var banner_split = new SplitType("#banner-para", { type: "chars" });
    gsap.fromTo("#banner-para .char",{
        // opacity:0,
        rotateX:360,
        // y:20,
    },{
        // opacity: 1,
        rotateX:0,
        // y:0,
        stagger:0.1,
        delay:.7,
        duration:.5,
        scrollTrigger:{
            trigger:".travel-aside",
            start: "top 60%",
            end: "top 30%",
            scrub: true,
            // markers:true,
        }
    })

    // Navbar
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".navbrand img", { opacity: 0, x: -200,rotate:540, duration: 1,delay:.2 });

    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".navbrand p", { opacity: 0, x: -100, duration: 1,delay:.4, letterSpacing:"8px" });
    
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".navlist li", { opacity: 0, y: -200, duration: 1,delay:.6, stagger:0.05 });

    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".navbtn button", { opacity: 0, x: 200, duration: 1,delay:.8, stagger:0.05 });

    // Travel point
    gsap.registerPlugin(ScrollTrigger)
    gsap.from(".travel-group-img", { 
        opacity: 0,
        y:100,
        height:"0%",
        rotateX:90,
        duration: 1,
        delay:.1,
        scrollTrigger:{
            trigger:".travel-row",
            start: "top 90%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    });

    gsap.fromTo("#client-card-1",{
        opacity:0,
        x:110,
        y:90
    },{
        x:0,
        y:0,
        opacity: 1,
        // delay:.1,
        duration:.1,
        scrollTrigger:{
            trigger:"#client-card-1",
            start: "top 80%",
            end: "top 60%",
            scrub: true,
            // markers:true,
        }
    })

    gsap.fromTo("#client-card-2",{
        opacity:0,
        x:-220,
    },{
        opacity: 1,
        x:0,
        // delay:1.1,
        duration:1,
        scrollTrigger:{
            trigger:"#client-card-4",
            start: "top 60%",
            end: "top 40%",
            scrub: true,
            // markers:true,
        }
    })

    gsap.fromTo("#client-card-3",{
        opacity:0,
        y:-180,
    },{
        opacity: 1,
        y:0,
        // delay:2.1,
        duration:1,
        scrollTrigger:{
            trigger:"#client-card-4",
            start: "top 40%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    })

    gsap.fromTo("#client-card-4",{
        opacity:0,
        x:-220,
        y:-180,
    },{
        opacity: 1,
        y:0,
        x:0,
        // delay:3.1,
        duration:1,
        scrollTrigger:{
            trigger:"#client-card-4",
            start: "top 30%",
            end: "top 10%",
            scrub: true,
            // markers:true,
        }
    })

    //services
    gsap.utils.toArray('.service-card img').forEach(service_img => {
        gsap.fromTo(service_img,{
            opacity: 0,
            rotate:180,
            
        },{
            opacity: 1,
            rotate:0,
            duration: 1,
            delay:.2,
            scrollTrigger:{
                trigger:".services-row",
                start: "top 60%",
                end: "top 20%",
                scrub: true,
                // markers:true,
            }
        })
    });

    gsap.utils.toArray('.service-card-body').forEach(service_body => {
        gsap.fromTo(service_body,{
            opacity: 0,
            y: 100,
            
        },{
            opacity: 1,
            y: 0,
            duration: 1,
            delay:.3,
            scrollTrigger:{
                trigger:".services-row",
                start: "top 60%",
                end: "top 20%",
                scrub: true,
                // markers:true,
            }
        })
    });

    // Testimonials
    gsap.utils.toArray('.rating-icons').forEach(rating_icons => {
        gsap.fromTo(rating_icons.children,{
            opacity: 0,
            x:50,
            scale: 1.5,
        }, { 
            opacity: 1,
            scale: 1,
            x:0,
            stagger: 0.8,
            delay:0,
            duration: 2,
            scrollTrigger:{
                trigger:rating_icons,
                start: "top 70%",
                end: "top 20%",
                scrub: true,
                // markers:true,
            }
        });
    });

    gsap.utils.toArray('.testimonials-heading h5').forEach(testimonial_heading => {
        gsap.fromTo(testimonial_heading,{
            opacity: 0,
        }, { 
            opacity: 1,
            duration: 1,
            scrollTrigger:{
                trigger:testimonial_heading,
                start: "top 80%",
                end: "top 20%",
                scrub: true,
                // markers:true,
            }
        });
    });

    // Contact
    gsap.fromTo(".contact-design",{
        opacity:0,
        y:70,
        x:40,
        zIndex: -1
    },{
        opacity: 1,
        zIndex: 1,
        y:0,
        x:0,
        // delay:2.1,
        duration:1,
        scrollTrigger:{
            trigger:".contact-section",
            start: "top 80%",
            end: "top 20%",
            scrub: true,
            // markers:true,
        }
    })

    let input = document.getElementById("emailInput");
    let img = document.getElementById("emailIcon");

        input.addEventListener("focus", function () {
            gsap.to(img, { rotationX: 360, duration: 0.5, ease: "power2.out" });
        });
        input.addEventListener("blur", function () {
            gsap.to(img, { rotationX: 0, duration: 0.5, ease: "power2.out" });
        });

    // footer
    gsap.fromTo(".footer-row",{
        opacity:0,
        y:-440,
    },{
        opacity: 1,
        y:0,
        duration:1,
        scrollTrigger:{
            trigger:".footer-row",
            start: "top 85%",
            end: "top 30%",
            scrub: true,
            // markers:true,
        }
    })

    
});