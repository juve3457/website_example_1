document.querySelectorAll('.product-slider').forEach(slider => {
  const track = slider.querySelector('.slider-track');
  const images = track.querySelectorAll('img');
  let index = 0;

  const nextBtn = slider.querySelector('.nav.next');
  const prevBtn = slider.querySelector('.nav.prev');

  function updateSlide() {
    const containerWidth = slider.querySelector('.slider-window').offsetWidth;
    const img = images[index];
    const imgWidth = img.offsetWidth;
    const offset = (containerWidth - imgWidth) / 2;
    track.style.transform = `translateX(${-img.offsetLeft + offset}px)`;
  }

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % images.length;
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    updateSlide();
  });

  window.addEventListener('resize', updateSlide);
  updateSlide();
});
