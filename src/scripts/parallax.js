const parallax = document.querySelector(".parallax")
const layers = parallax.children;



function parallaxPromo(wScroll) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 8

        layer.style.transform = `translateY(-${strafe}%)`
    })
}

window.addEventListener("scroll", e => {
    var nowScroll = window.pageYOffset;
    // if (nowScroll < 800) {}
    const wScroll = window.pageYOffset;
    parallaxPromo(wScroll)

})