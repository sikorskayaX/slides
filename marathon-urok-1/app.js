function pligunSlides(num){
    
    const slides = document.querySelectorAll('.slide')

    for (const slide of slides){
        slide.addEventListener('click', () => {
            clearActiveClasses()
            slide.classList.add('active')
        })
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
    }

    slides[num].classList.add('active')
}

pligunSlides(3);
