# Maxoft-App

Az projekthez két mappa tartozik.


-------Az "APP" nevű mappa

Az "App" nevű mappát csak fejlesztéshez használom - itt készül a böngészőben futó alkalmazás, de ez csak a forráskód.
A már említett NPM - Webpack kombóval ezekből a fileokból, valamint az összes függőségből készül EGY (jó nagy) file.
Ez a webpack.config.js-ben meghatározottak alapján a "Server" nevű mappa Scripts mappájába kerül.

MINDEN, ami interakció, megjelenítés, az itt van megírva. A views mappában található az egyetlen VIEW, mely html-t ad vissza.
Ez egy minimális html, egész pontosan EGY darab "div"-be rendereljük az applikációt.
Ez az applikáció képes lesz érkező JSON-ok feldolgozására - például:

{
  user: {
    name: "bela",
    age: 20,
    cars: [
      "ford",
      "opel"
     ]
   }
 }
 
 Itt feladata lesz, hogy ezt a nyers adatot megjelenítse valahogy a felhasználónak - így az ehhez tartozó logika teljesen független a backendtől.
 
 Szintén az applikáció feladata, hogy a felhasználó interakciót "lejelentse" a backend-nek. Hogy aztán ott hogy történik aminek történnie kell, azt ennek az applikációnak nem feladata tudni. Ez az applikáció a felhasználó cselekedeteit értelmezve készít egy JSON-t - például:
 
{
  chosenPersonsId: 624,
  roleToggled: "admin",
  isChosen: false
 }
 
 Erre pedig kap egy választ (például: {isSuccesful: true}, és ennek megfelelően "újrarajzolódik".
 
 
 ------- A "SERVER" nevű mappa
 
 Az ebben a mappában lévő kód fut - innen van kiszolgálva a felhasználó böngészőjébe a fentebb említett applikáció, valamint ez szolgálja ki a futó applikációt adatokkal (a fentebb leírt JSON-okhoz hasonló adatokkal - első példa).
 
 Ennek a szerver oldali logikának nem feladata tudni, hogy milyen eszköz (IOS app, Android APP, Java asztali alkalmazás, bármilyen javascript frameworkben megírt web app...) hogyan jeleníti meg az általa küldött adatokat. Ha kap egy requestet (amit adott esetben authentikál) akkor küld egy választ. Ilyen "nyers" VIEW-kat adnak vissza a CONTROLLEREK.
 
 Ha kap egy JSON-t, akkor nem feladata tudni, hogy azt milyen alkalmazáson, hogyan állította össze a felhasználó. Kap egy adathalmazt (második példa), és a CONTROLLER tudja, hogy mit kell vele kezdeni, milyen MODEL-t és hogyan kell módosítani. Amint végzett a feladattal, küld egy választ (harmadik példa), aztán csináljon vele az applikáció amit akar.
 
 
 ------Összegzés
 
 Ennek az egész megközelítésnek az az előnye, hogy minden részlet függetlenül fejleszthető, szépen el van választva egymástól.
 
 Ennek pedig a magja az az MVC elrendezés, ami arra lett kitalálva, hogy ezt a fajta elrendezést kiszolgálja, hogy a az adatbázis (ahol minden fontos adat rendszerezve van) és a megjelenítés (ami a teljesen laikus felhasználó által is átlátható és kezelhető) közé egy réteget húzzon, és az egyik irányból érkező adatokat a másiknak továbbadja, illetve közben ha szükséges elvégezzen bizonyos műveleteket.
 
 Az adatbázis oldali "vége" a MODEL, az applikáció felőli "vége" a VIEW, és a kettőt összeköti a CONTROLLER, mely adott esetben meghív bizonyos service-eket (például email-küldő service, vagy authentication service) - és ezek eredményéről is értesíti azt az oldalt, akit szükséges.
