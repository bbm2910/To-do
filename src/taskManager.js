

// Create the taskManager object and add necessary properties and methods
const taskManager = {
    myTasks: [],

    // Constructor function for the Book object
    Task: function (title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
    },

    // Function to add a new book to the library
    addBookToLibrary: function (title, dueDate, priority) {
        const newTask = new this.Task(title, dueDate, priority);
        this.myTasks.push(newTask);
        this.addRowToTable(newTask, priority);
    },

    // Function to add a new row to the table
    addRowToTable: function (task, priority) {
        const libraryTableBody = document.querySelector(".tb-tasks");

        const newRow = document.createElement("tr");
        newRow.classList.add("new-row-class");

        const titleCell = document.createElement("td");
        titleCell.textContent = task.title;
        newRow.appendChild(titleCell);

        const dueDateCell = document.createElement("td");
        dueDateCell.textContent = task.dueDate;
        newRow.appendChild(dueDateCell);

        const priorityCell = document.createElement("td");
        priorityCell.textContent = task.priority;
        newRow.appendChild(priorityCell);


        const deleteBtnCell = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtnCell.appendChild(deleteBtn);
        newRow.appendChild(deleteBtnCell);

        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            const row = deleteBtn.closest("tr");
            const rowIndex = Array.from(row.parentNode.children).indexOf(row);

            row.remove();
            this.myTasks.splice(rowIndex - 1, 1); // Adjusted the index to account for the header row
        });

        libraryTableBody.appendChild(newRow);
    },
};

export default taskManager;
