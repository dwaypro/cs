console.log('starting app');

setTimeout(() => {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('Inside of callback2');
}, 0);

console.log('finishing up');

// call stack
//   node runs main()
// which adds and removes all statements from the call stack
