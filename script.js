const modal = document.getElementById("modal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Add the class
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Remove the class
}

// Event listener to close the modal when clicking outside on desktop
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// // Event listener to close the modal on mobile by tapping outside on mobile
// window.addEventListener("touchstart", function(event) {
//     if (event.target === modal) {
//         closeModal();
//     }
// });
