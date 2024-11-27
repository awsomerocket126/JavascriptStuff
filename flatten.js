// will flatten a fucked up array into a single array
function flatten(...args) {
    let result = [];
    for (let items of args) {
        if (Array.isArray(items)) {
            result = result.concat(flatten(...items));
        } else {
            result.push(items)
        }
    }
    return result;
}
const thing = [[["Hello"],["Goodbye"]],["hi", "bye"]]
flatten(thing);
