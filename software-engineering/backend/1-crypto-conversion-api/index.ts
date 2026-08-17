import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { convertPrice, fetchCrypto } from "./src/api.js";

const rl = readline.createInterface({ input, output });

const amounts = await rl.question("Enter amount: ");
const crypto = await rl.question("Enter crypto: ");
const fiat = await rl.question("fiat: ");

const amount = Number(amounts);

const result = await convertPrice({ amount, crypto, fiat });

console.log(`Hello, ${result.data[0].quote[fiat.toUpperCase()].price}`);

rl.close();
