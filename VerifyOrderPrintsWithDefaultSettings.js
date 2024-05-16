

const wdio = require('webdriverio');
const FlutterDriver = require('appium-flutter-driver');
//const assert = require('assert');
const find = require('appium-flutter-finder');
const { exec } = require('child_process');
const fs = require('fs');

const opts = {
    port: 4723,
    capabilities: {
        platformName: "Android",
        'appium:deviceName': "B6T4594PZ9VW55SC",
        'appium:app': "C:\\src\\app-pie-debug 5.apk",
        'appium:appPackage': "com.hp.ifori.printnow",
        'appium:appActivity': "com.hp.ifori.printnow.MainActivity",
        'appium:autoGrantPermissions': true,
        'appium:automationName': "Flutter"
            
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const logStream = fs.createWriteStream('output.log', { flags: 'a' });
console.log = function(msg) { logStream.write(msg + '\n'); };
console.error = console.log;


async function Login(){      
        const client = await wdio.remote(opts, FlutterDriver); 
        console.log("Test1:Enter Mobile number and click on OTP button to get OTP");
        await sleep(10000);
        await client.execute('flutter:waitFor', find.byValueKey('phone'));
        await client.elementSendKeys(find.byValueKey('phone'), '2222222222');
        await sleep(5000);
        console.log("Step1 : Mobile number entered successfully");
        await client.execute('flutter:waitFor', find.byValueKey('bottomButton'));
        await client.elementClick(find.byValueKey('bottomButton'));
        await sleep(5000);
        console.log("Step2 : OTP button clicked successfully");
        await client.execute('flutter:waitFor', find.byValueKey('otpinputfield'));
        await client.elementSendKeys(find.byValueKey('otpinputfield'), '222222');
        await sleep(5000);
        console.log("Step3: OTP entered successfully");
     
        async function OrderJobwithDefaultSettings() {
        const files = fs.readdirSync('C:\\src\\TestFiles');
        for (const file of files) {
        const filePath = `C:\\src\\TestFiles\\${file}`;
        const destinationPath = `/sdcard/Download/${file}`;
        exec(`adb push ${filePath} ${destinationPath}`);
        //files.forEach(async file =>{
        //const filePath = 'C:\\src\\PrintNow.pdf';
        //const destinationPath = '/sdcard/Download/'; 
        //exec(`adb push ${file} ${destinationPath}`);
        console.log("Test2:Selecting File for Preview");
        await client.execute('flutter:waitFor', find.byValueKey('select_file'));
        await client.elementClick(find.byValueKey('select_file'));
        await sleep(5000);
        exec(`adb shell input tap 320 800`);
        await sleep(20000);
        console.log("Step1:File selected successfully");
        await client.execute('flutter:waitFor', find.byValueKey('next_button'));
        await client.elementClick(find.byValueKey('next_button'));
        await sleep(6000);
        console.log("Step2:Next button to order clicked successfully");
        console.log("Test 3 : Confirm Order with settings applied");
        await client.execute('flutter:waitFor', find.byValueKey('bottom_button'));
        await client.elementClick(find.byValueKey('bottom_button'));
        await sleep(5000);
        /*console.log("Step1:Confirm order clicked successfully");
        await client.execute('flutter:waitFor', find.byValueKey('view_order'));
        await client.elementClick(find.byValueKey('view_order'));
        await sleep(5000);
        console.log("Step2:View order clicked successfully");*/
        await client.execute('flutter:waitFor', find.byValueKey('home'));
        await client.elementClick(find.byValueKey('home'));
        await sleep(10000);
        console.log("Step2:Going back to Home clicked successfully");
        exec(`adb shell rm sdcard/download/${file}`);
        //console.log("Test1:Success");
        };
        }
        OrderJobwithDefaultSettings();
        }
    Login();  




 
  
