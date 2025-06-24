const employees = [
    {
        fullName: "Neha Sharma",
        age: 32,
        location: "Chennai"
    },
    {
        fullName: "Rohan Mehta",
        age: 38,
        location: "Hyderabad"
    },
    {
        fullName: "Ayesha Khan",
        age: 25,
        location: "Pune"
    },
    {
        fullName: "Vikram Singh",
        age: 29,
        location: "Delhi"
    },
    {
        fullName: "Anjali Desai",
        age: 35,
        location: "Ahmedabad"
    },
    {
        fullName: "Kunal Joshi",
        age: 27,
        location: "Kolkata"
    },
    {
        fullName: "Meera Pillai",
        age: 30,
        location: "Chandigarh"
    },
    {
        fullName: "Zahid Ali",
        age: 23,
        location: "Delhi"
    },
    {
        fullName: "Ritika Sen",
        age: 31,
        location: "Pune"
    },
    {
        fullName: "Armaan Kapoor",
        age: 26,
        location: "Noida"
    }
];

const updatedEmployees = employees.map(emp => ({
    ...emp,
    isSenior: emp.age > 30
}));
console.log("Updated Employees with Senior Flag:", updatedEmployees);

const metroEmployees = employees.filter(emp =>
    emp.location === "Delhi" || emp.location === "Noida"
);
console.log("Employees from Delhi or Noida:", metroEmployees);

const totalEmployeeAge = employees.reduce((sum, emp) => sum + emp.age, 0);
console.log("Total Age of Employees:", totalEmployeeAge);
