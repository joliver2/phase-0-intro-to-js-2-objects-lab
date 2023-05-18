const employee = {
    name: "Jeremy",
    streedAddress: "6111 W Main St."
}

function updateEmployeeWithKeyAndValue(Obj, key, value) {
    const newEmployee = {...Obj, ...{ [key]: value } }
    return newEmployee
}