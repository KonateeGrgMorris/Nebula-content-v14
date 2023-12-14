// Create a variable for each aspect of an address 
// First Name, Last Name, House-Number, Street-Name, City, State, Zip
// Combine them to be usable as a postage address

/*
First-Name Last-Name
House-Number, Street-Name 
City, State
Zip

Your log should look like this:

Steve Rogers
569, Amsterdam Ave
New York, NY
18062 
*/
const address = ${Lyrica} ${Morris}
${(321)}, ${(116th Street)}
${New York}, ${NY}
${10027}

const address = `${fName} ${lName} 
${houseNum}, ${street}
${city}, ${state}
${zip}`

console.log(`I am currently learning the programming language called ${language}. I ${adjective1} this program already. I read recently that declaring variables with the ${keyword1} keyword has gone out of style ever since ECMAScript ${year}. Oh, also, my instructor ${instructor} is awesome!`);
console.log('I am currently learning how to code and I love it already ${javascript}. i ${adjective1}this program already, I read recently that declaring variables with the ${String} keyword had gone out of style ever since ECMAScript $(year). ')