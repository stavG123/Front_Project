document.getElementById("selTitle").addEventListener("change", selectcoach);
// Array to store jason data and Variable to store total price
let myJSON = [];
let total = 0;
// Fetch JSON data from a file
fetch("jason/html2.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // Store JSON data in myJSON array
    myJSON = data;
    let mySelect = document.getElementById("selTitle");
    // Populate dropdown options with coach names
    myJSON.map(function (obj, i) {
      let myOption = document.createElement("option");
      myOption.text = obj.coach_name;
      myOption.value = i;
      mySelect.appendChild(myOption);
    });
    // Trigger change event to select the first option by default
    let event = new Event("change");
    mySelect.dispatchEvent(event);
  })
  .catch(function (error) {
    console.log(error);
  });
// Event listener for button click to add selected coach to cart
document.getElementById("button").addEventListener("click", addToCart);
// Function to handle dropdown selection change
function selectcoach() {
  let myIndex = document.getElementById("selTitle").value;
  let userCoach = myJSON[myIndex];
  document.getElementById("spnAuthor").innerHTML = userCoach.coach_stroke;
  document.getElementById("spnISBN").innerHTML = userCoach.coach_number;
  document.getElementById("spnPages").innerHTML = userCoach.coach_age;
  document.getElementById("spnPrice").innerHTML = userCoach.coach_lesson_price;
  document.getElementById("imgBook").src = "Photos/" + userCoach.coach_photo;
}
// Function to add selected coach to cart
function addToCart() {
  let myIndex = document.getElementById("selTitle").value;
  let userCoach = myJSON[myIndex];
  //the price it the total box

  //text area:
  document.getElementById("taCart").value +=
    userCoach.coach_name +
    " (" +
    userCoach.coach_number +
    ") $" +
    userCoach.coach_lesson_price.toFixed(2) +
    "\n";
  total += userCoach.coach_lesson_price;

  document.getElementById("spnTotal").innerHTML = "$" + total.toFixed(2);
}

document.getElementById("clearButton").addEventListener("click", clearAll);
// Function to clear all selections
function clearAll() {
  // Clear selected coach details
  document.getElementById("spnAuthor").innerHTML = "";
  document.getElementById("spnISBN").innerHTML = "";
  document.getElementById("spnPages").innerHTML = "";
  document.getElementById("spnPrice").innerHTML = "";
  document.getElementById("imgBook").src = "";
  document.getElementById("spnAuthor").innerHTML = "";
  // Clear cart items and total price
  document.getElementById("taCart").value = " ";
  document.getElementById("selTitle").value = "0";
  total = 0;
  document.getElementById("spnTotal").innerHTML = "$0.00";

  // Set Michel Phelps' details
  document.getElementById("spnAuthor").innerHTML = "Butterfly";
  document.getElementById("spnISBN").innerHTML = "484-545-1264";
  document.getElementById("spnPages").innerHTML = "33";
  document.getElementById("spnPrice").innerHTML = "12";
  document.getElementById("imgBook").src = "Photos/mp.jpeg";
}
