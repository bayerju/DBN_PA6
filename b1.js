import _ from "lodash";
import { db } from "./db.js"
import { rl } from "./index.js"

// view 1 mit filter für kleinere datenmengen:
export async function b1() {

    const [view1, metadata] = await db.query("SELECT * from view1_studios");
    console.log(view1)


    const filterValue = rl.question("What do you want to filter for?")
    console.log(view1.filter((iCol) => _.some(iCol, iValue => _.includes(iValue, filterValue) | iValue === parseInt(filterValue))));
}
