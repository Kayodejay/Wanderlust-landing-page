// For Toggle Button at TopRight corner in reduced screen sizes

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus == false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "300px";

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true

    } else if (toggleNavStatus == true) {
        getSidebar.style.width = "0px"

        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false
    }
}

// FORM VALIDATION

function validateForm() {
    let getFirstName = document.querySelector('#firstname').value;
    let getLastName = document.querySelector('#lastname').value;
    let getEmailAddress = document.querySelector('#emailaddress').value;
    let getMessage = document.querySelector('#message').value;

    if (getFirstName == '' || getLastName == '') {
        return alert('Complete name input please');
    } else if (getEmailAddress == '' || getMessage == '') {
        return alert('Input not completely filled');
    } else {
        return alert('Thank you for contacting us, Your form has been submitted')
    }
}

function validateEnquiryForm() {
    let getEnqName = document.querySelector('#name').value;
    let getEnqEmail = document.querySelector('#email').value;
    let getEnqNumber = document.querySelector('#number').value;
    let getEnqAdult = document.querySelector('#adult').value;
    let getEnqChild = document.querySelector('#children').value;
    let getEnquiry = document.querySelector('#enquiry').value;

    if (getEnqName == '') {
        return alert('Name input not filled');
    } else if (getEnqEmail == '') {
        return alert('Email input not filled');
    } else if (getEnqNumber == '') {
        return alert('Enter valid contact Number');
    } else if (getEnqAdult == '' || getEnqChild == '') {
        return alert('Enter at least a number');
    } else if (getEnquiry == '') {
        return alert('Type in Enquiries');
    } else {
        return alert('Thank You for choosing Wanderlust!');
    }
}

