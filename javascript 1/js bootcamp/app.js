// en rad kommentar

/*
flera rader
av kommentarer
*/

// !!!!Att deklarera en variabel (vi skapar en variabel en box med namn och innehåll)!!!!!

// let age = 31; //Min ålder som är kan förändras
// const name = 'Sara' // Mitt namn som är konstant samma
// let isStudent = true; // Jag är just nu student och kan förändras. 

// console.log("Hejsan, mitt namn är " + name + "! Jag är " + age + " år gammal")
// console.log("Och svar på frågan ifall jag just nu är student så är svaret: " + isStudent);


// let z;
// console.log(z)


// let city = 'Göteborg';


// console.log(city)




// let firstname ="Sara";
// const birthday = 10;
// const birthdaymonth = "Februari"

// console.log("Hej " + firstname + "!" + " Din födelsedag är: " + 
//     birthday + ":e " + birthdaymonth);


// Automatisk typomvandling
//JS omvandlar nummer till sträng. 

// const ettnummer= 42;
// const result = ettnummer + "1";
// console.log(result);

//skillnaden blir om man inte använder sträng.

// const nummer = 42;
// const resultat = nummer +1;
// console.log(resultat);

/*Det blir alltså en matematisk uträkning för att 1 är ett nummer
och inte en sträng*/

// const strängochNummer = "banan" + 6 + 6;
// const nummerOchSträng = 6 + 6 + "banan";

// console.log(strängochNummer);
// console.log(nummerOchSträng);

/* Detta visar hur man kan skriva olika och soutput ser olika ut
i consolen */

// let namn = prompt ("Vad heter du?");
// console.log("Välkommen " + namn + "!");

// let tal1 = Number(prompt ("Ange ett tal"));
// let tal2 = Number(prompt("Ange ett till tal"));

// let summa = tal1 + tal2;
// let differens = tal1 - tal2;
// let produkt = tal1 * tal2;

// console.log("Summan är " + summa);
// console.log("Summan är " + differens);
// console.log("Summan är " + produkt);
//Skriv ett program som avrundar till ett heltal
// let tal = Number(prompt("Ange ett tal: *"));
 
//Math.round()

// let heltal = Math.round(tal);
// console.log("Avrundat till heltal: " + heltal);

// Avrunda till en decimal, använda med en metod som heter toFixed.
// let tvåDecimaler = tal.toFixed(2);
// console.log("Avrunda till två decimaler: " + tvåDecimaler);



/********************************************************************************************************************************************************************************
*********************************************************************************************************************************************************************************/

// !!!!! Logical operators !!!!

// 1
// let a = 1;
// let b = 1;
// let c = b==a;   // == visar på att något är likamed och i detta fall fick vi true i consolen.

// console.log(c);

// //2
// let d = 5;
// let e = 65;
// let f = d!=e; // != visar på att de två olika variablerna inte är samma, inte lika med. Visas som true.

// console.log(f);


//3

// let g = 10;
// let h = 2;
// let i = g < h;

// console.log("g är mindre än h " + i ); // Detta ger retunering false vilket stämmer. g<h säger att g är mindre. 

// let j = g > h;

// console.log("g är större än h " + j); // g är större än h g>h ger retur true. 

// Så >>>  g < h = g är mindre än h.. g > h = g är större än h...


// 4

// let k = "röd";
// let l = "grön"
// let m = k <= l;
// let n = k >= l;

// console.log(m); //Detta visar på att något är mindre eller lika med.. (<=) 
// console.log(n); // Detta visar att något är större eller lika med.. (>=)

//5

// o = "a";
// p = "a";
// q = o&&p;

// console.log("Denna visar att både påstående o och p är uppfyllda OCH stämmer: " + q);
//retunerar om båda påstående är sanna. Logisk OCH

//6
//pipeline || visas i booleansk true eller false ifall ett eller flera av operators värden är uppfyllda. 


// !!!!! Logical Arrayer !!!!

// 7 

/* En array kan innehålla datatyper som strings och numbers. En arrays är en variabel som kan innehålla
flera värden. */
// let arrayOne = ["Hund", "Katt", "Häst", "Får", "Kor"]

// console.log("På en bondgård finns det oftast dessa djur: " + arrayOne);

// // 8

// let fruits = ["Apple", "Pear", "Grapes", "Orange", "Banana"]
// console.log(fruits);

// // 9

// let arrayTwo = [2, 9, 10, 78];
// console.log(arrayTwo);

// 10.3

// let animals = ["Cat", "Hamster", "Parrot", "Funky Chihuahua"]
// animals[1] = "Tiger" //från fråga 10.6

//Hur många värden har arrayen ovan --> 4 olika värden har den.
// console.log(animals);

// 10.4 

// console.log(animals[0]); //Detta hämtar ut Cat ifrån arrayen.. En lista börjar alltid på 0

// 10.5 

// console.log(animals[3]); // Detta hämtar ut Funky Chihuahua. HAr alltså plats 3 i listan

// 10.6

// console.log(animals[1]);

// !!!!! Logical Arrayer  LEVEL UP !!!!

// let x = [1,2,3,7,8,9];
// let z = [4,5,6]


// console.log(x);

// let merged = x.concat(z);

// console.log(merged); //returns både x och z men inte i nummer ordning. 

