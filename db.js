import SequelizeAuto from "sequelize-auto";
import { Sequelize } from "sequelize";

export const db = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: "localhost",
    dialect: "mariadb"
});

export const auto = new SequelizeAuto(db, null, null, {caseFile: '1', caseModel: 'p', caseProp: 'c', directory: './sequelize/models'})