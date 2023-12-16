let first, second, third;
let btn = document.getElementById("btn");
function generate() {
    let rand = Math.floor(Math.random() * 10);

    if (rand < 3) {
        first = "crazy";
    }
    else if (rand < 6 && rand > 3) {
        first = "amazing";
    }
    else {
        first = "fire";
    }

    // generate second word
    if (rand < 3) {
        second = "engine";
    }
    else if (rand < 6 && rand > 3) {
        second = "Foods";
    }
    else {
        second = "Garments";
    }
    //generate third word

    if (rand < 3) {
        third = "Bros";
    }
    else if (rand < 6 && rand > 3) {
        third = "Limited";
    }
    else {
        third = "Hub";
    }
    //display business name 

    let n = document.getElementById("name");
    let business_name = (`${first} ${second} ${third}`);

    n.innerHTML = business_name;
}



//refresh
// console.log(rand);

