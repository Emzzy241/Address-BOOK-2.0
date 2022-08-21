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

let contact = new Contact("Adanna", "Mercy" "Okoli", "+234-858585990", "adannaOk@hotmail.com");
let contact2 = new Contact("Jennifer", "Ebun", "Ololade", "+227-9099900919", "jOlolade@rocketmail.com");
<!-- The contact and contact2 variables were new objects created for our AddressBook database -->
addressBook.addContact(contact);
addressBook.addContact(contact2);
<!-- using our new method to store our contacts in the database -->
