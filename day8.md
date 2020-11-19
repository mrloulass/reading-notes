# Day Reading Notes

## Loops

**Comparison operators**
You can evalute a situation by comparing one value in the script the result is Boolean: true or false.

- === strict equal to 
This operator compares two values to check that both the data type and value are the same.

- !== strict not equal to
this operator compares two values to check that both the data type and value are not the same

- '>' greater than
- '<' less than
- '>=' greater than or equal to
- '<=' less than or equal to

**Logical Operators**
Allow you to compare the results of more than one comparison operator

- && Logical AND
this operator testd more than one condition
both expressions must be true for returns to be true
if one expression is false the return will be false

- || Logical OR
this operator tests at least one condition
Just need one expressions to be true the return will be true
if both false the return is false

- ! Logical NOT
This operator takes a single Boolean value and inverst it
this reverses the state of an expression

**Loop**
Checks a condition and if the returns is true a code block will run.Then the condition checks again and if the return is true the code block will run again. It repeats until the condition returns false.

- Three common types of loops
 1. FOR run code a specific number of times
 2. WHILE run if you don't know how many times the code should run
 3. DO WHILE always run the statements inside the curly braces at least once, even if the condition evaluates to false.

 Loop counters are made up of three statements
 1. Initialization- create a variable and set it to 0. This variable is commonly called i, and it acts as the counter
  - Ex: let i = 0;
 2. Condition- the loop should continue to run until the counter reaches a specified number
  - Ex: i < 10;
 3. Update- every time the loop has run the statements in the curly braces, it adds one to the counter
  - i++ or i--

  Example of a for loop running check text book pages 172-173
  Example of a while loop page 176

  
