<!-- Starting the addressBOOK project -->

<!-- Starting this project I Emmanuel will try as much as possible to break things down for anyone and everyone's understanding.... YES we will be needing a databasa, a mock one would be created but before that let's write some functions and some lovely methods too -->

<!-- Testing for all the functions in our business logic -->

<!-- The first test is a test to check if the constructor for taking user details such as firstname, lastname, email, e.t.c is working -->


Describe: The very first constructor of our Application; the function for Contacts 

Test: "It will check if the console remembers our constructor and associates it with the testContact variable"
Code: let testContact = new Contacts("Emmanuel", "Oluwole", "Mojiboye", "09012857304", "emzzyoluwole@gmail.com");
testContact.MiddleName;

Expected Output: 'Oluwole'

Test: "A prototype method would be created for Contacts constructor and the method would concatenate user's last name and first name together"
Code: let testContact = new Contacts("Emmanuel", "Oluwole", "Mojiboye", "09012857304", "emzzyoluwole@gmail.com");
<!-- this first one is for re instantiating our variable then to test now we do: -->
testContact.fullName();

Expected Output: 'Mojiboye Emmanuel'