// var a=prompt("First name")
// var b=prompt("last Name")
// var c=prompt("city","Karachi")
// console.log(a)
// console.log(b)
// console.log(c)

// var sub1= +prompt("Enter Math Marks")
// var sub2= +prompt("Enter Eng Marks")
// var sub3= +prompt("Enter Urdu Marks")
// var sub4= +prompt("Enter Comp Marks")
// var sub5= +prompt("Enter P.st Marks")
// var obtainedmarks= sub1 + sub2 + sub3 + sub4 + sub5
// var totalmarks=500
// var total= obtainedmarks / totalmarks *100

// if(total>=80){
//     console.log("A+")
// }else if(total>=70){
//     console.log("A")
// }else if(total>=60){
//     console.log("B")
// }else if(total>=50){
//     console.log("C")
// }else if(total>=40){
//     console.log("D")
// }else{
//     console.log("Failed")
// }

var sub1= +prompt("Enter Math Marks")
var sub2= +prompt("Enter Eng Marks")
var sub3= +prompt("Enter Urdu Marks")
var sub4= +prompt("Enter Comp Marks")
var sub5= +prompt("Enter P.st Marks")
var obtainedmarks= sub1 + sub2 + sub3 + sub4 + sub5
var totalmarks=500
var total= obtainedmarks / totalmarks *100
console.log(total + "%")
if(total>=80){
    console.log("A+")
}else if(total>=70){
    console.log("A")
}else if(total>=60){
    console.log("B")
}else if(total>=50){
    console.log("C")
}else if(total>=40){
    console.log("D")
}else{
    console.log("Failed")
}