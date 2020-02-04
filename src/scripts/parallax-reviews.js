function parallaxMouse(event) {
    this.querySelectorAll(".parallax-reviews__layer").forEach(layer => {
        let speed = layer.getAttribute("data-speed");
        layer.style.transform = `translateY(${event.clientY*speed/1000}px)`;
    })

}

document.addEventListener("mousemove", parallaxMouse);