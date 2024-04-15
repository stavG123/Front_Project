//Event listeners for 'load' and 'hashchange' events to call setCurr function
window.addEventListener("load", setCurr);
window.addEventListener("hashchange", setCurr);
//Function to set the current anchor element based on hashchange
function setCurr(ev) {
  let p, a, id;
  p = document.querySelector(":target");
  console.log(ev.type, p);
  if (p) {
    id = `a[href="#${p.id}"]`;
    document.querySelectorAll(".current").forEach((anchor) => {
      anchor.classList.remove("current");
    });
    a = document.querySelector(id);
    a.classList.add("current");
  }
}
var acc = document.getElementsByClassName("accordion");
var i;
//Event listeners for accordion functionality
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

let reservations = [];
// Event listener for reservation submission button
document.getElementById("btnClick1").addEventListener("click", makefunction);
document.getElementById("btnClick1").disabled = false;
// Function to handle reservation submission
function makefunction() {
  let Name = document.getElementById("txtName").value;
  if (Name == "") {
    alert("name?");
    return;
  }

  let userInputR1;
  for (let i = 0; i < document.getElementsByName("R1").length; i++) {
    if (document.getElementsByName("R1")[i].checked) {
      userInputR1 = document.getElementsByName("R1")[i].value;
    }
  }

  let userInputR2;
  for (let i = 0; i < document.getElementsByName("R2").length; i++) {
    if (document.getElementsByName("R2")[i].checked) {
      userInputR2 = document.getElementsByName("R2")[i].value;
    }
  }

  let checkboxes = document.getElementsByName("chkMovie[]");
  let checkedCheckboxes = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkedCheckboxes.push(checkboxes[i].value);
    }
  }

  if (checkedCheckboxes.length == 0) {
    alert("Please select at least one equipment.");
    return;
  }

  let room = document.getElementById("room-select").value;
  let answer = room + " " + userInputR1 + " " + userInputR2 + " ";
  if (reservations.indexOf(answer) > -1) {
    alert("Duplicate, you can only register once.");
  } else {
    reservations.push(answer);
    let done =
      "Your name, " +
      Name +
      ". Location at, " +
      room +
      " on " +
      userInputR1 +
      " " +
      userInputR2 +
      ". The registration has been approved. Bring please: " +
      checkedCheckboxes.join(", ");
    document.getElementById("taSchedule").value += done + "\n\n";
  }
}
// Event listener for clear button
document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("txtName").value = ""; 
  document.getElementById("taSchedule").value = "";
//////////////////////////////////////////////////////
  let checkboxes = document.querySelectorAll('.box input[type="checkbox"]');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = false;
});
//////////////////////////////////////////////////////
let defaultRadioButton = document.querySelector('.box.f input[type="radio"][checked]');
if (defaultRadioButton) {
    defaultRadioButton.checked = true;
}
//////////////////////////////////////////////////////////////
let defaultRadioButton2 = document.querySelector('.box.g input[type="radio"][checked]');
if (defaultRadioButton2) {
    defaultRadioButton2.checked = true;
}
//////////////////////////////////////////////////////////////////////
let selectElement = document.getElementById('room-select');
selectElement.selectedIndex = 0;
});
