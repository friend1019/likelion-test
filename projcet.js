
document.addEventListener('DOMContentLoaded',function(){
    const images = ['./img/img1.png', './img/img2.png', './img/img3.png', './img/img4.png'];
    let currentIndex = 0;

    const imageElement = document.getElementById('slider-image');
    const counterElement = document.getElementById('image-counter');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function updatedSlider() {
        imageElement.src = images[currentIndex];
        counterElement.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updatedSlider();
    })

    nextBtn.addEventListener('click',() => {
        currentIndex = (currentIndex + 1) % images.length;
        updatedSlider();
    });

    updatedSlider();
})