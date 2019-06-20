console.log('woot!')

$( document ).ready( onReady );

function onReady( ) {
    console.log( 'Woot!' );
    $('#add-task').on('click', addTaskHandler);
    $('#task-list').on('click', '.delete', deleteTask);
    $('#task-list').on('click', '.flag', flagTask);
    $('#clear-tasks').on('click', deleteAllTasks,)
}
function addTaskHandler(event) {
    // Default action when you submit a form 
    // - click "submit" type button inside a <form>
    // is to refresh the page. We want to prevent that!
    event.preventDefault();
    console.log('Event', event);
   
const taskName = $('#task-name').val();
 console.log( 'Clicked Add Task! Task is ', taskName );

 // Add the task
 addTask(taskName);

 // Clear out the form field so we can enter new stuff
    $('#task-name').val('');
}
function addTask(task) {
    console.log("Adding the task", task);
    $('#task-list').append(
        `<li>
        ${task}
        <button class="delete">Delete</button>
        <button class="flag">Flag</button>
        </li>`);
    $('#delete').on('click');

}
function deleteTask(task) {
    console.log('Clicked delete', $(this).parent().text() );
    // 'this' is the delete button...
    // We want to remove its parent element, the <li/>
    ($(this).parent()).remove();
}

function flagTask(event) {
    console.log( 'Clicked flag task', $(this).parent().text() );

    // We made a style class in the css .important
    // We want to select the <lis? which is the parent of 
    // 'this' or the thing we clicked on
    $(this).parent().addClass('important');

    // $(this).parent().toggleClass('important');
}
// This will remove all tasks from the list when we click the 
// remove all button.

function deleteAllTasks(event) {
    console.log('clicked delete task')
    $('#task-list').empty()
}