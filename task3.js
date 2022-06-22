import { newCustomerData } from "./b2";
import { db } from "./db";

export async function task3() {
    await newCustomerData();
    const [res, meta] = await db.query("CALL storedProcedure(:argument);", {
        replacements: {
            argument: "test"
        }
    })
}
