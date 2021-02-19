const students = [
    {id:21, name:'omar sani'},
    {id:25, name:'mojammel'},
    {id:27, name:'maruf ahmed'},
    {id:30, name:'shomik ahmed'}
];
const names = students.map( s=> s.name);
const ids = students.map( s=> s.id);
const bigger = students.filter( s => s.id > 25);
const biggerOne = students.filter( s => s.id > 25);
const biggerFind = students.find( s => s.id > 27);

console.log(biggerFind);