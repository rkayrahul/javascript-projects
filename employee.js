const employees = [
  {
    id: 1,
    name: "Rahul",
    department: "IT",
    salary: 50000,
    experience: 2
  },
  {
    id: 2,
    name: "Priya",
    department: "HR",
    salary: 45000,
    experience: 3
  },
  {
    id: 3,
    name: "RAman",
    department: "IT",
    salary: 70000,
    experience: 5
  },
  {
    id: 4,
    name: "Sneha",
    department: "Finance",
    salary: 60000,
    experience: 4
  },
  {
    id: 5,
    name: "Karan",
    department: "IT",
    salary: 40000,
    experience: 1
  },
  {
    id: 6,
    name: "Simran",
    department: "HR",
    salary: 55000,
    experience: 6
  }
];

let it = employees.filter(function(element,index,array){
        return element.department==="IT"
})

console.log(it)

let salary = employees.filter(function(element,index,array){
        return element.salary >50000 && element.experience>3;
})

console.log(salary)

let hr = employees.filter(function(element,index,array){
  return element.department==="HR" && element.salary>50000;
})

console.log(hr)

