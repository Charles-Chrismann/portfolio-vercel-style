import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        markers: true,
        trigger: "main", 
        pin: true,   // pin the trigger element while active
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "bottom bottom", // end after scrolling 500px beyond the start
        // end: "+=4000", 
        scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // snap: {
        //   snapTo: "labels", // snap to the closest label in the timeline
        // //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
        // //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
        //   ease: "power1.inOut", // the ease of the snap animation ("power3" by default)
        //     directional: false,
        // }
    }
})

// tl.to("main", {
//     scale: 0.5,
//     // xPercent: -100,
//     duration: 1,
// })

// tl.addLabel("Start")

tl.to(".me", {
    yPercent: -100,
    ease: "none",
})

tl.from(".myStacks", {
    yPercent: 100,
    ease: "none",
}, "<")
tl.set( {}, {delay: 0.1})
tl.from(".myStacks__stack--front", {
    xPercent: 100,
    ease: "none",
})
tl.from(".myStacks__stack--front .stack__container", {
    xPercent: -100,
    ease: "none",
}, "<")

// tl.set( {}, {}, "+=0" )
tl.to(".general", {
    // pin: true,
    marker: true,
    // xPercent: -100,
    scale: 0.5,
    // duration: 1,
    // duration: 100,
    
    onComplete() {
        console.log('fini')
    }
})


// tl.to("main", {
//     // scale: 0.5,
//     // yPercent: -50,
//     // xPercent: 100,
//     // duration: 10,
//     onComplete() {
//         console.log('fini 2')
//     }
// })

// tl.set( {}, {}, "+=100" )

// tl.set( {}, {}, "+=2000" )

// tl.to(".box1", {
//     // this is the vars object
//     // it contains properties to animate
    
//     x: 200,
//     rotation: 360,
//     // and special properties
//     // duration: 2
//   })

// .to(".box2", {
//   // this is the vars object
//   // it contains properties to animate
//   pin: true,
//   x: 200,
//   rotation: 360,
//   // and special properties
//   duration: 2
// })
// .to(".box3", {
//     // this is the vars object
//     // it contains properties to animate
//     x: 200,
//     rotation: 360,
//     // and special properties
//     duration: 2
// })

// gsap.to("main",{
//     // xPercent: -100,
//     scrollTrigger: {
//         markers: true,
//         trigger: "main", 
//         // pin: true,   // pin the trigger element while active
//         start: "top top", // when the top of the trigger hits the top of the viewport
//         end: "bottom bottom", // end after scrolling 500px beyond the start
//         scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//         // snap: {
//         //   snapTo: "labels", // snap to the closest label in the timeline
//         //   duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//         //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//         //   ease: "power1.inOut" // the ease of the snap animation ("power3" by default)
//         // }
//     }
// })