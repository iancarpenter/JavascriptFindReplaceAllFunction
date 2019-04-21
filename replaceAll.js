// https://stackoverflow.com/a/1144788/55640
// Replaces all occurences of find within str with replace
let replaceAll = function(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}