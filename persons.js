// Exercises:

// 3.1: Phonebook backend step1
// Implement a Node application that returns a hardcoded list of phonebook entries from the address http://localhost:3000/api/persons.

const express = require("express");
const app = express();

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.use(express.json());

app.get("/", (request, response) => {
  response.send("<h1>Hello Persons!</h1>");
});

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

const PORT = 3000;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
