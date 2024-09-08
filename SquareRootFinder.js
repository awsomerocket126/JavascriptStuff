let RootFndr = function(Big_numba) {
for(let ree = 0; ree < Big_numba; ree++) {
let result = ree - 0.50; // The approximation, like i said, is still being worked on and so it just rounds down to -0.50 of ree
  if (Math.abs((ree * ree) === Big_numba)) {
 return console.log("The square root is " + String(ree))};
if ((ree * ree) > Big_numba) {
 return console.log("The square root is approximately " + String(result))};
}
}
RootFndr(13)
