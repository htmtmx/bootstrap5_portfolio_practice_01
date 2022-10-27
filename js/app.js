const images = document.querySelectorAll('.container-img');
const modalImage = document.getElementById("modal-image");

images.forEach(image => {
  image.addEventListener('click', () => {
    const src = image.querySelector('img').src;
    modalImage.src = src;
    })
})
