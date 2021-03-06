const parallax = document.querySelector(".parallax")
const layers = parallax.children;

function moveLayersDependOnScroll(wScroll) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 8

        layer.style.transform = `translateY(-${strafe}%)`
    })
}

window.addEventListener("scroll", e => {
    const wScroll = window.pageYOffset;
    moveLayersDependOnScroll(wScroll)
})