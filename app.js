document.addEventListener('DOMContentLoaded', function() {
  const sliderItems = document.querySelectorAll('#photos .slider-item');
  const fullImageOverlay = document.querySelector('#photos .full-image-overlay');
  const fullImage = document.querySelector('#photos .full-image-overlay img');

  sliderItems.forEach((item) => {
    item.addEventListener('click', function() {
      const imageSrc = this.querySelector('img').getAttribute('src');
      fullImage.src = imageSrc;
      fullImageOverlay.classList.add('active'); // Add the 'active' class to display the overlay
    });
  });

  fullImageOverlay.addEventListener('click', function(e) {
    if (e.target === fullImageOverlay) {
      fullImageOverlay.classList.remove('active'); // Remove the 'active' class to hide the overlay
    }
  });
});

