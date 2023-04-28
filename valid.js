rowData = null

function detailSubmit() {
    if (validate()) {
        let formdata = addValue()

        if (rowData == null) {
            addRow(formdata);
        }
        else
            updateRecord(formdata);

    }

}

// isValidDateOfBirth()
function addRow(formdata) {
    let table = document.getElementById("table");
    let row = table.insertRow(-1); // We are adding at the end
    let c1 = row.insertCell(0);
    let c2 = row.insertCell(1);
    let c3 = row.insertCell(2);
    let c4 = row.insertCell(3);
    let c5 = row.insertCell(4);
    let c6 = row.insertCell(5);
    let c7 = row.insertCell(6);
    let c8 = row.insertCell(7);
    let c9 = row.insertCell(8);
    // Add data to c1 and c2

    c1.innerHTML = formdata.firstname;
    c2.innerHTML = formdata.lastname;
    c3.innerHTML = formdata.email;
    c4.innerHTML = formdata.phone;
    c5.innerHTML = formdata.date;
    c6.innerHTML = formdata.age;
    c7.innerHTML = formdata.subject;
    c8.innerHTML = ' <button onclick="onEdit(this)"value="button"id="button"class="btn">Edit</button>'
    c9.innerHTML = '<button onclick="onDelete(this)"value="button" id="button">Delete</button>'
}




// how to stop data table remove after refresh in js-------568568587867878----------------------------------------------------------

// Get the table element
const table = document.getElementById('table');
// Check if there is a saved state for the table in localStorage
if (localStorage.getItem('tableState')) {
  // Retrieve the saved state
  const tableState = JSON.parse(localStorage.getItem('tableState'));
  // Set the state of the table
  table.innerHTML = tableState;
}
// Add an event listener to the window object to save the state of the table when the page is unloaded
window.addEventListener('unload', function() {
  // Save the state of the table to localStorage
  localStorage.setItem('tableState', JSON.stringify(table.innerHTML));
});

let erors = false
const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const date = document.getElementById('date');
const age = document.getElementById('age');
const subject = document.getElementById('subject');

function addValue() {

    const formdata = { firstname: "", lastname: "", email: "", phone: "", date: "", age: "", subject: "" };
    console.log(formdata);
    formdata.firstname = document.getElementById("firstname").value;
    formdata.lastname = document.getElementById("lastname").value;
    formdata.email = document.getElementById("email").value;
    formdata.phone = document.getElementById("phone").value;
    formdata.date = document.getElementById("date").value;
    formdata.age = document.getElementById("age").value;
    formdata.subject = document.getElementById("subject").value;

    form.reset();
    return formdata
}

//Final data validate
const successMsg = (Val) => {
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length - 1;
    for (let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            let sRate = 0 + i;
        } else {
            return false;
        }
    }
}
//More email validate
const isEmail = (emailVal) => {
    let atSymbol = emailVal.indexOf("@");
    if (atSymbol < 1) return false;
    let dot = emailVal.lastIndexOf('.');
    if (dot <= atSymbol + 3) return false;
    if (dot === emailVal.length - 1) return false;
    return true;
}

function calculateAge() {
    let date = document.getElementById("date").value;
    let today = new Date();
    let birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    let monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    document.getElementById("age").innerHTML = age;
    console.log(age);
  }
  

// function isValidDateOfBirth(dateString) {
//     var today = new Date();
//     var birthDate = new Date(dateString);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     return age;
//   }
 
//   isValidDateOfBirth; // false (person is not yet 18)
  
//define validate function

