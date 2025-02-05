"use strict";
let click = 1, angle = 0;
let tl = gsap.timeline();
document.addEventListener("click", function (e) {
        angle += 360;
        if (click == 1) {
                click = 2;
                tl.to(".block", {
                        duration: 6, rotateZ: angle, x: 1920, ease: "back.inOut(6)",
                        stagger: { amount: 2.5, grid: "auto", from: "end" }
                })
        } else {
                click = 1;
                tl.to(".block", {
                        duration: 6, x: 0, ease: "back.inOut(7)",
                        stagger: { amount: 1.5, grid: "auto", from: "centre" }
                })
        }
})

