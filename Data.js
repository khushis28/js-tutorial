const users = [
  {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
    isActive: true
  },
  {
    id: 2,
    name: "Bob",
    email: "bob@example.com",
    isActive: false
  },
  {
    id: 3,
    name: "Charlie",
    email: "charlie@example.com",
    isActive: true
  }
];

console.log("Result =",users);


const jasonData = JSON.stringify(users);

console.log(jasonData);


