// localStorage.setItem("name of the key", "Varible");
// localStorage.setItem("UserName", "Bro T");

// const name = localStorage.getItem(UserName);
// console.log();

// // /-----------------------------------------

// const thing = [
//     {
//     name: "",
//     Img: "",

// }
// ]

// localStorage.setItem("thing", JSON.stringify(thing) );
// const thingfromStorage = JSON.parse(localStorage.getItem("thing"));
// console.log(thingfromStorage)

// function setLS(Key, Value){
//     const valueAsString = JSON.stringify(Value)
//     localStorage.setItem(Key, valueAsString);
// }

// function getLocalStorge(key){
//     const valuseAsString = localStorage.getItem(key)
//     const Value = JSON.parse(valuseAsString)
//     return Value
// }


// ------------New local Storage set & get -------------------
function setLS(key, value) {
  const valueAsString = JSON.stringify(value);
  localStorage.setItem(key, valueAsString);
}

function getLS(key) {
  const valueAsString = localStorage.getItem(key);
  return JSON.parse(valueAsString);
}
// ------------------------------------------------------------
// let Unassign_Chores = [
//   {
//     name: "Example 1",
//     points: 25,
//   },
// ];

// let playerOne_Chores = [
//   {
//     name: "Example 2",
//     points: 25,
//   },
// ];
// let playerTwo_Chores = [
//   {
//     name: "Example 3",
//     points: 25,
//   },
// ];

// --------------------New local Storage Contaners--------------
let Unassign_Chores = getLS("Unassign_Chores") || [
  { name: "Example 1", points: 25 }
];

let playerOne_Chores = getLS("playerOne_Chores") || [
  { name: "Example 2", points: 25 }
];

let playerTwo_Chores = getLS("playerTwo_Chores") || [
  { name: "Example 3", points: 25 }
];

let Player1P = getLS("Player1P") || 0;
let Player2P = getLS("Player2P") || 0;

// ------------------------------------------------------------
// let Player1P = 0
// let Player2P = 0

function GetIndexOfChore(ChoreArray, div) {
        for (let chore of ChoreArray) {
          let divChoreName = div.querySelector(".name").innerText;
          let divChorePoints = div.querySelector(".points").innerText;
          if (divChoreName == chore.name && divChorePoints == chore.points) {
            let index = ChoreArray.indexOf(chore);
            return index
          }
        }
      }
function Unassign(ChoreArray, div) {
    let Index = GetIndexOfChore(ChoreArray, div);
    let Chore = ChoreArray[Index]
    ChoreArray.splice(Index, 1);
    Unassign_Chores.push(Chore)
    return ChoreArray
    
}

document.querySelector("#AddChore").addEventListener("click", function () {
  let New = document.getElementById("text").value;
  let chore = {
    name: New,
    points: 25,
  };
  Unassign_Chores.push(chore);
  reload(Unassign_Chores, playerOne_Chores, playerTwo_Chores);
});

