// -----------Question 1
// Write a function to print "hello_USERNAME!" USERNAME is the input of the function.
var my_list, test_list;

function hello_username(username) {
  /* Print's a greeting to a specific user */
  console.log(`hello_${username}`);
}

hello_username("username");

// -----------Question 2
// Write a python function, first_odds that prints the odd numbers from 1-100 and returns nothing    
function first_odds() {
  /* When called prints a list of every odd number 1-100 */
  for (var num = 0, _pj_a = 101; num < _pj_a; num += 1) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
}

first_odds();

// -----------Question 3
// Please write a Python function, max_num_in_list to return the max number of a given list.
function max_num_in_list(a_list) {
  /* Finds the highest number in a given list and returns that number */
  var max_num;
  max_num = max(a_list);
  return max_num;
}

my_list = [1, 3, 4, 14, 85, 25, 35, 42];
console.log(max_num_in_list(my_list));

// -----------Question 4
// Write a function to return if the given year is a leap year. 
function is_leap_year(a_year) {
  if (a_year % 100 !== 0 || a_year % 400 === 0) {
    if (a_year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

console.log(is_leap_year(2012));

// -----------Question 5
// Write a function to check to see if all numbers in list are consecutive numbers.
function is_consectutive(a_list) {
  var check;
  check = 0;
  a_list = [1, 2, 3, 4, 5, 6, 7, 8];

  for (var index = 0, _pj_a = a_list.length; index < _pj_a; index += 1) {
    if (index !== max(range(a_list.length))) {
      if (a_list[index] + 1 !== a_list[index + 1]) {
        check += 1;
      }
    }
  }

  if (check >= 1) {
    return false;
  } else {
    return true;
  }
}

console.log(is_consectutive(test_list))