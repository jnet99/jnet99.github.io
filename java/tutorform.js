const addCourseBtn = document.getElementById('add-course-btn');
const courseList = document.getElementById('course-list');

function addCourseField() {
  const courseContainer = document.createElement('div');
  courseContainer.setAttribute('class', 'inputBox');

  const newCourseInput = document.createElement('input');
  newCourseInput.setAttribute('type', 'text');
  newCourseInput.setAttribute('name', 'courses[]'); 
  newCourseInput.setAttribute('class', 'element text medium');
  newCourseInput.setAttribute('placeholder', 'Enter course name');

  courseContainer.appendChild(newCourseInput);
  
  courseList.appendChild(courseContainer);
}

addCourseBtn.addEventListener('click', addCourseField);
