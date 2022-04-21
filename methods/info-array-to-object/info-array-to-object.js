//returns a Object{id:specialty} from the passedInfoArray[[id,specialty]] to optimize time complexity

function infoArrayToObject(passedInfoArray) {
    let formattedInfoObject = {}

    for (let infoSubArray of passedInfoArray) {
        formattedInfoObject[infoSubArray[0]] = infoSubArray[1]
    }

    return formattedInfoObject
}

module.exports = infoArrayToObject