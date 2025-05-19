//alert("Hello World"); // Creates an alert dialog with the message "Hello World"

var name = "Alice";
console.log(name); // Output: Alice

var name = "Bob"; // Redeclaring `name`
console.log(name); // Output: Bob (Var allows redeclaration)


let age = 25;
console.log(age); // Output: 25

age = 30; // Allowed, because `let` can be updated
console.log(age); // Output: 30

// let age = 35; ❌ ERROR (Let can't be redeclared in the same scope)
