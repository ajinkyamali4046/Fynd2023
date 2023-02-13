const fs=requiere('fs');
/** 
* @Desc
* Takes filepath and logs the contents
* @Params
* filepath string
*
**/
// Unicode Transformation Format
function readUTF8File(filepath)
{
  //call back: choice determining
  //2 choices: data=success
  // error=failure
  //used to minimize exception handling
    fs.readFile(filepath,"utf-8",(data,error) =>
     {
      if(error)
      {
        console.error(error);
        return;
      } 
      console.log(data);
    });
}
// non existing file
readUTF8File("./abcd.text");

//existing file
readUTF8File("./static/files/testfile.txt");

//file with diff encoding . will read missing characters
readUTF8File("./ststic/files/testfilediffencoding.txt");