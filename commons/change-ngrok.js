const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const configPath = path.join(__dirname, process.env.PATH_BAT_CONFIG);
const batPath = path.join(__dirname, process.env.PATH_BAT_EXEC);

execCopyFileBat = (url) => {
  let isModify = false;

	fs.readFile(configPath, 'utf-8', function(errorRead, data) {
    if (errorRead) console.log(new Error(errorRead));
    
    if(data) {
      data.split('\n').forEach(function (line) { 
        if(line && line.includes('ngrok')) {
          data = data.replace(line, `  base_url_server: "${url}"`);
          isModify = true;
        }
      });
    }

    if(isModify){
      fs.writeFile(configPath, data, 'utf-8', function(errorWrite) {
        if (errorWrite) console.log(new Error(errorWrite));

        exec(batPath, function(errorBat, stdout, stderr) {
          if (errorBat) console.log(new Error(errorBat));
            console.log(url);
        });
      });
    }
	});
};

module.exports = {
  execCopyFileBat: execCopyFileBat
};
