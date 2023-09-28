const modal = document.getElementById("modal");

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    document.body.classList.add("modal-open"); // Add the class
}

// Function to close the modal when clicking outside
function closeModal(event) {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.classList.remove("modal-open"); // Remove the class
    }
}


// Event listener to close the modal when clicking outside
window.addEventListener("click", closeModal);
