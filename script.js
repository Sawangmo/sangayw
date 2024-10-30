// Load the student data when the page loads
let studentData = [];

// Fetch the data from students.json
fetch("csvjson.json")
  .then((response) => response.json())
  .then((data) => {
    studentData = data; // Store the data in the studentData array
  })
  .catch((error) => console.error("Error loading student data:", error));

// Function to search for student by Serial Number and Student Number
function searchStudent() {
  // Get values from the input fields
  const slNo = document.getElementById("slNo").value;
  const studentNo = document.getElementById("studentNo").value;

  // Find a matching student
  const student = studentData.find(
    (s) => s["Sl. No."] == slNo && s["Student No."] === studentNo
  );

  // Display result in tabular format
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Clear previous result
  if (student) {
    resultDiv.innerHTML = `
            <table class="result-table">
                <tr>
                    <th>Student Number</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>PhoneNo</th>
                    <th>Marks</th>
                    <th>Report</th>

                </tr>
                <tr>
                    <td>${student["Student Number"]}</td>
                    <td>${student["Name"]}</td>
                    <td>${student["Age"]}</td>
                    <td>${student["Gender"]}</td>
                    <td>${student["PhoneNo"]}</td>
                    <td>${student["Marks"]}</td>
                  
                    <td style="font-weight: bold; color: #ff2222;background-color:#ffdd00">${student["Out of 20"]}</td>
                </tr>
            </table>
        `;
  } else {
    resultDiv.innerHTML = "<p>No matching student found.</p>";
  }
}
