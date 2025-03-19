let cnt = 0;
function update(){
    cnt++;
    console.log(cnt);

    setTimeout(update, 1000);
}
update();