const images = document.querySelectorAll('[data-src]');
const bges = document.querySelectorAll('.testi-img');
const imgOptions = {
    threshold: 0.1,
    margin: `0.1em 0`
}
const preloadImage = (img) => {
    const src = img.getAttribute("data-src");
    if (!src) {
        img.style.backgroundImage = `url("/assets/img/landing-bg.png")`;
        img.firstElementChild.classList.add('img--floating');
        return;
    }
    img.src = src
}

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})

bges.forEach(bg => {
    imgObserver.observe(bg)
})