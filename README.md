<!-- Starting the addressBOOK project -->

<!-- Starting this project I Emmanuel will try as much as possible to break things down for anyone and everyone's understanding.... YES we will be needing a databasa, a mock one would be created but before that let's write some functions and some lovely methods too -->

<!-- Testing for all the functions in our business logic -->

<!-- The first test is a test to check if the constructor for taking user details such as firstname, lastname, email, e.t.c is working -->


Describe: The very first constructor of our Application; the function for Contacts 

Test: "It will check if the console remembers our constructor and associates it with the testContact variable"
Code: let testContact = new Contact("Emmanuel", "Oluwole", "Mojiboye", "09012857304", "emzzyoluwole@gmail.com");

testContact.MiddleName;

Expected Output: 'Oluwole'

Test: "A prototype method would be created for Contacts constructor and the method would concatenate user's last name and first name together"
Code: let testContact = new Contact("Emmanuel", "Oluwole", "Mojiboye", "09012857304", "emzzyoluwole@gmail.com");
<!-- this first one is for re instantiating our variable then to test now we do: -->
testContact.fullName();

Expected Output: 'Mojiboye Oluwole Emmanuel'


Describe: The second constructor; the constructor for our database has been written: Let us create the first method for our database that will help us to add in contacts

Test: "Testing the first method for our mock database: the addContact() method"
Code:

let addressBook = new AddressBook(); 
<!-- we first instantiate(create) AddressBook object -->

let contact = new Contact("Adanna", "Mercy", "Okoli", "+234-858585990", "adannaOk@hotmail.com");

let contact2 = new Contact("Jennifer", "Ebun", "Ololade", "+227-9099900919", "jOlolade@rocketmail.com");
<!-- The contact and contact2 variables were new objects created for our AddressBook database -->
addressBook.addContact(contact);
addressBook.addContact(contact2);
<!-- using our new method to store our contacts in the database -->


<!-- A test to check for uniqueness: -->
Test: "Testing if our method candifferentiate between two people if their names are both Emmanuel"

Code:
let emmaContact1 = new Contact("Emmanuel", "Michael", "Ojedayo", "+234059509049", "emaaaaa241@gmail.com");


let emmaContact2 = new Contact("Emmanuel", "Richie", "Bimbola", "+23405334566", "emazon241@gmail.com");

addressBook.addContact(emmaContact1);
addressBook.addContact(emmaContact2);

<!-- Our test got failed because our prototypal method only picks one Emmanuel, and we added 2 Emmanuel: YES if we were using a datbase there would be unique identifiers, we can also write some code that creates unique id's for each of the added contacts -->

<!-- What we will do now is to add a uniqueid feature to our mock database and write a method for incrementing it by one when a new Contact is added: at least that way we can be rest assured that our method won't see 2 different emmanuel's as the same thing like it did before -->


<!-- after we've added new properties to our database and updated the method for adding contacts to use this new property: Let us rerun the previous test -->

