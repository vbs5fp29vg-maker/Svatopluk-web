# Svatopluk-web — osobní web

Osobní web Svatopluka Svobody: IT analytik a mezinárodní mistr v šachu, mistr ČR 2018.
Nasazeno na GitHub Pages: https://vbs5fp29vg-maker.github.io/Svatopluk-web/

## Co web umí

- Dvojjazyčný obsah (CS/EN) — přepínač vpravo nahoře, volba se pamatuje
- Světlý/tmavý režim — řídí se systémem, ručně přepnutelný, volba se pamatuje
- Interaktivní šachová úloha (Morphyho mat druhým tahem) — čistý vanilla JS, bez závislostí
- Figury: sada „cburnett" (Colin M. L. Burnett, licence GPLv2+/BSD, převzato z lichess)
- Sekce: O mně · Statistiky (FIDE) · Příběh titulu MČR 2018 · Šachový profil · IT · Kontakt

## Spuštění lokálně

```bash
cd Svatopluk-web
python3 -m http.server 8080
```

Pak otevřít http://localhost:8080

## Aktualizace dat

- FIDE ratingy jsou v `index.html` (statistiky, badge) a `script.js` (překlady) — aktuální
  hodnoty na https://ratings.fide.com/profile/14903563
- Poznámka „Ratingy k …" je u šachového profilu (klíč `chess_note`)

## Nasazení

Repo `vbs5fp29vg-maker/Svatopluk-web`, větev `main`, GitHub Pages z kořene.
Stačí commitnout a pushnout — Pages se přegenerují automaticky.
