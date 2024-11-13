document.addEventListener('DOMContentLoaded', () => {
  const topBar = document.querySelector('#top-bar');
  const exteriorColorSection = document.querySelector('#exterior-buttons');
  const interiorColorSection = document.querySelector('#interior-buttons');
  const exteriorImage = document.querySelector('#exterior-image');
  const interiorImage = document.querySelector('#interior-image');

  // Handle Top Bar On Scrolls
  const handleScroll = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar', atTop);
    topBar.classList.toggle('hidden-bar', !atTop);
  };

  // Handle Color Section
  const handleColorButtonClick = (event) => {
    let button;

    // console.log(event.target.tagName);
    if (event.target.tagName === 'IMG') {
      button = event.target.closest('button');
    } else if (event.tagName === 'BUTTON') {
      button = event.target;
    }

    if (button) {
      const buttons = event.currentTarget.querySelectorAll('button');
      buttons.forEach((btn) => btn.classList.remove('btn-selected'));
      button.classList.add('btn-selected');
    }
  };

  // Event Listeners
  window.addEventListener('scroll', () => requestAnimationFrame(handleScroll));
  exteriorColorSection.addEventListener('click', handleColorButtonClick);
  interiorColorSection.addEventListener('click', handleColorButtonClick);
});
