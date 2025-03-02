const fs=require("fs");
/**
 * Callaback func to read filedata
 * @param {Error} error 
 * @param {buffer} fileData 
 * @returns void
 */

function readFirstFiveCallBack(error, fileData)
{
    if(error) 
    {
        console.log(error);
        return;
    }
}

const Lines=fileData.toString();
    Lines.slice(0,5).forEach(line) ;