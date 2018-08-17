// https://stackoverflow.com/questions/175739/is-there-a-built-in-way-in-javascript-to-check-if-a-string-is-a-valid-number#175787 --- answer by Gavin

const hasOnlyDigits = (value) => {
  return /^\d+$/.test(value);
}

const formatDate = (dateString) => {
  let date;
  if (dateString === undefined) {
    date = new Date();
  } else if (hasOnlyDigits(dateString)) { 
    date = new Date(Number(dateString));
  } else {
    date = new Date(dateString);
  }
  
  let unix = date.getTime().toString(), // *should* be NaN if date is invalid
      utc  = date.toUTCString();

  if (isNaN(unix)) { // cannot just test !unix ... !!!
    return { "unix" : null, "utc": "Invalid Date" };
  } else {
    return { "unix" : unix, "utc": utc };
  }
};

module.exports.formatDate = formatDate;

// Unit tests - uncomment and run as node <this-file>

// console.log(formatDate(undefined)); // current date/time

// console.log(formatDate('2015-12-25')); // valid

// console.log(formatDate('1450137600000'));  // valid                  

// console.log(formatDate('banana')); // invalid
