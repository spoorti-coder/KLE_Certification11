let fs = require('fs');

//perform CRUD operation

// let data ="hii i am  cool";

//task-1 create a file and write data into it
// fs.writeFile('demo.txt',data,{
//     encoding:'utf-8'},(err)=>{
    
//     if(err) throw err;
//     console.log("file is created sucessfully");
// })

//way2
// fs.writeFileSync('demo.txt',data,
//     (err)=>{
//         if(err) throw err;
//         console.log("file is created sucessfully");
//     });



    //read a file
    // let fileread=fs.readFileSync('demo.txt');
    // console.log(fileread.toString());

    //update a file
    // fs.appendFileSync('demo.txt','I\n I hope this weather will be same for next day');


    //delete data 
    // fs.unlinkSync('demo.txt');

    let data="welcome to KLE BCA";

    //create file

    fs.writeFileSync('demo1.txt',data,{
        encoding:'utf-8'},(err)=>{

        if(err) throw err;
        console.log("file is created sucessfully");
    });

    //read file

    let fileread=fs.readFileSync('demo1.txt');
    console.log(fileread.toString());

     //delete file
     fs.truncateSync('demo1.txt');



    //update fie
    fs.appendFileSync('demo1.txt','I\n hello bca students');

   

