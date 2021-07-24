
var a1={
    name:'mama',
    marks:15};
var a2={
    name:'bharath',
    marks:87
};
var a3={
    name:'kumar',
    marks:53
};
var a4= {name:'navee',
marks:76};
var student = [a1,a2,a3,a4];
for (let i = 0; i < student.length; i++) 
{
    if (student[i].marks>90&&student[i].marks<101) 
    {
        student[i].push = {grade:'A'}
    }
    else if (student[i].marks>80&&student[i].marks<91)
    {
        student[i].push = {grade:'B'}
    }
    else if (student[i].marks>70&&student[i].marks<81)
    {
        student[i].push = {grade:'C'}
    }
    else{
        student[i].push = {grade:'D'}
    }
}
console.table(student);