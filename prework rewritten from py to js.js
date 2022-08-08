// -----------Question 1
// Write a function to print "hello_USERNAME!" USERNAME is the input of the function.
var my_list, test_list;

function hello_username(username) {
  /* Print's a greeting to a specific user */
  console.log(`hello_${username}`);
}

hello_username("username");
console.log("==========================");

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
console.log("==========================");

// -----------Question 3
// Please write a Python function, max_num_in_list to return the max number of a given list.
function max_num_in_list(list) {
    var max;
    max = list[0];
  
    for (var a, _pj_c = 0, _pj_a = list, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
      a = _pj_a[_pj_c];
  
      if (a > max) {
        max = a;
      }
    }
  
    return max;
  }
  
console.log(max_num_in_list([1, 3, 4, 14, 85, 25, 35, 42]));
console.log("==========================");

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
console.log(is_leap_year(2016));
console.log(is_leap_year(2020));
console.log(is_leap_year(2022));
console.log("==========================");


// -----------Question 5
// Write a function to check to see if all numbers in list are consecutive numbers.
function is_consectutive(test_list) {
    test_list = test_list.slice(0, test_list.length - 1);
    for (var i = 0; i < test_list.length; i++) {
        if (test_list[i] !== test_list[i + 1]) {
            return false;
        }
    
    }
}

test_list = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(is_consectutive(test_list))