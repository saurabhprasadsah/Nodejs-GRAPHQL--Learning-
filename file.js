 const fs = require("fs")

// console.log(fs);
// sync...

// fs.writeFileSync("./test.txt", "Hello saurabh are you there")


// Async...
// fs.writeFile("./textfile.txt", "Hello this is a async file", (err) => {})


// sync readthefile

// const result = fs.readFileSync('./contact.txt', "utf-8");
// console.log(result);


// Asyncchronous file will be reading in this system

// fs.readFile('./contact.txt', "utf-8", (err,result) =>{
//     if(err){
//         console.log("Error", err); 
//     }
//     else{
//         console.log("Result will be", result);
//     }
// })

// sync file append
// fs.appendFileSync('./test.txt', new Date().getDate().toLocaleString())
// fs.appendFileSync('./test.txt', `${Date.now()} Hey there\n`)

// fs.cpSync('./test.txt',"./copy.txt");

// fs.unlinkSync('./copy.txt')


console.log(fs.statSync("./test.txt", ).isFile())


fs.mkdirSync('my-docs/a/b', {recursive: true})




