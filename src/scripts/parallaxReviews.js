function parallaxMouse(event) {
    this.querySelectorAll(".parallax-reviews__layer").forEach(layer => {
        let speed = layer.getAttribute("data-speed");
        layer.style.transform = `translateX(${event.clientX*speed/1000}px)`;
    })
}

document.addEventListener("mousemove", parallaxMouse);