(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }
})();
var card = document.querySelector('.card');
card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
});