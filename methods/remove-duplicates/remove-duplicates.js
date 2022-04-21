//removes any duplicates from passed array with all elements of a given type

function removeDuplicates(passedArray) {

    let returnArray = []
    for (item of passedArray) {
        if (returnArray.indexOf(item) < 0) {
            returnArray.push(item)
        }
    }

    return returnArray
}
module.exports = removeDuplicates