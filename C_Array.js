const arg = process.argv.slice(2);
//this is a js script that will convert a string to a C Char array (with length) passed into its args when you call in this format: node file.js [text]
let output = ["{'"];
let counter = 0;
for(let thingy of arg) 
{
    for (let item of thingy) 
    {
        output.push(item + "','");
        counter++;
    }
    output.push(" ','");
    counter++;
}
output.push("\\0'};");
counter++
// console.log(output.length());
console.log(output.reduce((thing, thing2) => thing + thing2));
console.log(counter);
