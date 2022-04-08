/**
Exercise 1
Rewrite the code below to use array destructuring instead of assigning each value to a variable.
*/
{
    console.log("EXERCISE 1");
  
    let item = ["Egg", 0.25, 12];
  
    const [name, price, quantity] = item; 
 
    console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
    console.log();
  }
  
  /**
  Exercise 2
  Rewrite the code below to assign each number to the right variable.
  */
  {
    console.log("EXERCISE 2");
  
    let numbers = [3, 5, 4, 2, 6, 1];
    
    let [three, five, four, two, six, one] = numbers;

    console.log(`One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`);
    console.log();
  }
  
  /**
  Exercise 3
  We have an object called 'user'.
  Write the destructuring assignment that reads:
  - 'name' property into the variable 'name'.
  - 'years' property into the variable 'age'.
  - 'isAdmin' property into the variable 'isAdmin' (false, if no such property)
  */
  {
    console.log("EXERCISE 3");
  
    let user = { name: "John", years: 30 };
  
    let { name, years: age, isAdmin=false } = user;
  
    console.log(name); // John
    console.log(age); // 30
    console.log(isAdmin); // false
    console.log();
  }
  
  /**
  Exercise 4
  Rewrite the code below to use array destructuring instead of assigning each value to a variable.
  */
  {
    console.log("EXERCISE 4");
  
    let person = [12, "Chris", "Owen"];
  
 
    let [age, firstName, lastName] = person;

    console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
    console.log();
  }
  
  /** 
  Exercise 5
  Rewrite the code below to use array destructuring instead of assigning each value to a variable.
  Make sure not to have unused variables.
  */
  {
    console.log("EXERCISE 5");
  
    let person = ["Chris", 12, "Owen"];
    
    const [firstName, , lastName] = person;
    console.log(`Name: ${firstName} ${lastName}`);
    console.log();
  }
  
  /**
  Exercise 6
  Using Array Destructuring get all of the names from this Nested Array
  */
  {
    console.log("EXERCISE 6");
  
    const moreStudents = [
      'Chris', 
      ['Ahmad', 'Antigoni'], 
      ['Toby', 'Sam']
    ];
  
    const [student1, [student2, student3], [student4, student5]] = moreStudents;
  
    console.log(student1, student2, student3, student4, student5);
    console.log();
  }