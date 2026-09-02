// Question No 1
function describeValue(value){
    let type = typeof value;

    let truthness

    if(value){
       truthness = "truthy"
    }
    else {
        truthness = "falsy"
    }

    return `${type} | ${truthness} `
}

console.log(describeValue(""));


