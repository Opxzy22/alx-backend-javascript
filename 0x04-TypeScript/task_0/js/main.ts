// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

//  Create two instances of the Student interface
const student1: Student = {
    firstName: "Luna",
    lastName: "Max",
    age: 2,
    location: "New york"
};

const student2: Student = {
    firstName: "Major",
    lastName: "joe",
    age: 4,
    location: "indiana"
};

// Create an array containing the two student instances
const studentsList: Student[] = [student1, student2];

// Render a table and append a new row for each studen
const table = document.createElement("table")

const headerRow = table.insertRow();
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1)
headerCell1.textContent = "firstName";
headerCell2.textContent = "location";

