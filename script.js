function scroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


}
scroll()

function cursorEffect(){
    var page1content = document.querySelector(".page1-content")
var cursor = document.querySelector(".cursor")

page1content.addEventListener("mousemove",function(bets){
    gsap.to(".cursor",{
        x:bets.x,
        y:bets.y
    })
})

page1content.addEventListener("mouseenter",function(bets){
    gsap.to(".cursor",{
       scale:1,
       opacity:1
    })
})
page1content.addEventListener("mouseleave",function(bets){
    gsap.to(".cursor",{
        scale:0,
        opacity:0
    })
})
}
 cursorEffect()
function page2Animation(){
   
    gsap.from(".elem h1", {
        y: 130,
        stagger: 2,
        duration: 5,
        scrollTrigger:{
            trigger: ".page2",
            scroller: ".main",
            start: "top 40%",
            end: "top 18%",
            // markers: true,
            scrub: 2
      
        }
    })
}
page2Animation()
function page4Animation(){
   
    gsap.from(".elem1 h1", {
        y: 130,
        stagger: 2,
        duration: 5,
        scrollTrigger:{
            trigger: ".page4",
            scroller: ".main",
            start: "top 40%",
            end: "top 18%",
            // markers: true,
            scrub: 2
      
        }
    })
}
page4Animation()
function page6Animation(){
   
    gsap.from(".elem2 h1", {
        y: 130,
        stagger: 2,
        duration: 5,
        scrollTrigger:{
            trigger: ".page6",
            scroller: ".main",
            start: "top 40%",
            end: "top 18%",
            // markers: true,
            scrub: 2
      
        }
    })
}
page6Animation()

function moverEffect() {
    var page5 = document.querySelector(".page5");
    var mover = document.querySelector(".mover");
    var offset = 709;

    page5.addEventListener("mousemove", function(event) {
        gsap.to(".mover", {
            x: event.clientX - offset,
            y: event.clientY - offset,
            ease: "power2",
            duration: 0.5
        });
    });

    page5.addEventListener("mouseenter", function() {
        gsap.to(".mover", {
            scale: 1,
            opacity: 1,
            ease: "power2",
            duration: 0.5
        });
    });

    page5.addEventListener("mouseleave", function() {
        gsap.to(".mover", {
            scale: 0,
            opacity: 0,
            ease: "power2",
            duration: 0.5
        });
    });
}

moverEffect();

function swipe(){
    
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true,
        loop: true,
        smooth: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
      });
}
swipe();
// function page8Animation(){
   
//     gsap.from(".page8-top ul, h2", {
//         y: 130,
//         stagger: 2,
//         duration: 3,
//         scrollTrigger:{
//             trigger: ".page8",
//             scroller: ".main",
//             start: "top 20%",
//             end: "top 20%",
//             // markers: true,
//             scrub: 1
      
//         }
//     })
// }
// page8Animation()

var tl = gsap.timeline()
tl.from('.loader h3',{
    x:40,
    opacity:0,
    dusration:1,
    stagger:0.1
})
tl.to('.loader h3',{
    opacity:0,
    x:-10,
    stagger:0.1,
    duration:1
})
tl.to('.loader',{
    display:"none"
})
tl.from(".page1-content h1 span" ,{
    y:200,
    opacity:0,
    stagger:0.2,
    dusration:0.5
})
tl.from(".page8-top h1 span" ,{
    y:-200,
    opacity:0,
    stagger:0.2,
    dusration:0.5,
    delay:0.3
})