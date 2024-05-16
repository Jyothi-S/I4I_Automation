const { exec } = require('child_process');

// Start Appium server programmatically
 
const startAppiumServer = () => {
    // Rest of the code...
    return new Promise((resolve, reject) => {
      const appiumServer = exec('appium');
  
      appiumServer.stdout.on('data', (data) => {
        console.log(data.toString());
        if (data.includes('Appium REST http interface listener started')) {
          resolve();
        }
      });
  
      appiumServer.stderr.on('data', (data) => {
        reject(data);
      });
    });
  };
  
  // Call the function to start the Appium server
  startAppiumServer()
    .then(() => {
      console.log('Appium server started successfully');
      // Place your existing code here
    })
    .catch((error) => {
      console.error('Failed to start Appium server:', error);
    });
  