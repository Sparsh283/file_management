const fs = require('fs');
const path = require('path');
class Create{
    constructor(name){
        this.name=name;
    }
creating(){
    new Promise(function(resolve, reject) {
        setTimeout(() => resolve("Promise is called"), 1000); 
    }).then(()=>{
        if(!fs.existsSync(this.name)){
        fs.mkdir(path.join(__dirname,this.name),(err) =>{
            if(err){
                return console.log(err);
            }
            console.log('Directory created successfully!');
        });
        }
    }).then(setTimeout(()=>{
        fs.writeFile('./'+this.name+'/file1.txt','Welcome to file 1.',function(err){
            if(err){
                return console.log('cannot create file 1:',err);
            }
            console.log('File1 created successfully!');
        });
    },2000)).then(setTimeout(()=>{
        fs.writeFile('./'+this.name+'/file2.txt','Welcome to file 2.',function(err){
            if(err){
                return console.log('Cannot create file 2:',err);
            }
            console.log('File2 created successfully!');
        });
    },3000));
}
}
let pr = new Promise(function(resolve, reject) {

    setTimeout(() => resolve(1), 1000); 
  
  }).then(function(result) { 
    let cr1 = new Create('test1');
    cr1.creating();
    console.log(result);
    return result * 2;
  
  }).then(function(result) { 
    let cr2 = new Create('test2');
    cr2.creating()
    console.log(result);
    return result * 2;
  })