function reload(Unassign_Chores, playerOne_Chores, playerTwo_Chores) {
  
  
  // ------------localStorage---------------
  setLS("Unassign_Chores", Unassign_Chores);
  setLS("playerOne_Chores", playerOne_Chores);
  setLS("playerTwo_Chores", playerTwo_Chores);
  setLS("Player1P", Player1P);
  setLS("Player2P", Player2P);
  document.querySelector("#p1p").innerText = `Points: ${Player1P}`;
  document.querySelector("#p2p").innerText = `Points: ${Player2P}`;
// ------------------------------------------


  const Empty = "";
  document.getElementById("Item_Cont_Cont").innerHTML = Empty;
  document.getElementById("PlayerOneChores").innerHTML = Empty;
  document.getElementById("PlayerTwoChores").innerHTML = Empty;

  Unassign_Chores.forEach((Unassign_Chores) => {
    const UnChores = `
            <div class = "Item_Cont">
                <p class="name">${Unassign_Chores.name}</p>
                <p class="points">${Unassign_Chores.points}</p>
                <div class = "Item_Buttons_Cont"> 
                    <button class ="Block_Button One" >Player 1</button>
                    <button class ="Block_Button Two">Player 2</button>
                    <button class ="Delete">Delete</button>

                </div>
            </div>
            `;
    document.getElementById("Item_Cont_Cont").innerHTML += UnChores;
  });

  playerOne_Chores.forEach((playerOne_Chores) => {
    const ChoreOne = `
            <div class = "Item_Cont">
                <p class="name">${playerOne_Chores.name}</p>
                <p class="points">${playerOne_Chores.points}</p>
                <div class = "Item_Buttons_Cont"> 
                    <button class="Block_Button complete">Complete</button>
                    <button class="Block_Button Unassign">Unassign</button>
                    <button class ="Delete">Delete</button>
                </div>
            </div>
            `;
    document.getElementById("PlayerOneChores").innerHTML += ChoreOne;
  });

  playerTwo_Chores.forEach((playerTwo_Chores) => {
    const ChoreTwo = `
            <div class = "Item_Cont">
                <p class="name">${playerTwo_Chores.name}</p>
                <p class="points">${playerTwo_Chores.points}</p>
                <div class = "Item_Buttons_Cont"> 
                    <button class="Block_Button complete">Complete</button>
                    <button class="Block_Button Unassign">Unassign</button>
                    <button class ="Delete">Delete</button>
                </div>
            </div>
            `;
    document.getElementById("PlayerTwoChores").innerHTML += ChoreTwo;
  });
  for (let div of document.querySelectorAll(".Delete")) {
    div.addEventListener("click", function (e) {
      let div = e.target.parentElement.parentElement;
      let ChoreContID = div.parentElement.id;
      if (ChoreContID == "PlayerOneChores") {
        let index = GetIndexOfChore(playerOne_Chores, div);
        playerOne_Chores.splice(index, 1);
      }

      if (ChoreContID == "Item_Cont_Cont") {
        let index = GetIndexOfChore(Unassign_Chores, div);
        Unassign_Chores.splice(index, 1);
      }
      if (ChoreContID == "PlayerTwoChores") {
        let index = GetIndexOfChore(playerTwo_Chores, div);
        playerTwo_Chores.splice(index, 1);
      }
      reload(Unassign_Chores, playerOne_Chores, playerTwo_Chores);
    });
  }


  for (let div of document.querySelectorAll(".One")){
    div.addEventListener("click", function (e) {
    let div = e.target.parentElement.parentElement;
    let index = GetIndexOfChore(Unassign_Chores, div);
    let Chore = Unassign_Chores[index]
    Unassign_Chores.splice(index, 1);
    playerOne_Chores.push(Chore)
    reload(Unassign_Chores, playerOne_Chores, playerTwo_Chores);

      
  });}
   for (let div of document.querySelectorAll(".Two")){
    div.addEventListener("click", function (e) {
    let div = e.target.parentElement.parentElement;
    let index = GetIndexOfChore(Unassign_Chores, div);
    let Chore = Unassign_Chores[index]
    Unassign_Chores.splice(index, 1);
    playerTwo_Chores.push(Chore)
    reload(Unassign_Chores, playerOne_Chores, playerTwo_Chores);

      
  });}

  for (let div of document.querySelectorAll(".Unassign")){
    div.addEventListener("click", function (e) {
    let div = e.target.parentElement.parentElement;
    let ChoreContID = div.parentElement.id;
    if (ChoreContID == 'PlayerOneChores'){
        playerOne_Chores = Unassign(playerOne_Chores, div)
    }
    if (ChoreContID == 'PlayerTwoChores'){
        playerTwo_Chores = Unassign(playerTwo_Chores ,div)

    }
    reload(Unassign_Chores, playerOne_Chores, playerTwo_Chores)

});}
   document.querySelector("#Unassign").addEventListener("click", function (e) {
    Unassign_Chores.push(...playerOne_Chores)
    Unassign_Chores.push(...playerTwo_Chores)
    playerOne_Chores.length = 0;
    playerTwo_Chores.length = 0;
    reload(Unassign_Chores, playerOne_Chores, playerTwo_Chores)

}); 

for (let div of document.querySelectorAll(".complete")){
    div.addEventListener("click", function (e) {
    let div = e.target.parentElement.parentElement;
    let ChoreContID = div.parentElement.id;

    if (ChoreContID == 'PlayerOneChores'){
        let IndexOfChore = GetIndexOfChore(playerOne_Chores, div)
        Player1P += playerOne_Chores[IndexOfChore].points;
        document.querySelector("#p1p").innerText = `Points: ${Player1P}`
        playerOne_Chores = Unassign(playerOne_Chores, div)

    }
    if (ChoreContID == 'PlayerTwoChores'){
        let IndexOfChore = GetIndexOfChore(playerTwo_Chores, div)
        Player2P += playerTwo_Chores[IndexOfChore].points;
        document.querySelector("#p2p").innerText = `Points: ${Player2P}`
        playerTwo_Chores = Unassign(playerTwo_Chores ,div)

    }
    reload(Unassign_Chores, playerOne_Chores, playerTwo_Chores)

});}
}

reload(Unassign_Chores, playerOne_Chores, playerTwo_Chores)