const validate = () => {
    const firstenameVal = firstname.value.trim();
    const lastenameVal = lastname.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const dateval = date.value.trim();
    const ageval = age.value.trim();
    const subjectval = subject.value.trim();
    //validate first name
    erors = true
    if (firstenameVal === "") {
        setErrorMsg(firstname, 'firstname can not be blank.');
    } else if (firstenameVal.length <= 2) {
        setErrorMsg(firstname, 'firstname min 3 characters.');
    } else {
        setSuccessMsg(firstname);
    }
    //validate last name
    if (lastenameVal === "") {
        setErrorMsg(lastname, 'lastname can not be blank.');
    } else if (lastenameVal.length <= 2) {
        setErrorMsg(lastname, 'lastname min 3 characters.');
    } else {
        setSuccessMsg(lastname);
    }
    //validate email address
    if (emailVal === "") {
        setErrorMsg(email, 'email can not be blank.');
    } else if (!isEmail(emailVal)) {
        setErrorMsg(email, 'Not a valid Email.');
    } else {
        setSuccessMsg(email);
    }
    //validate phone
    if (phoneVal === "") {
        setErrorMsg(phone, 'phone can not be blank.');
    } else if (phoneVal.length != 10) {
        setErrorMsg(phone, 'Not a valid phone number.');
    } else {
        setSuccessMsg(phone);
    }
    //validate dateval
    if (dateval === "") {
        setErrorMsg(date, 'birthdate write here.');
    }
    else {
        setSuccessMsg(date);
    }
    //validate ageval
    if (ageval === "") {
        setErrorMsg(age, 'age must to write here.');
    }
        


    else {
        setSuccessMsg(age);
    }
    //validate subject
    if (subjectval === "") {
        setErrorMsg(subject, 'chose your subject.');
    }

    else {
        setSuccessMsg(subject);

    }
       
        
      

    if ((firstenameVal === "") || (firstenameVal.length <= 2) || (lastenameVal === "") || (lastenameVal.length <= 2) || (emailVal === "") || (!isEmail(emailVal)) || (phoneVal === "") || (phoneVal.length != 10) || (dateval === "") || (ageval === "")
        || (subjectval === ""))

        erors = false
    return erors
}
calculateAge()
// function calculateAge() {
//     var dob = document.getElementById("date").value;
//     var today = new Date();
//     var birthDate = new Date(dob);
//     var age = today.getFullYear() - birthDate.getFullYear();
//     var monthDiff = today.getMonth() - birthDate.getMonth();
//     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
//       age--;
//     }
//     document.getElementById("age").innerHTML = age;
//   }
  

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}
function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function readFormdata() {
    let formdata = {};
    formdata["firstname"] = document.getElementById("firstname").value;
    formdata["lastname"] = document.getElementById("lastname").value;
    formdata["email"] = document.getElementById("email").value;
    formdata["phone"] = document.getElementById("phone").value;
    formdata["date"] = document.getElementById("date").value;
    formdata["age"] = document.getElementById("age").value;
    formdata["subject"] = document.getElementById("subject").value;
    console.log("formdata", formdata["firstname"], formdata)
    return formdata;
}

function onEdit(element) {
    rowData = element.parentElement.parentElement;
    document.getElementById("firstname").value = rowData.cells[0].innerHTML;
    document.getElementById("lastname").value = rowData.cells[1].innerHTML;
    document.getElementById("email").value = rowData.cells[2].innerHTML;
    document.getElementById("phone").value = rowData.cells[3].innerHTML;
    document.getElementById("date").value = rowData.cells[4].innerHTML;
    document.getElementById("age").value = rowData.cells[5].innerHTML;
    document.getElementById("subject").value = rowData.cells[6].innerHTML;
}
function updateRecord(formdata) {
    console.log({ rowData, formdata });

    rowData.cells[0].innerHTML = formdata.firstname;
    rowData.cells[1].innerHTML = formdata.lastname;
    rowData.cells[2].innerHTML = formdata.email;
    rowData.cells[3].innerHTML = formdata.phone;
    rowData.cells[4].innerHTML = formdata.date;
    rowData.cells[5].innerHTML = formdata.age;
    rowData.cells[6].innerHTML = formdata.subject;
    console.log(rowData);

    rowData = null;
    console.log(rowData);
}
function onDelete(element) {
    if (confirm("Are you sure to delete this data?")) {
        let row = element.parentElement.parentElement;
        document.getElementById("table").deleteRow(row.rowIndex);
    }
}
