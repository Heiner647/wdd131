

const Beast = {
    img: "snortleblat.webp",
    name: "Snortleblast",
    class: "Swamp Beast Diplomat",
    Level: 5,
    health: 100,

    AttackFun: function () {
        this.health -= 20
        reload(this)
        if (this.health <= 0) {
            alert("You Died")
        }

    },

    Level_upFun: function () {
        this.Level += 1
        reload(this)

    } 

}

function reload(Beast) {
    document.querySelector(".card").innerHTML =
    ` <img class=image src="${Beast.img}" alt="img">
        <h2 class="name">${Beast.name}</h2>
        <div class="stats">
            <p>Class: ${Beast.class}</p>
            <p>Health: ${Beast.health}</p>
            <p>Level: ${Beast.Level}</p>

        </div>
        <div class="buttons">
            <button id="Attack">Attack</button>
            <button id="Level_up">Level up</button>

        </div>`;

        document.querySelector("#Attack").addEventListener("click",() => Beast.AttackFun());
        document.querySelector("#Level_up").addEventListener("click", () => Beast.Level_upFun());


}

reload(Beast)