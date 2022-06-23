// import { dotenv } from 'dotenv';
import * as readlineSync from "readline-sync";
import dotenv from "dotenv"
import { b1 } from "./b1.js";
import { task2 } from "./b2.js";
import { auto, db } from "./db.js";

dotenv.config();

export const rl = readlineSync;
// export const rl = readline.createInterface(process.stdin, process.stdout);
console.log(typeof (process.env.PORT))

// testing connectin
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
// auto.run()

await b1();
await task2();
