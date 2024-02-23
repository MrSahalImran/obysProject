var tl = gsap.timeline()
tl.from(".line h1", {
    y: 150,
    duration: .5,
    opacity: 0,
    stagger: 0.2,
    delay: 0.3
})
tl.to(".line h2", {
    // y: 150,
    // duration:.5,
    // opacity: 0,
    // stagger: 0.2,
    // delay: 0.3,
    opacity:1,
    animationName:"h2anime"
})
tl.from("#line-part1", {
    opacity: 0,
    onStart: function () {
        let h5timer = document.querySelector("#line-part1 h5");
        let counter = 0;
        let timer = setInterval(function () {
            counter++;
            if (counter < 10) {
                h5timer.textContent = '0' + counter;
            }
            else {
                h5timer.textContent = counter;
            }
            if (counter >= 100) {
                clearInterval(timer);
            }
        }, 30)
    }
})
tl.to("#loader", {
    opacity: 0,
    duration: .4,
    delay: 2.5
})
tl.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0
})
tl.to("#loader",{
    display:"none"
})