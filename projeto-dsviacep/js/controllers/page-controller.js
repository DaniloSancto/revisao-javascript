import * as modalController from './modal-controller.js'

export function init() {
    const contactLink = document.querySelector(".contact-link");
    contactLink.addEventListener('click', handleContactLink);

    console.log("page controller iniciado");
}

function handleContactLink(event) {
    event.preventDefault();
    modalController.showModal();

}