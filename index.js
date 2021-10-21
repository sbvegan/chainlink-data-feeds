const { ethers } = require("ethers");

 // IPC
 const pathToIPC = "/home/soyboy/.ethereum/geth.ipc";
 const IPCprovider = new ethers.providers.IpcProvider(pathToIPC)
 