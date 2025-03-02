const fs=require("fs").promises;
async function readFirstEven()
{
// reading the file with fs module
 const file = await fs.readFile("./example.txt");
// converting the file which buffer to string and splitting by line
 const line= file.toString().split("\n");

 for(let i=0;i<5;i++)
 {
    console.log(line[i]);
 }
}

readFirstEven();