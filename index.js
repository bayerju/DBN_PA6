import 'dotenv/config';
import * as readline from "readline";
import _ from "lodash";
import { b1 } from "./b1.js";
import { b2 } from "./b2.js";
import { auto, db } from "./db.js";


const rl = readline.createInterface(process.stdin, process.stdout);

// testing connectin
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
// auto.run()

b1(rl, db);
b2();
