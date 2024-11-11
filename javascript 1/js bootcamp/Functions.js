// !!!!! Functions !!!!

//Global scopes 
let globalVar = "Jag är en global variabel";

function globalScope(){
    console.log(globalVar);
}

globalScope();


// Function scope

function functionScope(){
    let functionScopeVar = "Jag är en function scope variable";
    console.log(functionScopeVar);
}

functionScope();
// console.log(functionScopeVar); finns inte utanför funktionen


// Block scope
{
let blockScopeVar = "Jag är en block scope variable";
console.log(blockScopeVar);
}


// Att deklarera med var gör att console log funkar utanför block scope..
// Där av har man slutat använda var mer och mer.




// Grundläggande syntax för en functions

function greeting(){  // <--- parametrar i mellan paranteserna. 
    console.log("Hejsan på dig");
}
greeting(); // <--- Argument i function call


//Parametrar är värden som vi kan skicka in i en funktion

function helloWorld(name){
console.log(`Hello, ${name}`);
}

helloWorld ("Sara");

// En funktion kan också ge tillbaka ett värde med return

function add(a, b){
    return a + b; 
}

console.log(add(5, 10));


// Arrow functions, ett kortare sätt att skriva en funktion. En liten funktion, en ganska kort

let sayHello = firstName => "Säg Hej " + firstName;
console.log(sayHello("Sara"));

let divide = (a,b) => a/b;
console.log(divide(80, 6));

let greetArrowFunc = () => "Hejsan"
console.log(greetArrowFunc());


//Finns bara en parameter behövs inga paranterser. 
//Om funktionen retunerar ett värde direkt behövs inga måsvingar eller return. 

