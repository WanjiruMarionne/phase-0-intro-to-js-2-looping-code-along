const names = ["Spencer", "Curtis", "Becky"];
const eventName = "anniversary";
function writeCards(names, eventName) {
    let messages = [];

    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(message);
    }

    return messages;
}


function countDown(numStart) {
    for (let i = numStart; i >= 0; i--) {
        console.log(i);
    }
}
countDown(15);

function countDown1(numStart1) {
    while (numStart1 >= 0) {
        console.log(numStart1);
        numStart1--;
    }
}
countDown1(10);