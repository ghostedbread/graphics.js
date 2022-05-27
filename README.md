# <center> graphics - js </center>
<center> Graphics For Node </center>

## Installation 
To install, simply enter ```npm install @ghostedbread/graphics-js```
## Features
graphics-js contains basic colors such as red, green, and blue. These are accessible by the color object:
```javascript
console.log(`${graphicsjs.color.red}Hello Graphics!${graphicsjs.color.reset}`);
```
You can also use the "Label" function to create a label:
```javascript
graphicsjs.Label("Woah",colors.bgWhite,colors.white);
```
## Usage
```javascript
const graphicsjs = require("@ghostedbread/graphics-js");
graphicsjs.Label("Lorem Ipsum",colors.bgWhite,colors.white);
console.log(`${graphicsjs.color.red}Hello Graphics!${graphicsjs.color.reset}`);
```
