// gsap.to("div",{
//    x:500,
//    y:100,
//    delay:1,
//    duration:2,
//    rotate:360,
//    backgroundColor:"blue",
//    borderRadius:"50%",
//    scale:2,
//    repeat:1 //-1 
// // yoyo:true
// })

// gsap.from("h1",{
//     x:0,
//     y:20,
//     opacity:0,
//     duration:1,
//     delay:1,
//     stagger:1  //-1(ulta)
    // scrollTrigger:{
    //     trigger:"h1",
    //     scroller:"body",
    //     // markers:true,
    //     start:"top 50%",
    //     end: "top 10%",
    //     scrub:true //2(very smooth)1-5
    // }
    // scale:0.1
//})

// var tl=gsap.timeline()
// tl.from() or t1.to()
//in a sequence of time it executes use tl instead of gsap
//white-space:nowrap --> is used to remove wrapping of text
//overflow :hidden removes scrolling

// GSAP ScrollTrigger Animation
gsap.to(".a p", {
    transform: "translateX(-140%)",
    scrollTrigger: {
        trigger: ".a",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true
    }
});

// Select the element with class "b" and the cursor
let a = document.getElementsByClassName("b")[0];
let b = document.getElementsByClassName("cursor")[0];

// Use 'mousemove' for continuous tracking
a.addEventListener("mousemove", function (dets) {
    gsap.to(b, {
        x: dets.pageX, // Mouse position relative to the page
        y: dets.pageY,
        duration: 0.05, // Faster movement
        ease: "power1.out"
    });
});

// Select the elements for menu and close
let close = document.getElementsByClassName("ri-close-line")[0];
let menu = document.getElementsByClassName("ri-menu-line")[0];
let nav = document.querySelector(".nav");
let full = document.querySelector(".full");

// Create a GSAP timeline for menu animation
var tl = gsap.timeline({ paused: true });

// Animate the navigation menu
tl.to(".nav", {
    right: 0, // Slide the menu into view
    duration: 0.3,
    ease: "power2.out"
});

// Animate the full content (menu items)
tl.from("h1", {
    x:300,
    duration: 0.3,
    stagger: 0.1, // Add delay between each item
    opacity:0,
    ease: "power1.out"
});

// Animate the close button's appearance
tl.from(".ri-close-line", {
    opacity: 0
});

// Add event listeners to menu and close icons
menu.addEventListener("click", function () {
    tl.play(); // Play the timeline to show the menu
});

close.addEventListener("click", function () {
    tl.reverse(); // Reverse the timeline to hide the menu
});