interface Student {
    firstName:string;
    lastName: string;
    age: number;
    location: string;
};

const student1 : Student = {
    firstName:"Benson",
    lastName: "Gikonyo",
    age: 26,
    location: "Nyeri"
};

const student2: Student = {
    firstName: "Dan",
    lastName: "Ombata",
    age: 32,
    location: "Kisumu"
};

let studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

const firstNameHeader = document.createElement("th");
firstNameHeader.textContent = "First Name";

const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(firstNameHeader);
headerRow.appendChild(locationHeader);
table.appendChild(headerRow);

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    nameCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);

});

document.body.appendChild(table);
