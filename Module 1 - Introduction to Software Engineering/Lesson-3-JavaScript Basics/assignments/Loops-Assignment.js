
// 1. Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'

for (let i = 0; i < 30; i++) {
    console.log(`the current index is ${i}`);
}
    
// 2. Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index

for (let i = 1; i <= 10; i += 2) {
    console.log('the current index is $(i)');
}

// 3. Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
// //      Loop over the array and log each celebrity's full name to the console.

     let celebrities = ['Robert Ludlum', 'Celine Dion', 'Sidney Sheldon', 'David Baldacci', 'Steven Madden'];
     for (let i = 0; i < celebrities.length; i++) {
     console.log(celebrities[i]);
}

// 4. Loop over your celebrity list and 
// // If a celebrity's full name has an even number of characters log it to the console

for (let i = 0; i < celebrities.length; i++) {
    let fullName = celebrities[i];
    if (fullName.length % 2 === 0) {
      console.log(fullName);
    }
  }


// 5. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only first names

    const celebrities1 = ['Robert Ludlum', 'Celine Dion', 'Sidney Sheldon', 'David Baldacci', 'Steven Madden'];
    const firstNames = []
    name_parts = celebrity.split()
    first_name = name_parts[0]
    first_names.append(first_name)
console.log('first_names')

// 6. Use the celebrity array for this question
// // Create a for loop which will iterate over each element and output a new array of only last names

let celebrities2 = ['Robert Ludlum', 'Celine Dion', 'Sidney Sheldon', 'David Baldacci', 'Steven Madden'];
 const lastName1 = []
    const lastName = celebrity.split(" ")[-1]
    last_name =['Ludlum', 'Dion', 'Sheldon', 'Baldacci', 'Madden']
    console.log(' - ')

// 7. Loop over the celebrity list and then loop through each name. 
// // If a letter is a vowel, log it to the console

    let celebrities3 = ['Robert Ludlum', 'Celine Dion', 'Sidney Sheldon', 'David Baldacci', 'Steven Madden'];
    stringOfVowels = "aeiouAEIOU"
    stringOfCelebrityNmae = celebrity_list
    console.log('string.vowels')

// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console

for (var i = 0; i < celebrities.length; i++) {
    var name = celebrities[i];
    for (var j = 0; j < name.length; j++) {
      var letter = name[j];
      if (letter === letter.toUpperCase()) {
        console.log(letter);
      }
    }
  }

// // 9. Convert your celebrity array to all caps and no spaces:
// //  Ex:
// // // Input:  ['Martha Stewart', 'David Beckham', etc..] 
// // // Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]

let celebs = ['ROBERT LUDLUM', 'CELINE DION', 'SIDNEY SHELDON', 'DAVID BALDACCI', 'STEVEN MADDEN'];
console.log(convertedCelebs)

// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop



//BONUS:
// // Write a loop that iterates from zero until 30
// // If an index is divisible by 2 log 'fizz'
// // If an index is divisible by 3 log 'buzz'
// // If an index is divisible by both 2 & 3, log 'fizz-buzz'
// // Otherwise print the index to the console
