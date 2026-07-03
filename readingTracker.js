// An array as the primary data storage
// Each object contains strings for the day and book, and a numeric value for minutes.
const readingLog = [
  { day: "Monday", book: "Dune", minutes: 30 },
  { day: "Tuesday", book: "1984", minutes: 20 },
  { day: "Wednesday", book: "Dune", minutes: 25 },
  { day: "Thursday", book: "The Hobbit", minutes: 40 },
  { day: "Friday", book: "1984", minutes: 15 }
];

/**
 * Function appends a new, formatted log entry to the main reading tracker.
 * The Input and data type are `day (String)`, `book (String)`, `minutes (Number)`
 * Appends to the readingLog array by adding a new object of the parameters. readingLog is where the data is.
 */
function addReadBook(day, book, minutes) {
  // Uses ES6 distinction to create a new object from the parameter variables
  const newEntry = { day, book, minutes };
  // Pushes the newly constructed object into our global array state
  readingLog.push(newEntry);
}

/**
 * Goes through the entire tracking log to sum up the total time spent reading in minutes.
 * The input and data type is `log (Array of objects)`
 * Function returns a single number representing the sum of reading minutes.
 */
function totalReadingMinutes(log) {
  let total = 0; // Guard variable initialized to accumulate the total count
  
  // A for of loop extracts every individual entry object from the array in order
  for (let entry of log) {
    // Accesses the looping `minutes` property of the current object and adds it to the existing total total
    total += entry.minutes;
  }
  return total;
}

/**
 * Function figures out which book was logged during the highest number of separate days
 * Input and data type is: `log (Array of objects)`
 * The function returns a string of the title of the most frequently read book
 */
function mostReadBook(log) {

  const bookCounts = {};

  for (let entry of log) {
    // Checking if the book title key does NOT exist yet in bookCounts
    if (!bookCounts[entry.book]) {
      // If the book entry does not exist yet then initialize as the 1st time with 1
      bookCounts[entry.book] = 1;
    } else {
      // OTOH if the book exists then increment by 1
      bookCounts[entry.book]++;
    }
  }

  let maxBook = null;
  let maxCount = 0;
  for (let book in bookCounts) {
    // If a number higher than before comes up then assign that book as the most read one
    if (bookCounts[book] > maxCount) {
      maxBook = book;
      // This gets the highest count of the current book
      maxCount = bookCounts[book];
    }
  }
  return maxBook;
}


function printDailySummary(log) {
  for (let entry of log) {
    console.log(`${entry.day}: ${entry.minutes} mins reading "${entry.book}"`);
  }
}
