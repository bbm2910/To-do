export default function allTasks() {
    const allTasksBtn = document.querySelector(".all-task-btn");
    allTasksBtn.addEventListener("click", showAllTasks);

    function showAllTasks() {
        const todayDate = new Date().toISOString().slice(0, 10);

        const rows = document.querySelectorAll(".tb-tasks tr.new-row-class");
        rows.forEach((row) => {
            row.removeAttribute("hidden");
        });
    }
}