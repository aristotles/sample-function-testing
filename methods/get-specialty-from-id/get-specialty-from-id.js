//given an passedIdArray of numberids, and a passedInfoArray of arrays [id,specialty], return an array of specialtys corrisponding ids were in passedIdArray

const infoArrayToObject = require("../info-array-to-object/info-array-to-object")
const removeDuplicates = require("../remove-duplicates/remove-duplicates")

function getSpecialtyFromId(passedIdArray, passedInfoArray){

    let returnSpecialtyArray=[]
    let formattedInfoObject=infoArrayToObject(passedInfoArray)
    
    for(let id of passedIdArray){
      
        const idSpecialty = formattedInfoObject[id]

        if(idSpecialty){
            returnSpecialtyArray.push(idSpecialty)
        }
      
    }
    return returnSpecialtyArray
}

module.exports = getSpecialtyFromId