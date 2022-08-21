// The constructor for Contacts will be written first and tested 
// in the console

function Contacts(firstName, middleName, lastName, phoneNumber, email){
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
}

// THe first method for this function: a method capable of 
// joining user's lastName and firstName together

Contacts.prototype.fullName = function(){
    return this.lastName + " " + this.firstName;
}