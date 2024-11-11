// Skapa array

// Deklarera
let myArray;

// Initiera
// myArray=["Mango", "Päron"];




// for (let i = 0; i < fruits.length; i++) {
//     const fruitItem = fruits[i];
//     console.log("Foor loop - " + fruitItem + ": " + i);
// }


// // While-loop (kör så länge villkoret inte är sant)

// let index = 0;

// while (index < fruits.length) {
//     console.log("While-loop - " + fruits[index] + ": " + index);
//     index ++;
// }

// Do... while loop: Körs alltid första gången även om villkoret är false (Blir en boolean)

// let fruits = ['Apple', 'Banana', 'Pear']
let index = 0

// do {
//     console.log("Do... while loop - " + index);
//     index++;
    
// } while (index < fruits.length);

// // For of loop - Används när vi bara behöver varje element i en array och inte index

// for (const fruitsItem of fruits) {
//     console.log("For of loop - " + fruitsItem);
    
// }

// forEach ()- metoden används för att loopa genom en array. Används när vi vill utföra en funktion på varje element
let fruits = ['Apple', 'Banana', 'Pear']

fruits.forEach(countFunction);

function countFunction(item, index) {
    console.log("forEach()-metod - " + ": " + item + ": " + index);
    console.log(item + " has " +  item.length + " characters");
    
}

// Switch
// let day = new Date().getDay();

// switch (day) {
//     case 1:
//         console.log("Idag är det Tisdag");
//         break;

//     case 2:
//         console.log("Idag är det Onsdag");
//         break;

//     case 3:
//         console.log("Idag är det Torsdag");
//         break;

//     case 4:
//         console.log("Idag är det Fredag");
//         break;
    
//     case 5:
//         console.log("Idag är det Lördag");
//         break;
       
//     case 6:
//         console.log("Idag är det Söndag");
//         break; 
        
//     case 7:
//         console.log("Idag är det Måndag");
//         break;

//     default:
//     console.log("Ogiltig dag");
//     break;
    
// }

/* Man kan också använda sig av flera cases i ett case. 
Ifall man sätter ett värde på en index med månader som ex, och 
sen sätter en annan index till värde av årstider så man kan 
skriva case 1, case 2, case 3 
console.log("Nu är det vår"); */



/*Designa ett program som räknar antal items i en array
och räknar antalet förekomster av varje item*/

let flowers = ["Ros", "Tulpan", "Lilja", "Ros", "Tulpan", "Solros", "Solros", "Tulpan"]

// Array för att spara räknade blommor
let flowerItems = [];
let flowerCount = [];

