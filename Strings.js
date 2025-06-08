// const name = "khushi";
// const repoCount = 50;


// console.log(name + repoCount + "Value");    -> older way

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);   // newer

// console.log(`Hello my name is ${name.toUpperCase()} and my repoCount is ${repoCount}`);

/* const person = {
  greet() {
    console.log("Hello!");
  }
};

const student = {
  __proto__: person,
  study() {
    console.log("Studying...");
  }
};
student.greet();
student.study();
console.log(student.__proto__); */

// const gameName = new String('Khushi');
// console.log(gameName[0]);   //helps to access index value of string mentioned
// console.log(gameName.__proto__);   //shows all built-in string methods that object can use

// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(2));
// console.log(gameName.reverse);


const gameName = 'Khushi-com';
// const reversed = gameName.split('').reverse().join('');
// console.log(reversed);

// console.log(gameName.indexOf('K'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,2)
console.log(anotherString);


const newStringOne = "  Khushi  ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://khushi.com/khushi%20singh";
console.log(url.replace('%20', '-'));


console.log(gameName.split('-'));

