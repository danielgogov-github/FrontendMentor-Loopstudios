let navigation = document.querySelector('.navigation');
let navigationOverlay = navigation.querySelector('.navigation__overlay');
let navigationOverlayOpen = navigation.querySelector('[data-overlay-open]');
let navigationOverlayClose = navigation.querySelector('[data-overlay-close]');

navigationOverlayOpen.addEventListener('click', (event) => {
    event.preventDefault();
    navigationOverlay.style.width = '100%';
});
navigationOverlayClose.addEventListener('click', (event) => {
    event.preventDefault();
    navigationOverlay.style.width = '0%';
});
