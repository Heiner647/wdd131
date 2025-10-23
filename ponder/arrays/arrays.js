// Activity one-------------------------------------------
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}

const stepsHtml = steps.map(listTemplate)
document.querySelector("#myList").innerHTML = stepsHtml.join("")

// Activity Two------------------------------------------

const List = ["A", "B", "C"]
function GPA_swich(Letter){
    let points = 0
    if (GPA_swich === "A") {
        points = 4;
    }
    if (GPA_swich === "B") {
        Points = 3
    }
    if (GPA_swich === "C") {
        Points = 2
    }
    if (GPA_swich === "D") {
        Points = 1
    }
    if (GPA_swich === "F") {
        Points = 0
    }
    return points;

}
const GPA = List.map(GPA_swich)

// Activty Three-----------------------------------------

const pointsTotal = GPA.reduce(function (total, item) {
  return total + item;
});
const gpa2 = pointsTotal / gpaPoints.length;

// Activity Four

// const list = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

// const list2 = list.filter(function(number){
//     return number.length < 6

// });

const shortword = list.filter((list) => list.length < 6);

// Activity Five----------------------------------------------

const indexof = [12, 34, 21, 54];
let LuckyNumber = 21;
const A5 = indexof.indexOf(LuckyNumber);