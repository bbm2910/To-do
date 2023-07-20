import taskManager from "./taskManager.js"; 
export default function addTask() {
    const addButton = document.querySelector(".btn-submit");

    addButton.addEventListener("click", (event) => {
        event.preventDefault();

        const title = document.getElementById("todoInput").value;
        const dueDate = document.getElementById("todoDate").value;
        const todoPriority = document.getElementById("todoPriority").value;

        // Use the function from the taskManager module to add the book to the library
        taskManager.addBookToLibrary(title, dueDate, todoPriority);

        document.getElementById("todoInput").value = "";

        overlay.style.display = "none";

    });
    taskManager.addBookToLibrary("Meet all the dogs in the world", "2023-07-18", "High");
    taskManager.addBookToLibrary("Finish the project", "2023-07-22", "High");

}