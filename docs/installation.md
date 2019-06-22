## Installation
**Node.js 10.0.0 or newer is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.

### Voice Support
For voice support, install ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install node-opus`

### Optional packages
- [zlib-sync](https://www.npmjs.com/package/zlib-sync) for faster WebSocket data inflation (`npm install zlib-sync`)
- [zucc](https://www.npmjs.com/package/zucc) for significantly faster WebSocket data inflation (`npm install zucc`)
- [erlpack](https://github.com/discordapp/erlpack) for significantly faster WebSocket data (de)serialisation (`npm install discordapp/erlpack`)
- One of the following packages can be installed for faster voice packet encryption and decryption:
    - [sodium](https://www.npmjs.com/package/sodium) (`npm install sodium`)
    - [libsodium.js](https://www.npmjs.com/package/libsodium-wrappers) (`npm install libsodium-wrappers`)
- [uws](https://www.npmjs.com/package/@discordjs/uws) for a much faster WebSocket connection (`npm install @discordjs/uws`)
- [bufferutil](https://www.npmjs.com/package/bufferutil) for a much faster WebSocket connection when *not* using uws (`npm install bufferutil`)