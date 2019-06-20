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
    renderStudentList(playfair);
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
    $('#students').append(`<li>${student}</li>`);
}