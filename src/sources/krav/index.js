const Airtable = require('airtable');

module.exports = function (api, opts) {

    const base = new Airtable({apiKey: opts.apiKey}).base(opts.base);

    api.loadSource(async store => {

        const krav = store.addContentType({
            typeName    : 'Krav',
            route       : '/krav/:id',
        });

        const figurer = store.addContentType({
            typeName    : 'Figur',
            route       : '/figur/:id',
        });

        const tabeller = store.addContentType({
            typeName    : 'Tabell',
            route       : '/tabell/:id',
        });

        await base('Figurer').select().eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                figurer.addNode({
                    id          : item.id,
                    tekst       : item.fields.Tekst,
                    figurNr     : item.fields.FigurNr,
                    figurBilde  : item.fields.Figurbilde,
                });
                console.log('Figur: ', item.id);
            });
            fetchNextPage();
        });

         await base('Tabeller').select().eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                tabeller.addNode({
                    id      : item.id,
                    navn    : item.fields.Navn,
                    tekst   : item.fields.Tekst,
                    bilde   : item.fields.Bilde,
                });
                console.log('Tabell: ', item.id);
            });
            fetchNextPage();
        });

        let count = 0;
        await base('Book').select({view: 'Grid view'}).eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                krav.addNode({
                    // Explicitly add and name the fields we want to include
                    sequence    : count,
                    id          : item.id,
                    krav        : item.fields.Krav,
                    kravID      : item.fields.KravID,
                    kravtype    : item.fields.Kravtype,
                    kapittel    : item.fields.Kapittel,
                    avsnitt     : item.fields.Avsnitt,
                    type        : item.fields.Type,
                    fagtema     : item.fields.Fagtema,
                    versjon     : item.fields.Versjon,
                    veiledning  : item.fields.Veiledning,
                    koblet      : item.fields.Koblet,
                    vedlegg     : item.fields.Vedlegg,
                    booknr      : item.fields.booknr,
                    // Add references to self and other tables
                    figref      : store.createReference('Figur' , item.fields.Figurer      ),
                    tabref      : store.createReference('Tabell', item.fields.Tabeller     ),
                    kravref     : store.createReference('Krav'  , item.fields.Henvisninger ),
                });
                count++;
            });
            console.log('Krav: ', count);
            fetchNextPage();
        });

    });
};
