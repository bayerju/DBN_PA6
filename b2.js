import { db } from "./db.js"
const initModels = require("./models/init-models");
const models = initModels(db);
export function neuerVertrag() {
    models.kunde()
}
