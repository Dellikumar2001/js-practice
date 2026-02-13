//variable declaration
var $_book_Title; //var and let has difference but let is recent so we use it 
let bookName$;
//variable initialization
bookName$ = "harry potter";

let bookSection = "harry potter";
//we can use single "let" for two variables
let bookAuthour = 'J.K.Rowling', 
    bookPublisher = "IEEE";
    bookName$ = "HP"; //we can edit 
    bookName$ = bookAuthour; // we can assign variable value to another variable

console.log(bookSection, bookAuthour,"\n",bookPublisher);

/* rules of Naming variable(Indentifier)
    - unique
    - $, _, numbers at end  - it is allowed
    keywords are not allowed
    case sensitive
*/
let student, name;
name = "delli";
student = name;
console.log(student);

//const ben; - it shows error because const can't be decleared without initialization