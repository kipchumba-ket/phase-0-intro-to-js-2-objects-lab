// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
}

function 
updateEmployeeWithKeyAndValue(obj, key, value) 
{
return Object.assign ({}, obj, {[key]:value})
}
function 
destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) 
{
obj[key] = value
return obj
}

function 
deleteFromEmployeeByKey(employee, key) 
{
  const newObj = Object.assign ({}, employee, key)
delete newObj[key]
return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]
  return employee
}