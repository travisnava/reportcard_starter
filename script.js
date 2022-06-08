/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
  name: "Travis Navarro",
  grade: "Junior",
  advisor: "Sana Waqar",
  major: "Computer Science",
  graduationYear: "2024",
  imageUrl: "https://1000logos.net/wp-content/uploads/2017/11/penn-state-football-logo.jpg",
}

let semester = "Spring Semester"

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
}

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdownEl = document.querySelector(".dropdown")
const semesterDropdownDiv = document.querySelector(".semester-dropdown")
const semesterDropdownButton = document.querySelector(".dropdown-button")
const semesterDropdownLabel = document.querySelector(".dropdown-label")

const studName = document.querySelector("#student-name")
const studAdvisor = document.querySelector("#student-advisor")
const studMajor = document.querySelector("#student-major")
const studGrade = document.querySelector("#student-grade-level")
const studGraduationYear = document.querySelector("#student-graduation-year")
const studImage = document.querySelector("#student-image")


const fallSem = document.querySelector("#fall-semester")
const springSem = document.querySelector("#spring-semester")
const winterTerm = document.querySelector("#winter-term")

const reportCardTableElement = document.querySelector("#report-card-table")



// ADD more query selectors here

/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  studName.innerHTML = studentName
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  studGrade.innerHTML = studentGradeLevel
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  studAdvisor.innerHTML = studentAdvisor
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  studMajor.innerHTML = studentMajor
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationyear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
  studGraduationYear.innerHTML = graduationYear
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  studImage.src = imageUrl
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
  updateStudentName(studentInformationObject.name)
  updateStudentGradeLevel(studentInformationObject.grade)
  updateStudentAdvisor(studentInformationObject.advisor)
  updateMajor(studentInformationObject.major)
  updateStudentGraduationYear(studentInformationObject.graduationYear)
  updateStudentImage(studentInformationObject.imageUrl)
}

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
  // update the code here
  reportCardTableElement.innerHTML += `<div class = "table-row table-header"> 
   <h4 class = "code-col">Code</h4>
   <h4 class = "name-col">Name</h4>
   <h4 class = "sem-col">Semester</h4>
   <h4 class = "cred-col">Credits</h4>
   <h4 class = "lett-col">Letter</h4>
   <h4 class = "pts-col">Points</h4>
  </div>
  `
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
  // update the code here with information about the course passed to this function



  reportCardTableElement.innerHTML += `
  <div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">

    <div class = "table-row">
      <h4 class = "code-col">${course.code}</h4>
      <h4 class = "name-col">${course.name}</h4>
      <h4 class = "sem-col">${course.semester}</h4>
      <h4 class = "cred-col"><span class = "credit">${course.credits}</span> credits</h4>
      <h4 class = "lett-col">${course.grade}</h4>
      <h4 id ="gpa-${rowNum + 1}" class = "pts-col">?</h4>
    </div>

  </div>
  `
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += `
    <div class="table-row totals even">
    <h4 class="code-col"></h4>
    <h4 class="name-col"></h4>
    <h4 class="sem-col">Totals:</h4>
    <h4 id="total-credits" class="cred-col"> ? credits </h4>
    <h4 class="lett-col"></h4>
    <h4 id="total-pts" class="pts-col">?</h4>
  </div> 
  
  `
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += `
    <div class="table-row gpa odd">
    <h4 class="code-col"></h4>
    <h4 class="name-col"></h4>
    <h4 class="sem-col">GPA:</h4>
    <h4 class="cred-col"></h4>
    <h4 class="lett-col"></h4>
    <h4 id="gpa" class="pts-col"> ?</h4>               
  </div>      
  
  
  `
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */
function updateReportCard(reportCardTableElement, currentSemester) {
  // update the dropdown label
  updateDropdownLabel()
  // reset the report card table's inner html to an empty string
  if (reportCardTableElement) reportCardTableElement.innerHTML = ``

 
  let rowNum = 0
  let course = studentData[currentSemester].forEach((course) =>  {
    addCourseRowToReportCard(reportCardTableElement, course, rowNum)
  })


  
  addReportCardHeaders(reportCardTableElement)
  addTotalsRow(reportCardTableElement)
  addGpaRow(reportCardTableElement)
}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
  if(!dropdownElement.classList.contains("closed")){
    dropdownElement.classList.add("closed")
  }
}

function openDropdown(dropdownElement) {
  if(dropdownElement.classList.contains("closed")) {
    dropdownElement.classList.remove("closed")
  }


}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 */
function updateDropdownLabel() {
  semesterDropdownLabel.innerHTML = semester
  
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
  dropdownElement,
  dropdownButtonElement,
  reportCardTableElement,
  fallSemesterElement,
  springSemesterElement,
  winterTermElement
) {
  // Add an event listener for the dropdown button that calls the openDropdown function with the correct DOM element
  dropdownButtonElement.addEventListener("click", () => {openDropdown(dropdownElement)})


  // Add 3 event listeners - one for the fall semester option, the spring semester option, and the winter term option
  // Each callback function one should update the `semester` variable,
  // call the `updateReportCard` function, and close the dropdown

  fallSemesterElement.addEventListener("click", () => {
    semester = "Fall Semester";
    updateReportCard(reportCardTableElement, semester)
    closeDropdown(dropdownElement)
  })

  springSemesterElement.addEventListener("click", () => {
    semester = "Spring Semester";
    updateReportCard(reportCardTableElement, semester)
    closeDropdown(dropdownElement)
  })
  winterTermElement.addEventListener("click", () => {
    semester = "Winter Term";
    updateReportCard(reportCardTableElement, semester)
    closeDropdown(dropdownElement)
  })



}

/***************
   CALCULATIONS
****************/

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
  // code goes here
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

function calculateSemesterGpa(reportCardTableElement) {
  // code goes here
}

window.onload = function () {
  // execute your functions here to make sure they run as soon as the page loads
  populateStudentInfo(studentInformation)
  updateReportCard(reportCardTableElement, semester)
  addEventListeners(dropdownEl,
    semesterDropdownButton,
    reportCardTableElement,
    fallSem,
    springSem,
    winterTerm)
}
