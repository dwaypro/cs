console.log('made it here!');


var square = (x) => {
    console.log('inside square', x * x);
    return x * x;
};

// with only one argument you can omit perens
var squareSingleLine = x => x*x;
console.log('TCL: squareSingleLine', squareSingleLine(5));
square(5);


// differences between arrow and regular functions

var user = {
    name: 'Dan',
    //arrow functions do not bind this.
    //arrowfunctions do not log arguments for the function.
    // sayHi: () => {
    //     console.log(arguments)
    //     console.log(`hi. I'm ${this.name}`);
    //     console.log(`hi. I'm ${user.name}`);
    // },
    sayHi () {
        console.log(arguments);
        console.log(`Hi. I'm ${this.name}`);
    }
}

user.sayHi(1,2,3);


