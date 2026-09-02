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
// function getDayType(day){
//  switch (day) {
//     case "Friday": 
//      case "Saturday":
//      return "Weekend Day"
//         case "Sunday":
//             case "Monday":
//                 case "Tuesday":
//                     case "Wednesday":
//                         case "Thursday" :    
//                         return  "Working Day"
//     default:
//         return "Invalid Day"
//  }

 
// }

// console.log(getDayType("Monday"))


// Question No 3

// function validateUsername(username){
//  let usersLength = username.length
//   if(usersLength < 4){
//     return "Too Short"
//   }
//   if(username.includes(" ")){
//     return "No Space Allowed"
//   }
   
  
//   if(username.toLowerCase().includes("admin") ){
//     return "Reserved Word"
//   }

//    return "Available"

// }

// console.log(validateUsername("Admin_Rahim"))

// Question No 4

function getCngFare(distance, isNight, waitingMinutes){

    let fare = 50;

    if(distance > 2){
        let extraKm =  distance - 2;
        fare = fare + (extraKm * 15);
    }
    
    if(waitingMinutes ===  undefined){
        waitingMinutes = 0;
    }

    let waitingCharge = waitingMinutes * 2 ;
    fare = fare + waitingCharge;


     if(isNight === undefined){
       isNight = false;
    }

    if(isNight === true){
        fare = fare * 1.2;
    }

   

    return fare;

}

