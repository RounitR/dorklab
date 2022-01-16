let tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 3
});


tl.fromTo('.js-code-line', {
    scaleX: 0,
    transformOrigin: 'left center'
}, {
    scaleX: 1,
    transformOrigin: 'left center',
    duration: 0.15,
    stagger: 0.1
});


tl.from('.js-layout-frame', {
    y: '+=20',
    opacity: 0,
    duration: 0.3,
    ease: 'power1.out'
});


tl.from('.js-layout-els > *', {
    opacity: 0,
    duration: 0.3,
    stagger: 0.1
});