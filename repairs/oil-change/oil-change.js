let popup = document.getElementById('warning-text-popup');
let container = document.getElementById('container');

// Automatically show popup and block background on page load
window.onload = () => {
    popup.classList.add('open-popup');
    container.classList.add('blocked');
    document.body.classList.add('no-scroll');
};

// Open the popup manually (button functionality)
function openPopup() {
    if (popup.classList.contains('open-popup')) {
        closePopup();
        return;
    }
    popup.classList.add('open-popup');
    container.classList.add('blocked');
    document.body.classList.add('no-scroll');
}

// Close the popup and unblock the background
function closePopup() {
    popup.classList.remove('open-popup');
    container.classList.remove('blocked');
    document.body.classList.remove('no-scroll');
}

function addHoverEffect() {
    const warningContainer = document.querySelector('.warning-container');
    warningContainer.classList.add('hovered');
  }
  
  function removeHoverEffect() {
    const warningContainer = document.querySelector('.warning-container');
    warningContainer.classList.remove('hovered');
  }
  