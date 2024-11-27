// this will creation a code using math.random();
function generateEncryptKey(message, alphabet, multiplicatinRate = 1) {
    // checking for valid inputs + creating extra variables for use
    let error = "invalid input(s)"
    let ObjectKey = {};
    let MessageOutput = [];
    if(!Array.isArray(alphabet) || typeof message !== 'string') {return error;}
  
    // creating a function to make sure no numbers repeat in objectkey
  
    function checkExistance(Generated, item = ObjectKey) {
        if (Object.values(item).includes(Generated)) {
            return checkExistance(Math.random(), ObjectKey)
        } else {
            return Generated
        }
    }
  
    // now we are getting to generate numbers for our message
  
    for(let index = 0; index < alphabet.length; index++) {
        let randomValue = checkExistance(Math.random() * multiplicatinRate, ObjectKey);
        ObjectKey[alphabet[index]] = randomValue
    }
  
    // now i use my key to mak the encrypted message
  
    for(let letters of message) {
        MessageOutput.push(ObjectKey[letters])
    }
    return [MessageOutput, ObjectKey]
}
const characters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
  ',', '.', '/', '?', '(', ')', ';', '"', '!', '$', ' '
];
generateEncryptKey("Hi guys!", characters
