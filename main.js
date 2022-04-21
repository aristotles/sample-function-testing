// Given a list of string IDs (possibly with duplicates) and a list of specialties with IDs,
// return a list of specialty names, without duplicates, that are represented by the given IDs 
// (after being cleaned). 

const cleanString = require("./methods/clean-string/clean-string");
const getMatchingIds = require("./methods/get-matching-id/get-matching-id");
const getNameFromId = require("./methods/get-specialty-from-id/get-specialty-from-id");
const removeDuplicates = require("./methods/remove-duplicates/remove-duplicates");

function main(passeddIdStringArray,passedInfoArray){


    let cleanedArray=[]   

    //Problem 1
    for(item of passeddIdStringArray){
        cleanedArray.push(cleanString(item))
    }

    //Problem 2
    cleanedArray=removeDuplicates(cleanedArray)


    //Problem 3
    let idsArray=getMatchingIds(cleanedArray,passedInfoArray)

    let specialtiesArray=getNameFromId(idsArray,passedInfoArray)
 
    return specialtiesArray
}
module.exports = main