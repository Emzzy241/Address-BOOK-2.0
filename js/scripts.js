// Adding our mock database now to the top

// Business Logic for AddressBook
function AddressBook() {
    this.contacts = {};
}

// Methods for our Mock database

/* This method ppicks up that particular contact's firstName and 
 turns it into a key and make it equal to the contact itself
 Now we can see addressBook is an object containing another object called contacts
*/
 AddressBook.prototype.addContact = function(contact){
    this.contacts[contact.firstName] = contact;
}


// The constructor for Contacts will be written first and tested 
// in the console

function Contact(firstName, middleName, lastName, phoneNumber, email){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
}

// THe first method for this function: a method capable of 
// joining user's lastName and firstName together

Contact.prototype.fullName = function(){
    return this.lastName + " " + this.middleName + " " + this.firstName;
}

