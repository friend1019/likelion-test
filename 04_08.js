document.addEventListener("DOMContentLoaded", function () {
    const images=['image/image_likelion.jpg','image/img2.jpg','image/img3.jpg','image/img4.jpg'];
    let currentIndex =0;

    const imageElement = document.getElementById('slider-image');
    const counterElement = document.getElementById('image-counter');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');    

    function updateSlider(){
        imageElement.src=images[currentIndex];
        counterElement.textContent=`${String(currentIndex+1).padStart(2,'0')}/${String(images.length).padStart(2,'0')}`;

    }

    prevBtn.addEventListener('click', () =>{
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    });

    nextBtn.addEventListener('click', () =>{
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    });

    updateSlider(); // 초기 이미지 및 카운터 업데이트

});