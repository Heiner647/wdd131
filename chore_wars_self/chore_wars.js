localStorage.setItem("name of the key", "Varible");
localStorage.setItem("UserName", "Bro T");

const name = localStorage.getItem(UserName);
console.log();

// /----------------------------------------- 

const thing = [
    {
    name: "",
    Img: "",

}
]

localStorage.setItem("thing", JSON.stringify(thing) );
const thingfromStorage = JSON.parse(localStorage.getItem("thing"));
console.log(thingfromStorage)


function setLS(Key, Value){
    const valueAsString = JSON.stringify(Value)
    localStorage.setItem(Key, valueAsString);
}

function getLocalStorge(key){
    const valuseAsString = localStorage.getItem(key)
    const Value = JSON.parse(valuseAsString)
    return Value
}