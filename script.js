// Load the student data when the page loads
let studentData = [];

// Fetch the data from students.json
fetch("students.json")
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
                    <th>Serial Number</th>
                    <th>Student Number</th>
                    <th>Student Name</th>
                    <th>Presentation</th>
                    <th>Content</th>
                    <th>Viva</th>
                    <th>Report</th>
                    <th>Total Marks (Out of 100)</th>
                    <th>Total Marks (Out of 20)</th>
                </tr>
                <tr>
                    <td>${student["Sl. No."]}</td>
                    <td>${student["Student No."]}</td>
                    <td>${student["Student Name"]}</td>
                    <td>${student["Presentation"]}</td>
                    <td>${student["Content"]}</td>
                    <td>${student["Viva"]}</td>
                    <td>${student["Report"]}</td>
                    <td>${student["Out of 100"]}</td>
                    <td style="font-weight: bold; color: #ff2222;background-color:#ffdd00">${student["Out of 20"]}</td>
                </tr>
            </table>
        `;
  } else {
    resultDiv.innerHTML = "<p>No matching student found.</p>";
  }
}
