;
var student1 = {
    firstName: "Benson",
    lastName: "Gikonyo",
    age: 26,
    location: "Nyeri"
};
var student2 = {
    firstName: "Dan",
    lastName: "Ombata",
    age: 32,
    location: "Kisumu"
};
var studentsList = [student1, student2];
var table = document.createElement("table");
var headerRow = document.createElement("tr");
var firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";
var locationHeader = document.createElement("th");
locationHeader.textContent = "Location";
headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    nameCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
