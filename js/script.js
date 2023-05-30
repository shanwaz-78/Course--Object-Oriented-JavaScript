// function declaration represents class declaration.
function user_details(name, score) {
  this.name = name;
  this.score = score;
}

user_details.prototype.login = function () {
  console.log(this.name, "Has logged in");
};

function admin(...args) {
  // use the apply to get the format from user_detials for our arguments for admin he will automatiaally get the format like {name : 'Sahil', score : 4} and the this keyword inside of apply will always refer to the this keyword in the whole object where ever he would find the this but in this case he will refer and target the this of the user_details object and in the second argumnet we passing our arumnents(value) for {name,age} property.
  user_details.apply(this,args);
}

// Prototyple inheritence.
admin.prototype = Object.create(user_details.prototype);


const user1 = new user_details("Phill", 4);
const user2 = new admin('Sahil',3);
console.log(user2)