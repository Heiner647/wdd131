const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}

const stepsHtml = steps.map(listTemplate)
document.querySelector("#myList").innerHTML = stepsHtml.join("")

const List = ["A", "B", "C"]
function GPA(Letter){
    points = 0
    if (GPA === "A") {
        points = 4
    }
    if (GPA === "B") {
        Points = 3
    }
}