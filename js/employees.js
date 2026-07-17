const employees = [
    {id:"ASE-001",name:"Ali Khan",department:"Development",designation:"Frontend Developer",status:"Active"},
    {id:"ASE-002",name:"Sara Ahmed",department:"HR",designation:"HR Manager",status:"Active"},
    {id:"ASE-003",name:"Usman Ali",department:"QA",designation:"QA Engineer",status:"Active"},
    {id:"ASE-004",name:"Fatima Noor",department:"Marketing",designation:"Marketing Officer",status:"Active"},
    {id:"ASE-005",name:"Hamza Tariq",department:"Finance",designation:"Accountant",status:"Active"},
    {id:"ASE-006",name:"Ayesha Malik",department:"Development",designation:"Backend Developer",status:"Active"},
    {id:"ASE-007",name:"Bilal Hassan",department:"QA",designation:"Software Tester",status:"Inactive"},
    {id:"ASE-008",name:"Hira Khan",department:"HR",designation:"Recruiter",status:"Active"},
    {id:"ASE-009",name:"Ahmed Raza",department:"Development",designation:"Full Stack Developer",status:"Active"},
    {id:"ASE-010",name:"Zain Ali",department:"Marketing",designation:"SEO Specialist",status:"Inactive"}
];

const container = document.getElementById("employeeContainer");
const search = document.getElementById("search");
const filter = document.getElementById("filterDepartment");

function displayEmployees(data){

    container.innerHTML="";

    data.forEach(emp=>{

        container.innerHTML += `
        <div class="employee-card">

            <h3>${emp.name}</h3>

            <p><strong>ID:</strong> ${emp.id}</p>

            <p><strong>Department:</strong> ${emp.department}</p>

            <p><strong>Designation:</strong> ${emp.designation}</p>

            <p class="status">${emp.status}</p>

        </div>
        `;

    });

}

displayEmployees(employees);

search.addEventListener("keyup",function(){

    const value=this.value.toLowerCase();

    const filtered=employees.filter(emp=>

        emp.name.toLowerCase().includes(value)

    );

    displayEmployees(filtered);

});

filter.addEventListener("change",function(){

    const dept=this.value;

    if(dept==="All"){

        displayEmployees(employees);

        return;

    }

    const filtered=employees.filter(emp=>emp.department===dept);

    displayEmployees(filtered);

});