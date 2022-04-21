//removes any non numerical character from the passed string

function cleanString(passedString) {
    return passedString.replace(/\D/g, '');
}
module.exports = cleanString