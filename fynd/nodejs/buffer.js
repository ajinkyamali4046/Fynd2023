var buffer1=Buffer.alloc(100);
buffer1.write("i'm here");
 var a=buffer1.toString('utf-8');

 console.log(a);
 console.log(Buffer.isBuffer(buffer1));
 console.log(buffer1.length);

 var bufferSource= new Buffer('ABC');
 var bufferDestination=Buffer.alloc(3);
 bufferSrc.copy(bufferDest);
 var Data=bufferDest.toString('utf-8');
 console.log(Data);

 var bufferOld=new Buffer('India is Great');
 var bufferNew=bufferOld.slice(0,4);
 console.log(bufferNew.toString());

 var bufferOne=new Buffer('India');
 var bufferTwo=new Buffer('Is Great');
 var bufferFour=new Buffer('Jai Hind');
 var bufferThree=new Buffer.concat([bufferOne,bufferTwo,bufferFour]);
 console.log(bufferThree.toString());