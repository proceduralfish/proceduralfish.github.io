

// Function to open the modal
function openModal(modalProjectID) {
    const modal = document.getElementById(modalProjectID);
    modal.style.display = "block";

    document.body.classList.add("modal-open"); // Add the class

    window.currentModal = modal;
}

// Function to close the modal
function closeModal() {

    if (window.currentModal) {
        window.currentModal.style.display = "none";
        document.body.classList.remove("modal-open"); // Remove the class
    }


}

// Event listener to close the modal when clicking outside on desktop
window.addEventListener("click", function (event) {
    if (window.currentModal && event.target === window.currentModal) {
        closeModal();
    }
});

// Event listener to close the modal on mobile by tapping outside on mobile
window.addEventListener("touchstart", function(event) {
    if (window.currentModal && event.target === window.currentModal) {
        closeModal();
    }
});
