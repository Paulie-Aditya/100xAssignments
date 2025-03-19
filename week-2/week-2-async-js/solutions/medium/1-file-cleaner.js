const fs = require("fs");


fs.readFile("a.txt", "utf-8", function(err, data){
    // trim all data
    console.log(data);
    data = data.replace(/\s+/g, ' ').trim();
    fs.writeFile("a.txt", data, function(err, contents){

    })
})