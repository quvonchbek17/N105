//1 matematik amallar
// function basicOp(operation, value1, value2)
// {
//   // Code
//   if(operation==='+'){
//     return value1+value2;
//   }
//   if(operation==='-'){
//     return value1-value2;
//   }
//   if(operation==='*'){
//     return value1*value2;
//   }
//   if(operation==='/'){
//     return value1/value2;
//   }
// }

//2  calculate BMI

// function bmi(weight, height) {
//   let result = weight/(height**2);
//   if(result<=18){
//     return "Underweight"
//   }
//   if(result<=25.0){
//     return "Normal"
//   }
//   if(result<=30.0){
//     return "Overweight"
//   }
//   if(result>30.0){
//     return "Obese"
//   }

// }
//3  Remove exclamation marks

// function removeExclamationMarks(s) {
//   let resultArray = []
//   let newArray = s.split("")
//   console.log(newArray);
//   newArray.forEach((item)=>{
//     if(item!=="!"){
//       resultArray.push(item)
//     }
//   })
//   console.log(resultArray.join(""));
//   return resultArray.join("")

// }

//4 welcome

// function greet(language) {
// 	let xushKelibsiz = {
//       english: 'Welcome',
// czech: 'Vitejte',
// danish: 'Velkomst',
// dutch: 'Welkom',
// estonian: 'Tere tulemast',
// finnish: 'Tervetuloa',
// flemish: 'Welgekomen',
// french: 'Bienvenue',
// german: 'Willkommen',
// irish: 'Failte',
// italian: 'Benvenuto',
// latvian: 'Gaidits',
// lithuanian: 'Laukiamas',
// polish: 'Witamy',
// spanish: 'Bienvenido',
// swedish: 'Valkommen',
// welsh: 'Croeso'
//   }

//   boshlangich="english"

//   return xushKelibsiz[language] || xushKelibsiz[boshlangich]
// }

//5 Remove First and Last Character

// function removeChar(str){
//   return str.split("").splice(1,str.length-2).join("")
// };

// 6  Training JS #3: Basic data types--String

// var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
// function Dad(){
//select some variable to combine "Dad"
//   return `${d1+a2+d2}`;
// }
// function Bee(){
//select some variable to combine "Bee"
//   return `${b1+e2+e2}`;
// }
// function banana(){
//select some variable to combine "banana"
//   return `${b2+a2+n2+a2+n2+a2}`;
// }

//answer some questions if you finished works above
// function answer1(){
//the answer should be "yes" or "no"
//   return "no";
// }
// function answer2(){
//the answer should be "yes" or "no"
//   return "no";
// }
// function answer3(){
//the answer should be "yes" or "no"
//   return "yes";
// }

// 7 Parse nice int from char problem

// function getAge(inputString){
//   let newArray = inputString.split("");
//   let result = newArray[0];
//   return parseInt(result)
// }

// 8 Be Concise I - The Ternary Operator

// function describeAge(age) {
//   return `You're a(n) ${age<13? "kid" :age<18?  "teenager" :age<65 ? "adult"  : "elderly" }`
// }

//9 Training JS #7: if..else and ternary operator

// function saleHotdogs(n){
//     if(n<5){
//       return n*100;
//     }
//      if(n>=5 && n<10){
//        return n*95;
//      }
//      if(n>=10){
//        return n*90
//      }
//    }

//10  Find the Slope

// function slope(points)
// {
// let a=points[3]-points[1];
// let b=points[2]-points[0];

//   if(b==0){
//     return "undefined"
//   }
//   else{
//     return String(a/b)
//   }

// }
