const normalPerson = {
    firstName: 'Robi',
    lastName: 'uddin',
    salary: 20000,
    
   getFullName: function(){
       console.log(this.firstName, this.LastName);
       
   },

   chargeBill: function(amount){
       console.log(this);
       this.salary = this.salary-amount;
       return this.salary;

   } 
}
// normalPerson.chargeBill(1500);
// normalPerson.chargeBill(5000);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName:'Hero',
    lastName:'Balam',
    salary: 50000,
}
const friendlyPerson = {
    firstName:'Hero',
    lastName:'Golam',
    salary:40000,
}
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// console.log(heroPerson.salary);


// const friendlyPersonBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyPersonBill(3000);
// console.log(friendlyPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 5000, 3000, 500);
// console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson,[5000, 4000, 300]);
normalPerson.chargeBill.apply(heroPerson,[3000, 2000, 100])
console.log(heroPerson.salary);