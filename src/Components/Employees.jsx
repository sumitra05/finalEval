import React from "react";

const Employees = () => {
    const [name, setName] = React.useState("");
    const [gender, setGender] = React.useState("");
    const [department, setDepartment] = React.useState("");
    const [role, setRole] = React.useState("");
    const [salary, setSalary] = React.useState("");
    const [employees, setEmployees] = React.useState([]);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch(`http://localhost:3001/employees`)
        .then((res) => res.json())
        .then((res) => setEmployees(res));
    };

    const handleAdd = () => {
        console.log(name);
        const payload = {
        name: name,
        gender: gender,
        department: department,
        role: role,
        salary: salary,
        status: false,
        };

        const payloadjson = JSON.stringify(payload);

        fetch(`  http://localhost:3001/employees`, {
        method: "POST",
        body: payloadjson,
        headers: {
            "content-type": "application/json",
        },
        }).then(() => {
            getData();
        });
    };

    return (
        <div>
        <h1>Employee Dashboard</h1>
        <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
            type="text"
            placeholder="Gender"
            onChange={(e) => setGender(e.target.value)}
        />
        <br />
        <input
            type="text"
            placeholder="Department"
            onChange={(e) => setDepartment(e.target.value)}
        />
        <br />
        <input
            type="text"
            placeholder="Role"
            onChange={(e) => setRole(e.target.value)}
        />
        <br />
        <input
            type="text"
            placeholder="Salary"
            onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <button onClick={handleAdd}>ADD EMPLOYEE</button>
        <hr />

        <button>Show All Department</button>
        <button>Show Marketing</button>
        <button>Show HR</button>
        <button>Show IT</button>
        <button>Show Finance</button>
        <br />
        <br />
        <button>Sort By Salary Ascending</button>
        <button>Sort by Salary Descending</button>

        {employees.map((item) => {
            return (
                <div key={item.id}>
                    <div>{item.name}</div>
                    <div>{item.gender}</div>
                    <div>{item.department}</div>
                    <div>{item.role}</div>
                    <div>{item.salary}</div>
                    <br />
                    <br />
                </div>
            );
        })}
        </div>
    );
};

export  default Employees;

