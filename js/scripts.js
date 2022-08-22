// Adding our mock database now to the top
// new feature to our addressBook: unique id's

// Business Logic for AddressBook
function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
}

// Methods for our Mock database

/* This method picks up that particular contact's firstName and 
 turns it into a key and make it equal to the contact itself
 Now we can see addressBook is an object containing another object called contacts

 AddressBook.prototype.addContact = function(contact){
    this.contacts[contact.firstName] = contact;
};
*/

// The updated addContact() method for usind unique Id's
AddressBook.prototype.addContact = function(contact){
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
};


AddressBook.prototype.assignId = function(){
    this.currentId += 1;
    return this.currentId;
};


// this method will update this.currentId by 1 and then return the updated value.
// this mimics a database by creating sequentially incrementing unique ID values which are never
// replaced so they are always unique 

// finally we need update our addContact() method to call this assignId() method whenever we add a new Contact to the the AddressBook



// we need to make our database behave like a real one and a real one can find and delete contacts, 
// THe method for finding contact


AddressBook.prototype.findContact = function(id){
    if (this.contacts[id] != undefined){
        return this.contacts[id];
    }
    return false;
}


// The constructor for Contacts will be written first and tested 
// in the console

// instantiating our address book

let addressBook = new AddressBook(); 

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
};

