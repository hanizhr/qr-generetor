import inquirer from 'inquirer';
import qr from'qr-image';
import fs from 'fs';

var url;
inquirer
  .prompt([
     {
    type: 'input',
    name: 'url',
    message: "What's your address",
  },
  ])
  .then((answers) => {
    
    var qr_svg = qr.image(answers.url,);
    qr_svg.pipe(fs.createWriteStream('qrCode.png'));
   fs.writeFile('url.txt', answers.url, (err) => {
  if (err) throw err;
  console.log('your url just sved!');
}); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

 
 

 
