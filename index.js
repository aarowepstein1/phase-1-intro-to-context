/* 
1. Employees always check in and check out.
2. Employees always check in and out on the hour.
3. The time is represented on a 24-hour clock (1300 is 1:00 pm);
   this keeps the math easier and is the standard in most of the world.
4. When timestamps are needed, they will be provided as Strings in
   the form: "YYYY-MM-DD 800" or "YYYY-MM-DD 1800" e.g. "2018-01-01 2300".
5. Employees will never work across days, e.g., in at 2200 and
   out at 0400 the next day
*/
function createEmployeeRecord([firstName, famName, title, payPerHour]){
    const employeeRecord = {
        firstName: firstName,
        familyName: famName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return employeeRecord;

}