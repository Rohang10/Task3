document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTask');
    const pendingList = document.getElementById('pendingList');
    const completedList = document.getElementById('completedList');

    addTaskButton.addEventListener('click', function() {
        const taskText = taskInput.value;
        if (taskText) {
            const taskItem = createTaskItem(taskText);
            pendingList.appendChild(taskItem);
            taskInput.value = '';
        }
    });

    function createTaskItem(text) {
        const li = document.createElement('li');
        li.innerHTML = text;
        const completeButton = document.createElement('button');
        completeButton.className = 'complete-button';
        completeButton.innerHTML = 'Complete';
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button';
        deleteButton.innerHTML = 'Delete';

        completeButton.addEventListener('click', function() {
            li.remove();
            completedList.appendChild(li);
        });

        deleteButton.addEventListener('click', function() {
            li.remove();
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);

        return li;
    }
});
