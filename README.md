# Prototype av digitale Håndbøker for Vegvesenet

Håndbøkene vedlikeholdes ved oppdatering av tekster og bilder eller nytt innhold i Airtable. 

Nye oppdateringer i Airtable publiseres enkelt ved å trykke "trigger deploy" i Netlify.


### Oppbygging av løsningen


1. Håndboken bygges opp i Airtable (https://airtable.com/shrIsmzFqJdsKCbCW)
2. Gridsome leser feltene og genererer statisk site (JAM-stack med Vue.js, GraphQL og Tailwind CSS)
3. Siten oppdateres på GitHub
4. Netlify oppdaterer automatisk med nye endringer på svv.netlify.com

