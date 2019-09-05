// Recursive Sheep Counter
const countSheepRec = (num) => {
  if(num === 0) {
    console.log("All sheep jumped over the fence.")
    return
  }
  console.log(`${num}: Another sheep jump over the fence`)
  countSheepRec(num-1)
}
console.log('\n\nRecursive Sheep Jumping!')
countSheepRec(4)
console.log('\n/* -------------------------------- */\n')

/* -------------------------------- */

// Recursive Power Calculator
const powerCalculatorRec = (num, pow) => {
  if(pow < 0) {
    return "exponent should be >= 0"
  }
  if(pow === 1) return num
  return num * powerCalculatorRec(num, pow-1)
}
console.log('Recursive Power Calculator: 5^4 = ' + powerCalculatorRec(5, 4))
console.log('\n/* -------------------------------- */\n')

/* -------------------------------- */

// Recursive Reverse String
const reverseStringRec = (s) => {
  if(s.length === 1) {
    return s
  }
  return s.slice(-1) + "" + reverseStringRec(s.substr(0, s.length-1))
}
console.log('Reversing a text string\nthe quick brown fox <==> ' + reverseStringRec('the quick brown fox'))
console.log('\n/* -------------------------------- */\n')

/* -------------------------------- */

// Recursive Nth Triangular Number
const nthTriangularNumRec = num => {
  if(num === 1) {
    return 1
  }
  return num + nthTriangularNumRec(num - 1)
}
console.log('Recursive Nth Triangular Number\nThe 8th Triangular Number is: ' + nthTriangularNumRec(8)) // 36
console.log('\n/* -------------------------------- */\n')

/* -------------------------------- */

// Recursive String Split
const stringSplitterRec = (s, delim) => {
  if(s.length === 1) {
    if(s === delim) {
      return ""
    } else {
      return s
    }
  }
  let p1 = s.slice(0,1)
  let p2 = s.slice(1)
  //console.log(p1 + ' ' + p2)
  if(p1 === delim) {
    p1 = ""
  }
  return p1 + stringSplitterRec(p2, delim)
}
console.log("Split the string '-02-20-2020-', removing dashes: " + stringSplitterRec('-02-20-2020-', "-"))
console.log('\n/* -------------------------------- */\n')

/* -------------------------------- */

// Recursive Fibonacci
// 1  2  3  4  5  6  7
// 1, 1, 2, 3, 5, 8, 13.
const fibonacci = (num) => {
  if(num === 0) {
    return 0
  }
  if(num <= 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

const getFibSeq = (nth) => {
  let seq = []
  for(let i = 1; i <= nth; i++) {
    seq.push(fibonacci(i))
  }
  console.log(seq)
}

console.log('The Fibonacci Sequence for 6 is: ' + getFibSeq(6))
console.log('\n/* -------------------------------- */\n')

/* -------------------------------- */

// Recursive Factorial
const factorial = (num) => {
  if(num === 1) {
    return 1
  }
  return num * factorial(num - 1)
}

console.log('7 Factorial is: ' + factorial(7)) // 13
console.log('\n/* -------------------------------- */\n')

/* -------------------------------- */

//https://www.laurentluce.com/posts/solving-mazes-using-python-simple-recursivity-and-a-search/
// Recursive Maze Escape
const maze = [
  [0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1],
  [0, 0, 0, 0, 2]
  ]
const exit = [4, 4]

/*
     0 1 2 3 4
   * * * * * * * 
0  * i         *
1  * * * *     *
2  *           *
3  *     * * * *
4  *         o *
   * * * * * * *
*/

const addDirection = (d) => {
    let s = 'U'
    switch(d) {
      case 1:
        console.log('R')
        s = 'R'
        break
      case 2:
        s = 'D'
        console.log('D')
        break
      case 3:
        s = 'L'
        console.log('L')
        break
    }
    return s
}

/* -------------------------------- */

const findWay = (x, y) => {
  if(maze[y][x] === 2) {
    console.log(`found exit at ${x}, ${y}`)
    //console.log(s)
    return true
  } else if(maze[y][x] === 1) {
    console.log(`wall at ${x}, ${y}`)
    return false
  } else if(maze[y][x] === 3) {
    console.log(`already visited ${x}, ${y}`)
    return false
  }

  console.log(`visiting ${x}, ${y}`)
  maze[y][x] = 3;

  if(x < maze[0].length - 1 && findWay(x + 1, y)) {
    addDirection(1)
    return true
  }
  if(y < maze.length - 1 && findWay(x, y + 1)) {
    addDirection(2)
    return true
  }
  if(x > 0 && findWay(x - 1, y)) {
    addDirection(3)
    return true
  }
  if(y > 0 && findWay(x, y - 1)) {
    addDirection(4)
    return true
  }
  return false
}

//findWay(0, 0)

let c = 0
const getAnagrams = (word, i) => {
  c += 1
  if(c > 25) {
    console.log('oh no')
    return
  }
  if(word.length === 1) {
    console.log('length 1')
    return word
  }
  if(word.length === 2) {
    return `${word[1]} ${word[0]}`
  }
  let prefix = word[i]
  let letters = word.substring(0, i) + word.substring(i+1)
  return `${prefix} ${getAnagrams(letters, i + 1)}`
}

/* -------------------------------- */

function permut(string) {
    if (string.length < 2) return string; // This is our break condition

    var permutations = []; // This array will hold our permutations

    for (var i=0; i<string.length; i++) {
        var char = string[i];

        // Cause we don't want any duplicates:
        if (string.indexOf(char) != i) // if char was used already
            continue;           // skip it this time

        var remainingString = string.slice(0,i) + string.slice(i + 1,string.length); //Note: you can concat Strings via '+' in JS

        for (var subPermutation of permut(remainingString))
            permutations.push(char + subPermutation)

    }
    return permutations;
}

var myString = "east"
permutations = permut(myString)
console.log("Recursive Permutations of the word 'east':")
console.log(permutations.join(', '))
console.log('\n/* -------------------------------- */\n')

/* -------------------------------- */

// Recursive convert decimal to binary
const getBinary = (acc, num) => {
  if(num === 0) {
    return acc
  }
  nextDigit = `${num % 2}${acc}`
  let half = (num - num % 2) / 2
  return getBinary(nextDigit, half)
}
console.log("Recursive Decimal/Binary Conversion:")
console.log('29 (Decimal) equals ' + getBinary('', 29) + ' (Binary')
console.log('\n/* -------------------------------- */\n')




let chart = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: [
        "Steve", 
        "Kyle", 
        "Andra"], 
      Zhao: [
        "Richie", 
        "Sofia", 
        "Jen"]
    }, 
    Schrage: {
      VanDyck: [
        "Sabrina",
        "Michelle",
        "Josh"],
      Swain: [
        "Blanch",
        "Tom",
        "Joe"]
    },
    Sandberg: {
      Goler: [
        "Eddie",
        "Julie",
        "Annie"],
      Hernandez: [
        "Rowi",
        "Inga",
        "Morgan"],
      Moissinac: [
        "Amy",
        "Chuck",
        "Vinni"],
      Kelley: [
        "Eric",
        "Ana",
        "Wes"]
    }
  }
}

const orgChart = (item, level) => {
  if(Array.isArray(item)) {
    item.forEach(person => {
      console.log('   '.repeat(level + 1) + person)      
    })
    return {}
  }
  
  level++
  
  for(thing in item) {
    console.log('   '.repeat(level) + thing)
    orgChart(item[thing], level)
  }
}
console.log("Recursive Printing of an Org Chart")
orgChart(chart, 0)
console.log('\n/* -------------------------------- */\n')

