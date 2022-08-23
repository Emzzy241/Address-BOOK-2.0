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
AddressBook.prototype.addContact = function (contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
};


AddressBook.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
};


// this method will update this.currentId by 1 and then return the updated value.
// this mimics a database by creating sequentially incrementing unique ID values which are never
// replaced so they are always unique 

// finally we need update our addContact() method to call this assignId() method whenever we add a new Contact to the the AddressBook



// we need to make our database behave like a real one and a real one can find and delete contacts, 
// THe method for finding contact


AddressBook.prototype.findContact = function (id) {
    if (this.contacts[id] !== undefined) {
        return this.contacts[id];
    }
    return false;
}

// The method for deleting contact

AddressBook.prototype.deleteContact = function (id) {
    if (this.contacts[id] === undefined) {
        return false;

    }
    delete this.contacts[id];
    return true;
};



// The constructor for Contacts will be written first and tested 
// in the console


function Contact(firstName, middleName, lastName, phoneNumber, email, workAddress, schoolAddress, homeAddress) {
    this.firstName = firstName;
    this.middleName = middleName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.workAddress = workAddress;
    this.schoolAddress = schoolAddress;
    this.homeAddress = homeAddress;
}

// Let's make things easier by creating another constructor for(home, school, and city addresses)

// function OtherAddresses(street, city, state) {
//     this.street = street;
//     this.city = city;
//     this.state = state;
// }
// OtherAddresses

// THe first method for Contact constructor: a method capable of 
// joining user's lastName and firstName together

Contact.prototype.fullName = function () {
    return this.lastName + " " + this.middleName + " " + this.firstName;
};

// The first method for otherAddresses constructor:

// OtherAddresses.prototype.fullAddress = function () {
//     return this.street + ", " + this.city + ", " + this.state;
// }


// instantiating our address book

let addressBook = new AddressBook();


// Done with the business logic, now moving on to the userInterface logic

// The userInterface Logic -----------------

// Function for edit contact

// when user clicks on the edit button this function will get called, and
// if this function gets called, all the contact details that has been removed 
// by our Add button and saved will appear back in each input field so the user can edit it

function editContact(id) {
    let contact = addressBook.findContact(id);

    $("input#new-contact-first-name").val(contact.firstName);
    $("input#new-contact-middle-name").val(contact.middleName);
    $("input#new-contact-last-name").val(contact.lastName);
    $("input#new-contact-phone-number").val(contact.phoneNumber);
    $("input#new-contact-email-address").val(contact.email);
    // $(".work-street").val(contact.workAddress.street);
    // $(".work-city").val(contact.workAddress.city);
    // $(".work-state").val(contact.workAddress.state);
    // $(".school-street").val(contact.schoolAddress.street);
    // $(".school-city").val(contact.schoolAddress.city);
    // $(".school-state").val(contact.schoolAddress.state);
    // $(".home-street").val(contact.homeAddress.street);
    // $(".home-city").val(contact.homeAddress.city);
    // $(".home-state").val(contact.homeAddress.state);

    addressBook.deleteContact(id);
    $("#show-all-contacts").hide();

}

// now we need a function to attach eventListeners to our contacts
// so we want to attach event listeners for when we click on li it displays our contacts
// we could do that in vanilla javaScript by using onClick but jQuery seems easy
// After the contact eventListeners has been attached, we want to give user the power to be able to 
// delete and edit contact right inside our attachContactListeners() function

function attachContactListeners() {
    
    $("ul#showing-contacts").on("click", "li", function () {
        showContact(this.id);
    });
    // function for delete Contact
    $("div#delButton").on("click", ".deleteButton", function () {
        addressBook.deleteContact(this.id);
        $("#show-all-contacts").hide();
        displayingContactDetails(addressBook);
    });
    // function for edit Contact
    $("#edButton").on("click", ".editButton", function () {
        editContact(this.id);
        
    });
}


// function for displaying contact details

function displayingContactDetails(displayingAddressBook) {
    let contactsList = $("ul#showing-contacts");
    let htmlForContactInfo = "";
    Object.keys(displayingAddressBook.contacts).forEach(function (key) {
        let contact = displayingAddressBook.findContact(key);

        htmlForContactInfo += "<li id=" + contact.id + ">" + contact.lastName + " " + contact.middleName + " " + contact.firstName + "</li>";
    });
    console.log(htmlForContactInfo);
    contactsList.html(htmlForContactInfo)
}

// the showContact() function

