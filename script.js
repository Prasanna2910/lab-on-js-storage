//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
localStorage.setItem('First Name','Prasanna');
localStorage.setItem('Last Name','Venketesh');
localStorage.setItem('age',18);
localStorage.setItem('Country','India');
localStorage.setItem('State','Tamil Nadu');
console.log(localStorage)

//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
localStorage.getItem("First Name");
localStorage.getItem("Last Name");
localStorage.getItem("age");
localStorage.getItem("Country");
localStorage.getItem("State");
console.log(localStorage)
//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
localStorage.removeItem("State");
console.log(localStorage);

//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
localStorage.clear();
console.log(localStorage);

//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};
var stringi = JSON.stringify(user);
console.log(stringi);
