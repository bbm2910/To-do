export default function todayTasks() {
    const todayBtn = document.querySelector(".today-btn");
    todayBtn.addEventListener("click", showTodayTasks);

    function showTodayTasks() {
        const todayDate = new Date().toISOString().slice(0, 10);

        const rows = document.querySelectorAll(".tb-tasks tr.new-row-class");
        rows.forEach((row) => {
            const dueDateCell = row.querySelector("td:nth-child(2)");
            const dueDate = dueDateCell.textContent;

            if (dueDate === todayDate) {
                row.removeAttribute("hidden");
            } else {
                row.setAttribute("hidden", "");
            }
        });
    }
}
