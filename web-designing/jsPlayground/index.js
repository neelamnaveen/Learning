// var pokemon = {
//     firstname: 'Pika',
//     lastname: 'Chu ',
//     getPokeName: function() {
//         var fullname = this.firstname + ' ' + this.lastname;
//         return fullname;
//     }
// };

// var pokemonName = function(snack, hobby) {
//     console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
// };

// pokemonName.call(pokemon,'sushi'); // Pika Chu  loves sushi and algorithms
// pokemonName.apply(pokemon,['sushi']); // Pika Chu  loves sushi and algorithms

// ===========================================================================================

// const callme = async function (){
//     await new Promise((resolve)=>{
//         setTimeout(
//         resolve
//         ,2000)
//         console.log("executed")
//     })
// }
// async function b () {
//     await callme()
//     await callme()
//     await callme()
// }
// b()

// ===========================================================================================
// const list = [1, 2, 3, 4]
// const task = async () => {
//   for (const item of list) {
//     await new Promise(r => setTimeout(r, 1000));
//     console.log('Yello, D\'oh');
//   }
// }

// task();
// ===========================================================================================
// let thirdHighest=0, thirdLowest=0;
// let a=[1,10,3,4,5]

// a.sort(function(a, b){return a - b});

// let i=0;
// a.forEach((value, index)=>{
//     console.log(value)
//     if(i == 3){
//         thirdHighest = value;
//     }
//     if(i == (a.length-3)){
//         thirdLowest = value;
//     }
//     i++;
// })


// console.log("Third highest: "+ thirdHighest + " Third lowest: " + thirdLowest)

// ===============================================================================================

// var s='12:45:54PM'

// if(s.includes('AM')){
//     s=s.split('AM')[0]
//     s=s.replace(12,"00")
//     console.log(s)
// } else {
//     s=s.split('PM')[0]
//     if(!s.includes('12')){
//         let result = (parseInt(s.slice(0,2))+12)
//         s= result+s.slice(2)
//     }
//     console.log(s)
// }

// =================================================================================================

//  // Counting sort // //

// let input=[63,25,73,1,98,73,56,84,86,57,16,83,8,25,81,56,9,53,98,67,99,12,83,89,80,91,39,86,76,85,74,39,25,90,59,10,94,32,44,3,89,30,27,79,46,96,27,32,18,21,92,69,81,40,40,34,68,78,24,87,42,69,23,41,78,22,6,90,99,89,50,30,20,1,43,3,70,95,33,46,44,9,69,48,33,60,65,16,82,67,61,32,21,79,75,75,13,87,70,33]

// let result =[];
    
// (function countingSort(arr) {
//     // Write your code here
  
//     let result =[];
    
//     for (let i=0;i<100;i++){
//         result[i]=0
//     }
//     arr.forEach(value=>{
//         result[value]=result[value]+1
//     })

//     for(i in result){
//         for(let j=0;j<result[i];j++){
//             process.stdout.write(i+ ' '); // Assending orderer
//         }
//     }
//     // console.log(result)
// })(input)

// =================================================================================================


// (function towerBreakers(n, m) {
//     if(m==1 || n%2 == 0){
//         console.log("2")
//         return 2
//     } else {
//         console.log('1')
//         return 1
//     }
   
// })(1,4)

// =================================================================================================

// // Map key value pair, object.fromEntries
// let a=['a','b']

// const obj=new Map(
//     [['a','b'],
//      ['b','c']
//     ]
// );

// console.log(Object.fromEntries(obj).a)

// a1 alps cow bar
// mi2 jog mid pet
// wz3 34 54 398
// x4 45 21 7


// =================================================================================================
// let orderList = [ 'mi2 jog mid pet', 'wz3 34 54 398', 'a1 alps cow bar', 'x4 45 21 7' ];


//     // Write your code here
//     orderList.sort((ord1,ord2)=>{
//         let isOrd1Prime = isPrimeOrder(ord1);
//         let isOrd2Prime = isPrimeOrder(ord2);
        
//     })
    

// function isPrimeOrder(ord){
//     ordParts = ord.split(' ');
//     // console.log('jkhljkh')
//     // ordParts[1].test([0-9])
//     try {
//         // console.log(ordParts[1])
//         let na=[/[1-9]/g].test(ordParts[1])
//         console.log(na)
//     }
//     catch{

//     }
// }

// ====================================================================================================
// const conlog = content => console.log(content)
// const conlogjson= content => console.log(JSON.stringify(content))

// let obj = {
//     name: "userName",
//     id: "23"
// }

// conlog("I am logged")
// conlogjson(obj)

// ========= output ===========
// I am logged
// {"name":"userName","id":"23"}

// ====================================================================================================
// for (let i=0; i < 3; i++){
//     const log = o => {
//         console.log(i)
//     }
//     setTimeout(log,5000);
// }
// ========= output ===========
// 0
// 1
// 2

// ====================================================================================================

// console.log('one');
// setTimeout(function(){
//     console.log('Two')
// },0)

// Promise.resolve().then(function(){
//     console.log('Three')
// })

// console.log('Four')
// ========= output ===========
// one
// Four
// Three
// Two

// ====================================================================================================

// function abc(){
//     if(1){
//         var a=5;
//         let b=6;
//         const c=7;
//     }

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// abc()
//// ========= output ===========
//// b, c is not defined error
//// 5 (a value will be globally declared)
//// ====================================================================================================

// var a='42'
// var b=42

// console.log(a == b)
// console.log(a === b)
//// ========= output ===========
//// true
//// false


// const obj= {'first':new Date(), 'second':2, 'third':'test', 'four':4, 'five': 'abc'}

// var result = Object.keys(obj).map(key=> [key,obj[key]])

// // console.log(result)
// result.forEach((value, index)=>{
//     if(value[0]=='second'&& value[1]==2){
//         console.log(value)
//     }
// })

// // ========= output ===========
// // [ 'second', 2 ]

//// ====================================================================================================

// const items= {'first':new Date(), 'second':2,'second':3 , 'third':'test', 'four':4, 'five': 'abc'}

// console.log(items.second)
// // ========= output ===========
// // 2
//// ====================================================================================================

// function col1(a,b){
//     // we will try to update first collection if its updated successfully below will execute 
//     console.log('collection one updated successfully and data is: '+a)
//     b()

//     // if not below will be executed -- whatever rollback we wanted to
// }

// function col2(){
//     console.log('collection two updated successfully')
// }

// col1('dATA',col2)
// // // ========= output ===========
// // collection one updated successfully and data is: dATA
// // collection two updated successfully

//// ====================================================================================================

// if(0.1+0.10===0.200){
//     console.log('true')
// } else console.log('false')

// console.log(0.1+0.10)

// // // ========= output ===========
// // true
// // 0.2


//// ====================================================================================================


// var a = 96;
//     var alpha = {};
//     for (var i = 1; i<=26; i++)
//         alpha[String.fromCharCode(a + i)] = i;

    // console.log(alpha);

// // // ========= output ===========
// // all english alphabates -- smalls

