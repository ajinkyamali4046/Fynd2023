const fs=require("fs");
/**
 * // callback function to read filedata
 * @param {error} error
 * @param {buffer} fileData 
 * @returns void
 */

function readFirstFiveEven(error,fileData)
{
    if(error) 
    {
        console.error(error);
        return;
    }
 // converting th fileData which is buffer to string and splitting by line
    const lines=fileData.toString().split("\n");
 // slice the line to first five and log them
    lines.slice(0,5).forEach((line)=> {
        console.log(line);
    });
}
// function call
fs.readFile("./example.txt", readFirstFiveEven);