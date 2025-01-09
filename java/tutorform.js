// Get the 'Add Course' button and the container where new courses will be added
const addCourseBtn = document.getElementById('add-course-btn');
const courseList = document.getElementById('course-list');

// Function to add a new course input field
function addCourseField() {
  // Create a new input box for the course
  const courseContainer = document.createElement('div');
  courseContainer.setAttribute('class', 'inputBox');

  const newCourseInput = document.createElement('input');
  newCourseInput.setAttribute('type', 'text');
  newCourseInput.setAttribute('name', 'courses[]'); // Use an array to collect multiple course inputs
  newCourseInput.setAttribute('class', 'element text medium');
  newCourseInput.setAttribute('placeholder', 'Enter course name');

  // Append the input box to the course container
  courseContainer.appendChild(newCourseInput);
  
  // Append the new course container to the list of courses
  courseList.appendChild(courseContainer);
}

// Add event listener to the 'Add Course' button
addCourseBtn.addEventListener('click', addCourseField);
