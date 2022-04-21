// given an array of numerical strings and an array of arrays with an int(id) and a string specialty,
// returns an array of matching int ids 

const infoArrayToObject = require("../info-array-to-object/info-array-to-object")

function getMatchingIds(passedIdArray, passedInfoArray) {

    let matchingIds = []
    let formattedInfoObject = infoArrayToObject(passedInfoArray)

    for (let numString of passedIdArray) {
        const numberId = parseInt(numString)

        if (formattedInfoObject[numberId]) {
            matchingIds.push(numberId)
        }
    }
    return matchingIds
}

module.exports = getMatchingIds