# Address BOOK APPLICATION

#### made by Mojiboye Emmanuel

### A website where you can add in your contacts, delete them or edit them

### Technologies Used
* Git
* Html
* CSS
* BootStrap
* Javscript 
* jQuery
* Bootstrap
* JavaScript Objects
* JavaScript Mock databases


### Description
_This is an application for adding contacts to an address Book.... In this website you can easily add in contacts, remove contacts or edit contacts and With my amazing mock database, you can add in new contacts just like the way you do with your mobile phone_

## Setup/Installation
* _Open the directory._
* _Click on the index.html file._
_Note: the website is designed to run on a web browser just be sure you have one. _
* _That's all the installation process you need to carry out. Have fun while working with this application. If you think its cool, be sure to give the application a thumbs up_

## Known Bugs
_As at the launching of this Project there are zero bugs in it. But if you do find a bug in it, be sure to notify me via my various social media handles below_

## WEBSITE LINK
https://github.com/Emzzy241/Mad-Libs

## License 
Licensed under the GNU General Public License 
© 2022 _by Mojiboye Emmanuel_ All Rights Reserved.

## Contact
_Connect with me @Emmanuel.9944 on instagram and on all other social media pages all @Emmanuel Oluwole_









## ALL THE MANUAL TESTS FOR MY APPLICATION

























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

Expected Output: {1: Contact, and 2: Contact}

<!-- Our test got failed because our prototypal method only picks one Emmanuel, and we added 2 Emmanuel: YES if we were using a datbase there would be unique identifiers, we can also write some code that creates unique id's for each of the added contacts -->



<!-- What we will do now is to add a uniqueid feature to our mock database and write a method for incrementing it by one when a new Contact is added: at least that way we can be rest assured that our method would use our new uniqueId as the key and won't see 2 different emmanuel's as the same thing like it did before when we were using the firstName as the key... This is done so that each time a new AddressBook is created it will have a currentId that begins with 0 and then we will define another protoype called assignId and update our addContact() method to work with this -->


<!-- after we've added new properties to our database and updated the method for adding contacts to use this new property: Let us rerun the previous test -->


<!-- retesting to check for uniqueness: -->
Test: "Testing if our method cand ifferentiate between two people if their names are both Emmanuel"

Code:
let emmaContact1 = new Contact("Emmanuel", "Michael", "Ojedayo", "+234059509049", "emaaaaa241@gmail.com");


let emmaContact2 = new Contact("Emmanuel", "Richie", "Bimbola", "+23405334566", "emazon241@gmail.com");

addressBook.addContact(emmaContact1);
addressBook.addContact(emmaContact2);

Expected Output: {1: Contact, and 2: Contact}

<!-- after updating our addContact() method, our function no longer uses firstName as the key for the value(contacts) but uses a unique Identifier; just like a real world database -->


<!-- Our application is starting to look great, another thing we need is to be able to both find and delete contact -->

Describe: The method for finding contacts

Test: "A test for checking if the findContact() methods can truly find a user's contact"

Code: 
let contact = new Contact("Adanna", "Mercy", "Okoli", "+234-858585990", "adannaOk@hotmail.com");

let contact2 = new Contact("Jennifer", "Ebun", "Ololade", "+227-9099900919", "jOlolade@rocketmail.com");

addressBook.findContact(2);
Expected Output: Contact {firstName:........ id: 2}


<!-- Now we can find Contacts by calling our method on a particular key, but wouldn't it be fun if we could also delete contacts too? Let us write a new deleteContact method, write a test for it and pass that test -->

Describe: The method for deleting contacts

Test: "When we run our method on a contact,It will find that contact and delete it"

Code:
let contact = new Contact("Adanna", "Mercy", "Okoli", "+234-858585990", "adannaOk@hotmail.com");

let contact2 = new Contact("Jennifer", "Ebun", "Ololade", "+227-9099900919", "jOlolade@rocketmail.com");

addressBook.deleteContact(2);

Expected Output: Contact 2 gets deleted and its Id is never reused when we add in more contacts

<!-- The Test was passed and moving on!!! -->

<!-- The last test for our business logic is the test for our new constructor(OtherAddresses constructor) for storing user's other addresses like work, school e.t.c -->

Describe: The method for showing users full address in one line and only separating it with a comma

Test: "When we run our method on a contact variable(datatype name is object) storing our contact object, it returns user's workAddress on a single line, users homeAddress on another line and user's schoolAddress on another line with commas separating them"

Code: 
let testOtherAddresses = new OtherAddresses("Ishaga", "Ogba", "Lagos");

let testOtherAddresses2 = new OtherAddresses("Matogun", "Arolambo", "Ogun");

testOtherAddresses.fullAddress();

Expected Output: OtherAddresses {street: 'Ishaga', city: 'city', state:'Lagos'........ }

<!-- Both our constructor and our method has been tested and the test has been passed -->

<!-- Hurray we are done with our business logic and each of our functions, constructor and even our database works perfectly well.... We need to create our index.html and create other files that interact with the user now -->