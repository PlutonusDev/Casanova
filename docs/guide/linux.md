# Linux Installation
Install the following through your package manager:
- [nodejs](https://nodejs.org/en/download/package-manager/) (Version 6.X.X^ required)

Once you have that installed, create a folder for your project and install Trio:
`mkdir mybot && cd mybot`
`npm install discord.js-trio`

**For voice support** add `npm install opusscript` (easy setup) or `npm install node-opus` (better performance but requires `python 2.7.x` and `build-essential`). **BOTH** OpusScript and NodeOpus require `ffmpeg` to run on your system, installed through `sudo apt-get install ffmpeg`.
<br/>