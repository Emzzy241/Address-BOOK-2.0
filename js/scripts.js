// Adding our mock database now to the top

// Business Logic for AddressBook
function AddressBook() {
    this.contacts = {};
}

// Methods for our Mock database

AddressBook.prototype.addContact() = function(){
    
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

