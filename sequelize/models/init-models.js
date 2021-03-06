import { DataTypes } from "sequelize";
import _Account from "./account";
import _Datum from "./datum";
import _Geraet from "./geraet";
import _GeraetHasTrainingsplan from "./geraet_has_trainingsplan";
import _Kunde from "./kunde";
import _KundeHasStudioHasKurs from "./kunde_has_studio_has_kurs";
import _Kurs from "./kurs";
import _Mitarbeiter from "./mitarbeiter";
import _Studio from "./studio";
import _StudioHasGeraet from "./studio_has_geraet";
import _StudioHasKurs from "./studio_has_kurs";
import _StudioHasKursHasDatum from "./studio_has_kurs_has_datum";
import _Termin from "./termin";
import _Trainingsplan from "./trainingsplan";
import _Vertrag from "./vertrag";

function initModels(sequelize) {
  var Account = _Account(sequelize, DataTypes);
  var Datum = _Datum(sequelize, DataTypes);
  var Geraet = _Geraet(sequelize, DataTypes);
  var GeraetHasTrainingsplan = _GeraetHasTrainingsplan(sequelize, DataTypes);
  var Kunde = _Kunde(sequelize, DataTypes);
  var KundeHasStudioHasKurs = _KundeHasStudioHasKurs(sequelize, DataTypes);
  var Kurs = _Kurs(sequelize, DataTypes);
  var Mitarbeiter = _Mitarbeiter(sequelize, DataTypes);
  var Studio = _Studio(sequelize, DataTypes);
  var StudioHasGeraet = _StudioHasGeraet(sequelize, DataTypes);
  var StudioHasKurs = _StudioHasKurs(sequelize, DataTypes);
  var StudioHasKursHasDatum = _StudioHasKursHasDatum(sequelize, DataTypes);
  var Termin = _Termin(sequelize, DataTypes);
  var Trainingsplan = _Trainingsplan(sequelize, DataTypes);
  var Vertrag = _Vertrag(sequelize, DataTypes);

  Geraet.belongsToMany(Studio, { as: 'idStudioStudios', through: StudioHasGeraet, foreignKey: "idGeraet", otherKey: "idStudio" });
  Geraet.belongsToMany(Trainingsplan, { as: 'idTrainingsplanTrainingsplans', through: GeraetHasTrainingsplan, foreignKey: "idGeraet", otherKey: "idTrainingsplan" });
  Kurs.belongsToMany(Studio, { as: 'idStudioStudioStudioHasKurs', through: StudioHasKurs, foreignKey: "idKurs", otherKey: "idStudio" });
  Studio.belongsToMany(Geraet, { as: 'idGeraetGeraetStudioHasGeraets', through: StudioHasGeraet, foreignKey: "idStudio", otherKey: "idGeraet" });
  Studio.belongsToMany(Kurs, { as: 'idKursKurs', through: StudioHasKurs, foreignKey: "idStudio", otherKey: "idKurs" });
  Trainingsplan.belongsToMany(Geraet, { as: 'idGeraetGeraets', through: GeraetHasTrainingsplan, foreignKey: "idTrainingsplan", otherKey: "idGeraet" });
  Kunde.belongsTo(Account, { as: "idAccountAccount", foreignKey: "idAccount"});
  Account.hasMany(Kunde, { as: "kundes", foreignKey: "idAccount"});
  Mitarbeiter.belongsTo(Account, { as: "idAccountAccount", foreignKey: "idAccount"});
  Account.hasMany(Mitarbeiter, { as: "mitarbeiters", foreignKey: "idAccount"});
  StudioHasKursHasDatum.belongsTo(Datum, { as: "idDatumDatum", foreignKey: "idDatum"});
  Datum.hasMany(StudioHasKursHasDatum, { as: "studioHasKursHasData", foreignKey: "idDatum"});
  GeraetHasTrainingsplan.belongsTo(Geraet, { as: "idGeraetGeraet", foreignKey: "idGeraet"});
  Geraet.hasMany(GeraetHasTrainingsplan, { as: "geraetHasTrainingsplans", foreignKey: "idGeraet"});
  StudioHasGeraet.belongsTo(Geraet, { as: "idGeraetGeraet", foreignKey: "idGeraet"});
  Geraet.hasMany(StudioHasGeraet, { as: "studioHasGeraets", foreignKey: "idGeraet"});
  KundeHasStudioHasKurs.belongsTo(Kunde, { as: "idKundeKunde", foreignKey: "idKunde"});
  Kunde.hasMany(KundeHasStudioHasKurs, { as: "kundeHasStudioHasKurs", foreignKey: "idKunde"});
  Termin.belongsTo(Kunde, { as: "idKundeKunde", foreignKey: "idKunde"});
  Kunde.hasMany(Termin, { as: "termins", foreignKey: "idKunde"});
  StudioHasKurs.belongsTo(Kurs, { as: "idKursKur", foreignKey: "idKurs"});
  Kurs.hasMany(StudioHasKurs, { as: "studioHasKurs", foreignKey: "idKurs"});
  Termin.belongsTo(Mitarbeiter, { as: "idMitarbeiterMitarbeiter", foreignKey: "idMitarbeiter"});
  Mitarbeiter.hasMany(Termin, { as: "termins", foreignKey: "idMitarbeiter"});
  Account.belongsTo(Studio, { as: "idStudioStudio", foreignKey: "idStudio"});
  Studio.hasMany(Account, { as: "accounts", foreignKey: "idStudio"});
  StudioHasGeraet.belongsTo(Studio, { as: "idStudioStudio", foreignKey: "idStudio"});
  Studio.hasMany(StudioHasGeraet, { as: "studioHasGeraets", foreignKey: "idStudio"});
  StudioHasKurs.belongsTo(Studio, { as: "idStudioStudio", foreignKey: "idStudio"});
  Studio.hasMany(StudioHasKurs, { as: "studioHasKurs", foreignKey: "idStudio"});
  KundeHasStudioHasKurs.belongsTo(StudioHasKurs, { as: "idStudioStudioHasKur", foreignKey: "idStudio"});
  StudioHasKurs.hasMany(KundeHasStudioHasKurs, { as: "kundeHasStudioHasKurs", foreignKey: "idStudio"});
  KundeHasStudioHasKurs.belongsTo(StudioHasKurs, { as: "idKursStudioHasKur", foreignKey: "idKurs"});
  StudioHasKurs.hasMany(KundeHasStudioHasKurs, { as: "idKursKundeHasStudioHasKurs", foreignKey: "idKurs"});
  StudioHasKursHasDatum.belongsTo(StudioHasKurs, { as: "idStudioStudioHasKur", foreignKey: "idStudio"});
  StudioHasKurs.hasMany(StudioHasKursHasDatum, { as: "studioHasKursHasData", foreignKey: "idStudio"});
  StudioHasKursHasDatum.belongsTo(StudioHasKurs, { as: "idKursStudioHasKur", foreignKey: "idKurs"});
  StudioHasKurs.hasMany(StudioHasKursHasDatum, { as: "idKursStudioHasKursHasData", foreignKey: "idKurs"});
  GeraetHasTrainingsplan.belongsTo(Trainingsplan, { as: "idTrainingsplanTrainingsplan", foreignKey: "idTrainingsplan"});
  Trainingsplan.hasMany(GeraetHasTrainingsplan, { as: "geraetHasTrainingsplans", foreignKey: "idTrainingsplan"});
  Kunde.belongsTo(Trainingsplan, { as: "idTrainingsplanTrainingsplan", foreignKey: "idTrainingsplan"});
  Trainingsplan.hasMany(Kunde, { as: "kundes", foreignKey: "idTrainingsplan"});
  Kunde.belongsTo(Vertrag, { as: "idVertragVertrag", foreignKey: "idVertrag"});
  Vertrag.hasMany(Kunde, { as: "kundes", foreignKey: "idVertrag"});

  return {
    Account,
    Datum,
    Geraet,
    GeraetHasTrainingsplan,
    Kunde,
    KundeHasStudioHasKurs,
    Kurs,
    Mitarbeiter,
    Studio,
    StudioHasGeraet,
    StudioHasKurs,
    StudioHasKursHasDatum,
    Termin,
    Trainingsplan,
    Vertrag,
  };
}
export default initModels;
const _initModels = initModels;
export { _initModels as initModels };
