function getValues(){
    return "YES";
}

//an object assign that goes over the values of an object.
function objectAssigVal(){
}

//an object assign that goes through two objects
function doubleObjAsigVal(obj1,obj2,condition,setVal1,setVal2){
    let returnObj = {};
    for(let [key1,value1] of Object.entries(obj1)){
        for(let [key2,value2] of Object.entries(obj2)){
            if(condition){
                returnObj[key1] = setVal1;
            }else{
                returnObj[key1] = setVal2;
            }
        }
    }
    return returnObj;
}

//an object assign that uses both keys and values
function objectAssignKeyVal(){
}

//going over object values 
function objectVal(obj,condition){
    let total = 0;
    for(let value of Object.values(obj)){
        if(!condition){
            total += value;
        }
        else if(value === condition){
            total += value
        }
    }
    return total
}

//going over object keys
function objectKey(){

}

//seeing if passed in dice meet condition passed in, i.e threeOfAKind
function seeIfValid(obj,condition){
    console.log("HERE CHECKING CONDITION")
    let tallyUpDie = {}
    for(let value of Object.values(obj)){
        if(tallyUpDie[value]){
            tallyUpDie[value] += 1
            if(tallyUpDie[value] === condition){
                return true
            }
        }else{
            tallyUpDie[value] = 1
        }
    }
    return false
}

function seeIfStraight(obj,typeOfStraight){
    let isValid = false
    let tallyUpDie = {}

    //change to object.value within object.assign
    for(let value of Object.values(obj)){
    (tallyUpDie[value]) ? (tallyUpDie[value] += 1) : (tallyUpDie[value] = 1)
    }
    switch(typeOfStraight){
    case "smallStraight":
        if ((tallyUpDie[1] && tallyUpDie[2] && tallyUpDie[3] && tallyUpDie[4]) 
            || 
            (tallyUpDie[2] && tallyUpDie[3] && tallyUpDie[4] && tallyUpDie[5]) 
            ||
            (tallyUpDie[3] && tallyUpDie[4] && tallyUpDie[5] && tallyUpDie[6]) 
        ){
            isValid = true
            }
        break;
    case "largeStraight":
    if (
        (tallyUpDie[1] && tallyUpDie[2] && tallyUpDie[3] && tallyUpDie[4] && tallyUpDie[5]) 
        || 
        (tallyUpDie[2] && tallyUpDie[3] && tallyUpDie[4] && tallyUpDie[5] && tallyUpDie[6]) 
    ){
        isValid = true
    }
    break;
    default:
        return
    } 
    return isValid
}

function findDiceToReroll(obj){
    let temp = {}
    for(let [key,value] of Object.entries(obj)){
      if(value === true){
        temp[key] = false
      }else{
        temp[key] = value
      }
    }
    return temp;
}

export {
    getValues,
    objectAssigVal,
    doubleObjAsigVal,
    objectAssignKeyVal,
    objectKey,
    objectVal,
    seeIfValid,
    seeIfStraight,
    findDiceToReroll
}