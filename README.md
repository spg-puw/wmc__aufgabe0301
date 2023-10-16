# Aufgabe SchulAPI

Aufgabe by [PUW](https://github.com/spg-puw/).

## Aufgabe

### API

Schreiben Sie eine API, die die Daten aus `Schulen.json` verarbeitet und folgende Endpoints anbietet. Die Grundstruktur des Programms ist schon in der Datei *index.js* vordefiniert.

* `GET /a1`: alle Schulen (Name, Adr, PLZ Ort) mit PLZ > 4000
* `GET /a2`: alle Schulen (Name, Adr, PLZ Ort) in Wien
* `GET /a3`: alle Schulen (Name, Adr, PLZ Ort) in Wien, bei der die Adresse „gasse“ enthält
* `GET /a4`: alle Schulen (Name, Adr, PLZ Ort) in Wien und Tirol
* `GET /a5`: Mailadresse aller Schulen in NÖ
* `GET /a6`: alle Schulen (Name) mit Informatik-Ausbildung
* `GET /a7`: Webseite aller Schulen mit Informatik-Ausbildung in Wien
* `GET /a8`: Webseite aller Schulen mit Informatik-Ausbildung in Wien im HTML-Format mit bullet points, damit man das Code snippet auf einer Webseite einfügen könnte
* `GET /a9`: alle Ausbildungen der Spengergasse (Name, Dauer, conditions, note)
* `GET /a10`: alle Ausbildungen aller Wiener Schulen (Name, Dauer)
* `GET /a11`: alle Schulen (Name, Adr, PLZ Ort) im (Quadrat-)Um“kreis“ der Spengergasse mit +- 10km (10km in GPS-Distanz für lan/lot umwandeln)
* `GET /a12`: alle Ausbildungen (Name, Dauer) im Umkreis (wie vorhin) der Spengergasse +- 10km
* `GET /a13`: alle Ausbildungen (Name, Dauer) OHNE die der Spengergasse im Umkreis (wie vorhin) der Spengergasse +- 10km
* `GET /a14`: alle Ausbildungen (Name, Dauer) in Wien OHNE die der 2 größten Schulen (TGM, Spengergasse)

### Frontend

Bearbeite die Datei *public/index.html* und ergänze folgende Funktion:

* Ergänze das Dropdown (Element mit id `endpoint`) um die fehlenden Endpoints; benutze die vorhandene Vorlage
* Reagiere auf Änderungen des Dropdowns (Element mit id `endpoint`); rufe die Daten vom entsprechenden Endpoint auf und zeige diese an
  * Die alten Daten von vorigen Aufrufen werden immer gelöscht
  * Sollte es einen Fehler geben, so wird einfach die Nachricht "(Daten konnten nicht geladen werden)" statt der Daten in das Element mit der id `mycontent` geschrieben

## Setup

Abhängigkeiten installieren:

```sh
npm install
```

Das Programm selber kann mit folgendem Befehl gestartet werden:

```sh
# normal starten
npm run start

# mit nodemon starten
npm run dev
```

Zum Testen werden *jest* und *supertest* (API) sowie *cypress* (e2e) verwendet.

```sh
# für API-Test
npm run test:api

# für Frontend-Test (e2e mit cypress)
npm run test:e2e
npm run cypress:open # cypress öffnen (API muss gestartet sein)

# alle Tests durchlaufen
npm run test
```