// GÅ VIDARE INTE FASTNA!!





// !!!!! Loopar !!!!
//Classic For loops

//1
// for(i=0; i<=1000; i++){
//     console.log(i);   
// } // Retuneras med att console.log upprepas med nytt tal fram till 1000.

// 2

// for(i=100; i>=0; i--){
//     console.log(i); // Retuneras med att console.log upprepas med nytt tal från 100 till 0.
// }

// //3

// let fruit = ["Äpple", "Päron", "Ananas", "Apelsin", "Banan"];

// for(i=0; i<7;i++){
//     console.log(fruit[0]);
// }

// 4




//Code Conf 8/11 Mårten och Sara

// ** Övning 1. **
// Mårten...

// let fruits = ["Apple", "Cherry", "Mango", "Pear", "Peach"];
// fruits.push("Pineapple");
// fruits.forEach(countFunction);

// function countFunction(item, index) {
//   console.log(item + " has " + item.length + " characters");
//   console.log(item + ": " + index);
// }


// // ** Övning 2. ** 
// // Sara... 

// for (let i = 0; i < fruits.length; i++) {
//   const fruitItem = fruits[i];
//   console.log(fruitItem + ": " + i);
// }

// /* Start/End

// Algoritm --->

// - Vi ska skapa en (for loop) som börjar med att fruits array lista med innehållande items
// ska vara lika med noll, den ska vara mindre än array furits längd (hur många antal i listan) och ska öka för varje
// gång loopen körs tills index har uppnått fruit index längd.
// - Vi konstaterar ny variabel fruitItem till att vara index inom array listan fruits, 
// där kan vi även ändra index värdet för det item i listan vi vill ha. 
// - Vi skriver ut i consolen fruitItem mellanslag : och index för att retunera vilken plats 
// de olika items har i listan.  



// PseudoKod --->

// SET (Deklarera) for loop index = 0; 
// index är mindre än fruits längd;
// index ska öka för varje gång;

// SET (Deklarera) att fruitItems = fruits index;

// Skriv ut console.log med värde
// fruitItem + sträng : + index;
// för att få mängden av varje frukt

// */ 

// // ** Övning 3. **
// // Mårten...

// let i = 0;

// while (i < fruits.length) {
//   console.log(fruits[i] + " " + i);
//   i++;
// }


// // ** Övning 4. ** 
// // Sara...

// let index = 0;

// do {
//   console.log("Do...while loop " + index);
//   index++;
// } while (index < fruits.length);

// /* 

// Algoritm --->

// - Vi börjar med att låta vårat index ha ett värde av 0.
// - Vi ska sedan göra en (Do...while loop) som ska köras fram tills att 
// vårat index värde uppnår array fruits värdets längd. (Amtalet av frukt som finns i listan)

// Pseudokod --->

// Start/end
// Let index = 0

// Deklarera en Do...While loop med värde:
// Deklarera Do till Skriv ut med string Do... while loop plus index;
// Deklarera att Index för varje gång som loopen går ska öka;
// Deklarera att denna loop ska köras om tills index uppnått array fruits längd. 

// */


// // ** Övning 5. ** 
// // Mårten...

// for (const fruit of fruits) {
//   console.log(fruit);
// }

// // ** Övning 6. ** 
// // Mårten...

// let suits = ["spader", "hjärter", "klöver", "ruter"];
// let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// let deck = [];

// for (let suit of suits) {
//   for (let value of values) {
//     deck.push(`${suit} ${value}`);
//   }
// }
// console.log(deck);

// // ** Övning 7. **
// let flowers = [
//   "Ros",
//   "Tulpan",
//   "Lilja",
//   "Ros",
//   "Tulpan",
//   "Solros",
//   "Solros",
//   "Tulpan",
// ];


// let flowerItems = [];
// let flowerCounts = [];

// for (let flower of flowers) {
//   let index = flowerItems.indexOf(flower);

//   if (index !== -1) {
//     flowerCounts[index]++;
//     console.log(`${flower} finns redan, räknas om till ${flowerCounts[index]}`);
//   } else {
//     flowerItems.push(flower);
//     flowerCounts.push(1);
//     console.log(`${flower} är ny, lägg till med 1`);
//   }
// }

// console.log("Unika blomnamn:", flowerNames);
// console.log("Antal av varje blomma:", flowerCounts);


// /* 

// Algoritm --->

// - Vi börjar med att skapa en Array med namn flowers som har ett värde av 
// "Ros", "Tulpan", "Lilja", "Ros", "Tulpan", "Solros", "Solros", "Tulpan"
// - Vi skapar sedan en ny array med namn flowerItems med ett värde av undefiend.
// - Vi skapar efter det en till array med namn flowerCounts med värde av undefiend. 
// - Vi skapar en for of loop där vi deklarerar att loopen ska spara flower item i våran flowers
// array. 
// - Medan for of loopen körs ska vi sätta att index ska vara värdet av flowerItems med index av 
// vår array flowers. 
// - 

// */


// !!!!! Functions !!!!

//Global scopes 
// let globalVar = "Jag är en global variabel";

// function globalScope(){
//     console.log(globalVar);
// }

// globalScope();


// // Function scope

// function functionScope(){
//     let functionScopeVar = "Jag är en function scope variable";
//     console.log(functionScopeVar);
// }

// functionScope();



