function showContact(contactId) {
    const contact = addressBook.findContact(contactId);
    $("#show-all-contacts").show();
    $(".show-first-name").html(contact.firstName);
    $(".show-middle-name").html(contact.middleName);
    $(".show-last-name").html(contact.lastName);
    $(".show-phone-number").html(contact.phoneNumber);
    $(".show-email-address").html(contact.email);
    // $(".work-address").html(contact.workAddress.fullAddress());
    // $(".school-address").html(contact.schoolAddress.fullAddress());
    // $(".home-address").html(contact.homeAddress.fullAddress());

    // Buttons for edit and delete
    let delButton = $("#delButton");
    delButton.empty();
    delButton.html("<button class='deleteButton btn btn-danger' id=" + contact.id + ">Delete</button>");

    let edButton = $("#edButton");
    edButton.empty();
    edButton.html("<button class='editButton btn btn-success' id=" + contact.id + ">Edit</button");
}

//  Function for reset fields

function resetFields() {
    $("input#new-contact-first-name").val();
    $("input#new-contact-middle-name").val();
    $("input#new-contact-last-name").val();
    $("input#new-contact-phone-number").val();
    $("input#new-contact-email-address").val();
    // $("input.work-street").val();
    // $("input.work-city").val();
    // $("input.work-state").val();
    // $("input.home-street").val();
    // $("input.home-city").val();
    // $("input.home-state").val();
    // $("input.school-street").val();
    // $("input.school-city").val();
    // $("input.school-state").val();
}

$(document).ready(function () {
    attachContactListeners();
    // $("#work-button").click(function () {
    //     $("#work").show();
    // });
    // $("#home-button").click(function () {
    //     $("#home").show();
    // });
    // $("#school-button").click(function () {
    //     $("#school").show();
    // });

    $("form#add-contact").submit(function (e) {

        e.preventDefault();
        let inputtedFirstName = $("input#new-contact-first-name").val();
        let inputtedMiddleName = $("input#new-contact-middle-name").val();
        let inputtedLastName = $("input#new-contact-last-name").val();
        let inputtedPhoneNumber = $("input#new-contact-phone-number").val();
        let inputtedEmail = $("input#new-contact-email-address").val();

        $("input#new-contact-first-name").val("");
        $("input#new-contact-middle-name").val("");
        $("input#new-contact-last-name").val("");
        $("input#new-contact-phone-number").val("");
        $("input#new-contact-email-address").val("");

        // const inputtedWorkStreet = $("input.work-street").val();
        // const inputtedWorkCity = $("input.work-city").val();
        // const inputtedWorkState = $("input.work-state").val();

        // $("input.work-street").val();
        // $("input.work-city").val();
        // $("input.work-state").val();

        // const inputtedHomeStreet = $("input.home-street").val();
        // const inputtedHomeCity = $("input.home-city").val();
        // const inputtedHomeState = $("input.home-state").val();

        // $("input.home-street").val();
        // $("input.home-city").val();
        // $("input.home-state").val();

        // const inputtedSchoolStreet = $("input.school-street").val();
        // const inputtedSchoolCity = $("input.school-city").val();
        // const inputtedSchoolState = $("input.school-state").val();

        // $("input.school-street").val();
        // $("input.school-city").val();
        // $("input.school-state").val();

        // let inputtedWorkAddress = new OtherAddresses(inputtedWorkStreet, inputtedWorkCity, inputtedWorkState)
        // let inputtedHomeAddress = new OtherAddresses(inputtedHomeStreet, inputtedHomeCity, inputtedHomeState)
        // let inputtedSchoolAddress = new OtherAddresses(inputtedSchoolStreet, inputtedSchoolCity, inputtedSchoolState)
        
        // let newContact = new Contact(inputtedFirstName, inputtedMiddleName , inputtedLastName, inputtedPhoneNumber, inputtedEmail, inputtedWorkAddress, inputtedHomeAddress, inputtedSchoolAddress);
        
        let newContacts = new Contact(inputtedFirstName, inputtedMiddleName, inputtedLastName, inputtedPhoneNumber, inputtedEmail /*, inputtedWorkAddress, inputtedHomeAddress, inputtedSchoolAddress*/)
        
        // calling on the addressbook variabe instantiator

        addressBook.addContact(newContacts);
        console.log(addressBook.contacts);



        displayingContactDetails(addressBook);

        // showing all our contacts in the span div after we click on the full name of the new contact

        $(".contacts").last().click( function(){
            $("#show-all-contacts").show();
        
            $(".show-first-name").text(newContacts.firstName);
            $(".show-middle-name").text(newContacts.middleName);
            $(".show-last-name").text(newContacts.lastName);
            $(".show-phone-number").text(newContacts.phoneNumber);
            $(".show-email-address").text(newContacts.email);

            // $(".work-address").text(newContact.workAddress.fullAddress());
            // $(".school-address").text(newContact.schoolAddress.fullAddress());
            // $(".home-address").text(newContact.homeAddress.fullAddress());
            
        });

        resetFields();
        e.preventDefault();
        console.log(newContacts);

    });

});