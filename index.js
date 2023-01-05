//document.getElementById('count-el').innerText = 3;
let countEL = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")
let count = 0
let name = "John Doe" //22 as a name
let greeting = 'Hi '+ name + '. Good day.';

let welcomeEL = document.getElementById('welcome-el')
welcomeEL.innerText = greeting
function increment(){
    //console.log("clicked.")
    count += 1
    countEL.textContent = count
    console.log(count)
}

function save(){
    let countStr = count + ' - '
    saveEL.textContent += countStr
    count = 0 
    countEL.textContent = 0
    console.log(count)
}