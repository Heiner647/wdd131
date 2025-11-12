
// // use 99.9% of the time
// const anotherObj ={}
// // use when needed
// const anotherObj2 = new Object()


// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { 
    sectionNum: 1, 
    roomNum: 'STC 353', 
    enrolled: 26, days: 'TTh', 
    instructor: 'Bro T'
    },
    { 
    sectionNum: 2, 
    roomNum: 'STC 347', 
    enrolled: 28, 
    days: 'TTh', 
    instructor: 'Sis A'
    }
  ],
  enrollStudent: function (sectionNum) {
    console.log("sectionNum to enroll in:", sectionNum);
    const theSection = this.section.find((section)=> sectionNum == section.sectionNum);
    if(theSection) {
      theSection.enrolled++;
      renderSections(this.sections);
    }

  }
};
// // will ether be true or false
// function findsection(section) {
//   return sectionNum == section.sectionNum
// }
aCourse.sections[0].instructor
const key = "code";
aCourse.name
aCourse[key]

function renderHeader(course) {
    const nameEl = document.querySelector("#courseName");
    const codeEl = document.querySelector("#courseCode");
    nameEl.textContent = course.name;
    codeEl.textContent = course.code;
}

function sectionTemplate(section) {
    return ` <tr>
            <tb>${section.sectionNum}</tb>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
        </tr>`
}

function renderSections(sections) {
    const sectionsEl = document.querySelector("#sections");
    const html = sections.map(sectionTemplate);
    sectionsEl.innerHTML = html.join("");
}

renderHeader(aCourse);
renderSections(aCourse.sections);


function clickhandler(event) {
  const sectionInput = document.querySelector("#sectionNum");
  const sectionNum = sectionInput.value;
  // How can we tell which button was clicked?
  aCourse.enrollStudent(sectionNum);
}

document
  .querySelector("enrollStudent").addEventListener("click", clickhandler);
document.querySelector("#dropStudent").addEventListener("click", clickHandler);


// document.querySelector("enrollStudent").addEventListener("click", ()=> {
//   const sectionNum = document.querySelector("#sectionNumber")
//   aCourse.enrollStudent(sectionInput.value)
// })