use dbn11;
-- Stored Procedures
/* Erstelle eine Stored Procedure, über die ein neuer Kundenvertrag inkl. Kunde angelegt wird,
falls bisher keine Kunde mit gleichem Namen und Geburtsdatum existiert.
Die Input-Argumente dieser Prozedur sind mindestens: Name und Geburtsdatum des Kunden,
gewählte Vertragskonditionen.
Rückgabe: Id des neuen Kundenvertrags. */

DELIMITER //
CREATE PROCEDURE `Neuer Vertrag` (in neuV_id int, neuV_bezeichnung varchar(30), neuV_beitrag decimal(6,2),
neuA_id int, neuA_idS int, neuA_vorn varchar(30), neuA_nachn varchar(30), neuA_mail varchar(45), neuA_mobilN varchar(20), neuA_pas varchar(20), neuA_str varchar(40), neuA_ort varchar(20), neuA_plz tinyint,
neuK_id tinyint, neuK_trainingp int)
BEGIN
insert into vertrag()
	values (neuV_id, neuV_bezeichnung, neuV_beitrag);
insert into account ()
	values (neuA_id, neuA_idS, neuA_vorn, neuA_nachn, neuA_mail, neuA_mobilN, neuA_pas, neuA_str, neuA_ort, neuA_plz);
insert into kunde ()
	values (neuK_id, neuA_id, neuV_id, neuK_trainingp);

select a.idAccount, k.idKunde, a.vorname, k.idVertrag
from account a, kunde k
where a.vorname = "Hulk" and a.idAccount = k.idAccount;
End //



/* Erstelle eine Stored Procedure zur Erfassung eines Termins, inkl. Fehlerbehandlung bei ungültigen Eingaben. */
-- Prüfen ob es der richtige Daten Typ und ob es die Zahl negativ ist 
DELIMITER //
create procedure `Terminerfassung` (in k int)
begin
select concat(a.vorname, " ", a.nachname) as Name, t.idtermin
from termin t, account a, kunde k
where t.idtermin = k and t.idKunde = k.idKunde and a.idaccount = k.idaccount;
End //
