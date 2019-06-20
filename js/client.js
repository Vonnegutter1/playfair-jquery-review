console.log('Good Morning!');

const playfair = [
    'Molly', 'Mark', 'Sean', 'Tim', 'David',
    'Adam', 'Sam', 'Danielle', 'Kyle', 'Blake',
    'Mitch', 'Jake'
]

$(document).ready(onReady);
// This function will ensure that jQuery is run every time the page loads. 
// It also calls the renderStudentList function.
function onReady(){
      //Can't do this! because .student is not on DOM when loaded 
    // $('.students').on('click', '.student', showAwesomeAlert);
    renderStudentList(playfair);

    // Need to select something already on the DOM 
    // Can filter the event to something new (dynamically generated).
    // do this with the 2nd arg to 'on' function (''.student')
    $('#students').on('click', '.student', showAwesomeAlert);

    // This is what generated the event, the document being ready
    //console.log( 'This is onready is the document!:', this);

}
// This function will be called when we click on a student.
// It will show on alert saying that student is awesome. 
function showAwesomeAlert(event){
    //console.log('Event', event);
// console.log(this);
    let studentName = $(this).text();
    alert(`${studentName} is awesome!!!`);

}
// This function will call the list of students and loops through to
// list them on the page. It will take in an array of students 
function renderStudentList(studentList) {
    for ( student of studentList ) {
        renderStudent(student);
    }
}
// This function will take in a single student and append it to 
// the '#student' ID on the HTML page.
function renderStudent(student) {
    $('#students').append(`<li class="student">${student}</li>`);
}