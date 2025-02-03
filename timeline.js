let tl = gsap.timeline({

        defaults: {
            duration: 3,
            easing: 'power1.inOut', yoyo: true, repeat: -1,
        },
})


tl.to('#cr1', { x: 500 }, '')
tl.to('#cr2', { x: 461.94, y: -191.64 }, '')
tl.to('#cr3', { x:  353.55, y: -353.55 }, '')
tl.to('#cr4', { x: 191.34, y: -461.94 }, '')
tl.to('#cr5', { y: -500 }, '')
tl.to('#cr6', { x: -191.35, y: -461.94 }, '')
tl.to('#cr7', { x: -353.55, y: -353.56}, '')
tl.to('#cr8', { x: -461.94 , y: -191.34}, '')