export default function createForm() {
    const addTask = document.querySelector(".new-task");
    const closeFormButton = document.getElementById("closeFormBtn");

    addTask.addEventListener("click", openForm);
    closeFormButton.addEventListener("click", closeForm);

    function openForm() {
        overlay.style.display = "block";
    }

    function closeForm() {
        overlay.style.display = "none";
    }
}