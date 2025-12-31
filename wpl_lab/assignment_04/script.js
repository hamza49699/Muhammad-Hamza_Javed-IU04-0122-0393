const data = {
  Pakistan: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
  "United States": ["New York", "Los Angeles", "Chicago", "Houston"],
  India: ["Mumbai", "Delhi", "Bengaluru", "Chennai"],
  Canada: ["Toronto", "Vancouver", "Montreal", "Calgary"],
  "United Kingdom": ["London", "Manchester", "Birmingham"],
  Australia: ["Sydney", "Melbourne", "Brisbane"],
};

const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");
const cityCol = document.getElementById("city-col");


function populateCountries() {
  const placeholder = document.createElement("option");
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.selected = true;
  placeholder.textContent = "Choose...";
  countrySelect.appendChild(placeholder);

  Object.keys(data).forEach((country) => {
    const opt = document.createElement("option");
    opt.value = country;
    opt.textContent = country;
    countrySelect.appendChild(opt);
  });
}


countrySelect.addEventListener("change", function () {
  const country = this.value;
  citySelect.innerHTML = "";

  if (!country) {
    cityCol.classList.add("d-none");
    citySelect.disabled = true;
    return;
  }

  data[country].forEach((city) => {
    const opt = document.createElement("option");
    opt.value = city;
    opt.textContent = city;
    citySelect.appendChild(opt);
  });

  cityCol.classList.remove("d-none");
  citySelect.disabled = false;
});


document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("inputFirstname").value;
  const lastName = document.getElementById("inputLastname").value;
  const email = document.getElementById("inputEmail4").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;

  
  const selectedCourses = Array.from(
    document.querySelectorAll(".form-check-input[type='checkbox']:checked")
  ).map((checkbox) => checkbox.value);

  const courses = selectedCourses.join(", ") || "None";

  // Add data to the table
  const tableBody = document.querySelector("#dataTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${firstName} ${lastName}</td>
    <td>${email}</td>
    <td>${gender}</td>
    <td>${dob}</td>
    <td>${courses}</td>
    <td>${country}</td>
    <td>${city}</td>
  `;

  tableBody.appendChild(row);

  
  this.reset();
  cityCol.classList.add("d-none");
  citySelect.disabled = true;
});


populateCountries();


