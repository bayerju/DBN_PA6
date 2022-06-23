import { db } from "./db.js"
import { rl } from "./index.js";
// import {DataTypes} from "sequelize";
// // import initModels from "./models/init-models.js";
// // const models = initModels(db);
// import kunde from "./sequelize/models/kunde.js"

const userData = {
    firstName: "test",
    lastName: "Test",
    email: "balbdfgal",
    beitrag: 45,
    vertrag: "spezial",
    studioId: 1,
    password: "1234"
}

function readBeitrag() {
    const beitrag = rl.question("wie hoch ist der Beitrag des Kunden?\n")
    if (parseInt(beitrag) > 0) {
        userData.beitrag = beitrag
        return;
    }
    else {
        readBeitrag()
    }
}
export async function newCustomerData() {
    userData.firstName = rl.question("wie heißt der neue Kunde mit Vornamen? \n")
    userData.lastName = rl.question("wie heißt der neue Kunde mit Nachnamen?\n")
    userData.email = rl.question("was ist die Emailadresse?\n")
    const beitrag = rl.question("wie hoch ist der Beitrag des Kunden?\n")
    readBeitrag();
    userData.vertrag = rl.question("was für einen Vertrag kriegt der Kunde?\n")
    return
}


async function queryTask2() {
    try {
        const [vertrag, vertragMetadata] = await db.query("INSERT into vertrag(vertragsart, mitgliedbeitrag) values( :vertragsart , :beitrag)", {
            replacements: {
                vertragsart: userData.vertrag,
                beitrag: userData.beitrag
            }
        })
        console.log("vertrag: ", vertrag)

        const [account, accountMeta] = await db.query("insert into account (idStudio, passwort, vorname, nachname, eMailAdresse) values( :idStudio , :password, :firstName, :nachnamen,  :email)", {
            replacements: {
                idStudio: userData.studioId,
                password: userData.password,
                firstName: userData.firstName,
                nachnamen: userData.lastName,
                email: userData.email
            }

        })
        const [kunde, kundeMeta] = await db.query("insert into kunde (idAccount, idVertrag) values (:idAccount, :idVertrag)", {
            replacements: {
                idAccount: account,
                idVertrag: vertrag
            }
        })

    } catch (error) {
        console.log(error)
    }
}

export async function task2() {
    await newCustomerData();
    await queryTask2();
}
