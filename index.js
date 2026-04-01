const fs = require("node:fs");

// create a file
// fs.appendfile(path, data, callback fnc)
fs.appendFile("hello.txt", "hello world !", (e) => {
    if (e) throw error;
    console.log("new file created");
});

fs.appendFile("index.html", "<h1>Hello World</h1>", (e) => {
    if (e) throw error;
    console.log("create index.html file");
});

// create a file
// fs.mkdir(path, data, callback fnc)
//  fs.mkdir("images", (e) => {
//     if (e) throw error;
//     console.log("create a images folder ");

// });
// if you want to create nested folder and files 
// then you have to changedefault setting ==>recursive :true
fs.mkdir("css/style.js" ,{ recursive: true},(e) => {
    if (e) throw error;
    console.log("create a style.js file into css folder ");
});

fs.mkdir("css/style.css" ,{ recursive: true},(e) => {
    if (e) throw error;
    console.log("create a style.js file into css folder ");
});



// rename files
// // fs.rename('filename old', 'filename new', callback fnc)
// fs.rename("hello.txt","world.txt",(e) => {
//     if (e) throw error;
//     console.log("file name changed to world.txt");
// });

//remove folder
// fs.rmdir(path, callback fnc)
// fs.rmdir("images", (e) => {
//     if (e) throw error;
//     console.log("css folder removed");
// });

//file remove
// fs.rm(path, callback fnc)
// fs.rm("css/style.css", {recursive: true}, (e) => {
//     if (e) throw error;
//     console.log("style.css file removed");
// });

//read file
// fs.readFile(path, callback fnc)
fs.readFile("index.html", "utf-8", (e, data) => {
    if (e) throw error;
    console.log(data);
    console.log("read the file - index.html");
});

fs.readFile("world.txt", "utf-8", (e, data) => {
    if (e) throw error;
    console.log(data);
    console.log("read the file - world.txt");
});

//read folder ==> give folders name array
// fs.readdir(path, callback fnc)
fs.readdir("css", (e, files) => {
    if (e) throw error;
    console.log(files);
    console.log("read the folder - css");
});

//copy file
// fs.copyFile(path of source (filename), path of (destination )file, callback fnc)
fs.copyFile("index.html", "copy.html", (e) => {
    if (e) throw error;
    console.log("file copied successfully to copy.html");
});

