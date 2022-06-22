import { db } from "./db.js"
import { rl } from "./index.js";
// import {DataTypes} from "sequelize";
// // import initModels from "./models/init-models.js";
// // const models = initModels(db);
// import kunde from "./sequelize/models/kunde.js"

export async function newCustomerData() {
    const newUserData = {};
    rl.question("wie heißt der neue Kunde mit Vornamen?", (aInput) => newUserData.firstName = aInput)
    rl.question("wie heißt der neue Kunde mit Nachnamen?", (aInput) => newUserData.lastName = aInput)
    rl.question("was ist die Emailadresse?", (aInput) => newUserData.email = aInput)
    rl.question("wie hoch ist der Beitrag des Kunden", (aInput) => newUserData.beitrag = parseInt(aInput))
    rl.question("was für einen Vertrag kriegt der Kunde?", (aInput) => newUserData.vertrag = aInput)
    return newUserData
}

const userData = {
    firstName: "test",
    lastName: "Test",
    email: "balbdfgal",
    beitrag: 45,
    vertrag: "spezial",
    studioId: 1,
    password: "1234"
}

async function queryTask2() {
    try {
        const [vertrag, vertragMetadata] =  await db.query("INSERT into vertrag(vertragsart, mitgliedbeitrag) values( :vertragsart , :beitrag)", {
            replacements: {
                vertragsart: userData.vertrag,
                beitrag: userData.beitrag
            }
        })
        console.log("vertrag: ", vertrag)

        const [account, accountMeta] = await db.query("insert into account (idStudio, passwort,  eMailAdresse) values( :idStudio , :password,  :email)", {
            replacements: {
                idStudio: userData.studioId,
                password: userData.password,
                // firstName: userData.vorname,
                // nachnamen: userData.nachname,
                email: userData.email
            }

        })
        // const [account, accountMeta] = await db.query("insert into account (idStudio, passwort, vorname, nachname, eMailAdresse) values( :idStudio , :password, :firstName, :nachnamen,  :email)", {
        //     replacements: {
        //         idStudio: userData.studioId,
        //         password: userData.password,
        //         firstName: userData.vorname,
        //         nachnamen: userData.nachname,
        //         email: userData.email
        //     }

        // })
        const [kunde, kundeMeta] = await db.query("insert into kunde (idAccount, idVertrag) values (:idAccount, :idVertrag)", {
            replacements: {
                idAccount: account,
                idVertrag: vertrag
            }
        })
        
    } catch (error) {
        console.log(error)
    }

    // await rl.question("What do you want to filter for?", (aInput) => {
    //     console.log(view1.filter((iCol) => _.some(iCol, iValue => _.includes(iValue, aInput))));
    //     aRl.close();
    // })
}

export async function task2() {
    await newCustomerData();
    await queryTask2();
}
