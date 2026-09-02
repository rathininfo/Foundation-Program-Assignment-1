// Question No 1
// function describeValue(value){
//     let type = typeof value;

//     let truthness

//     if(value){
//        truthness = "truthy"
//     }
//     else {
//         truthness = "falsy"
//     }

//     return `${type} | ${truthness} `
// }

// console.log(describeValue(""));


// Question No 2
function getDayType(day){
 switch (day) {
    case "Friday": 
     case "Saturday":
     return "Weekend Day"
        case "Sunday":
            case "Monday":
                case "Tuesday":
                    case "Wednesday":
                        case "Thursday" :    
                        return  "Working Day"
    default:
        return "Invalid Day"
 }

 
}

console.log(getDayType("Monday"))

