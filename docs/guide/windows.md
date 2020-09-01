# Windows Installation
Install the following software:
- nodejs from [the downloads page](https://nodejs.org/en/download/) (Version 12.X.X^ required)

If you need voice support, you will also need 2 more things:
- FFMPEG, which is available [on this page](http://adaptivesamples.com/how-to-install-ffmpeg-on-windows/)
- The new windows build tools:
  - Open **Command Prompt** or **PowerShell** as Administrator
  - Run the following command: `npm i -g --production windows-build-tools`
  - This installs Python 2.7 and the C++ Build Tools standalone.

Once you have all this installed, create a folder for your project and install Trio:<br/>
`md mybot`<br/>
`cd mybot`<br/>
`npm install discord.js-trio`
