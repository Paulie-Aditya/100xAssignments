let cnt = 0;
function update() {
    let curr = new Date();
    const hours_24 = curr.getHours();
    const minutes = curr.getMinutes();
    const seconds = curr.getSeconds();

    const hours_12 = (curr.getHours()+11)%12 + 1;
    console.log(hours_24 + ":"+ minutes + ":"+ seconds);
    console.log(hours_12 + ":"+ minutes + ":"+ seconds + " "+ (hours_24>=12 ? "PM" : "AM"));

    setTimeout(update, 1000);
}


update()