//TASK 5 PART 1

//Request input from user
const x = Number(prompt('Number:'));
const d7 = !(x % 7), d11 = !(x % 11);
/*Instead of using the if, else if and else statement I have 
used the nested ternary operator to do the solution in one line.*/
const result = (d7 && d11) ? 'both 7 and 11' :
               (d7 || d11) ? 'either 7 or 11' :
                             'neither 7 nor 11';
//Print result
console.log(`${x} is divisible by ${result}`);

/*
Sources:
https://javascript.info/ifelse#conditional-operator
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator#:~:text=The%20conditional%20(ternary)%20operator%20is,if%20the%20condition%20is%20falsy.
https://stackoverflow.com/questions/74784924/a-program-that-prompts-the-user-to-enter-a-number-and-then-checks-whether-the-n
*/
