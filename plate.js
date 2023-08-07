const plateContainer = document.querySelector(".plates-container");

let alphabetical = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

let counter = 0; //each click on below button results on counter + 1;
document.getElementById("generate").onclick = function(){
    counter += 1;
    if(counter <= 15){
        let newLi = document.createElement("li");
    
        let alphaCounter = 3;
        // let numCounter = 3;

        let threeLetters = [];
        let threeNumbers = [];


        while(alphaCounter > 0){
            let random = Math.floor(Math.random() * alphabetical.length); //random index out of the alphabetical array
            let randomNumber = Math.floor(Math.random() * numbers.length); //random index out of the numbers array

            threeLetters.push(alphabetical[random]); //until counter is 0,  
            threeNumbers.push(numbers[randomNumber]);
            let letterAndNumber = threeLetters.join("").toLocaleUpperCase() + " " + threeNumbers.join("");
            alphaCounter -= 1;
            newLi.innerText = letterAndNumber;
        }
        plateContainer.append(newLi);
    }
    else{
        alert("Space is Full");
    }

}






















// let newLi = document.createElement("li");
    
//     let alphaCounter = 3;
//     let numCounter = 3;

//     let threeLetters = [];
//     let threeNumbers = [];


//     while(alphaCounter > 0){
//         let random = Math.floor(Math.random() * alphabetical.length); //random index out of the alphabetical array
//         let randomNumber = Math.floor(Math.random() * numbers.length); //random index out of the numbers array

//         threeLetters.push(alphabetical[random]); //until counter is 0,  
//         threeNumbers.push(numbers[randomNumber]);

//         let lettersPlate = threeLetters.join("").toUpperCase() + " "; 
//         let numbersPlate = threeNumbers.join("");
//         alphaCounter -= 1;
//         newLi.innerText = lettersPlate + numbersPlate;
//     }
//     plateContainer.append(newLi);