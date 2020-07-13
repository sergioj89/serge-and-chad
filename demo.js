function promiseTimeout(milliseconds) {
    return new Promise((next, rej) => {
        setTimeout(next, milliseconds);
    })
}

setTimeout(() => {
    console.log("hey");
    setTimeout(() => {
        console.log("hey");
    }, 1000);
}, 1000);

promiseTimeout(3000)
    .then(() => {
        console.log("Hello Serge!");
        console.log("Hey, Serge!");
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log("Hey, Chad!");
    });


async function runApp() {
    await promiseTimeout(2000);
    console.log("Hey, Serge!");
    await promiseTimeout(1000);
    console.log("Hey, Chad!");
}
runApp();