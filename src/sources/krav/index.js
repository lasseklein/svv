const Airtable = require('airtable');

module.exports = function (api, opts) {

    const base = new Airtable({apiKey: opts.apiKey}).base(opts.base);

    api.loadSource(async store => {

        const books = store.addContentType({
            typeName    : 'Book',
            route       : '/Book/:id',
        });

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

        const tabellinjer = store.addContentType({
            typeName    : 'Tabellinjer',
            route       : '/tabellinjer/:id',
        });

        let fcount = 0;
        await base('Figurer').select().eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                figurer.addNode({
                    id     : item.id,
                    tekst  : item.fields.Tekst,
                    navn   : item.fields.Navn,
                    bilde  : item.fields.Bilde,
                });
                fcount++;
            });
            console.log('Figur: ', fcount);
            fetchNextPage();
        });

        let tlcount = 0;
        await base('Tabellinjer').select({view: 'Grid view'}).eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                tabellinjer.addNode({
                    sequence : tlcount,
                    id       : item.id,
                    rowtitle : item.fields.Radtittel,
                    coltitle : item.fields.Kolonnetittel,
                    value    : item.fields.Value,
                });
                tlcount++;
            });
            console.log('Tabellinjer: ', tlcount);
            fetchNextPage();
        });

        let tcount = 0;
        await base('Tabeller').select().eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                tabeller.addNode({
                    id          : item.id,
                    navn        : item.fields.Navn,
                    tekst       : item.fields.Tekst,
                    legend      : item.fields.firstcoltitle,
                    beskrivelse : item.fields.Beskrivelse,
                    bilde       : item.fields.Bilde,
                    lineref : store.createReference('Tabellinjer' , item.fields.Tabellinjer      ),
                });
                tcount++;
            });
            console.log('Tabell: ', tcount);
            fetchNextPage();
        });


        let bcount = 0;
        await base('Books').select({view: 'Grid view'}).eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                books.addNode({
                    // Explicitly add and name the fields we want to include
                    sequence    : bcount,
                    id          : item.id,
                    navn        : item.fields.Name,
                    tittel      : item.fields.Tittel,
                    type        : item.fields.Type,
                    booknr      : item.fields.Book,
                    forside     : item.fields.Forside,
                });
                bcount++;
            });
            console.log('Book: ', bcount);
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
                    tekst       : item.fields.Tekst,
                    kravID      : item.fields.KravID,
                    kravtype    : item.fields.Kravtype,
                    kapittel    : item.fields.Kapittel,
                    avsnitt     : item.fields.Avsnitt,
                    type        : item.fields.Type,
                    //fagtema     : item.fields.Fagtema,
                    versjon     : item.fields.Versjon,
                    veiledning  : item.fields.Veiledning,
                    koblet      : item.fields.Koblet,
                    vedlegg     : item.fields.Vedlegg,
                    booknr      : item.fields.booknr,
                    kapittelID  : item.fields.KapittelID, //Kun for å bygge sider
                    // Add references to self and other tables
                    figref      : store.createReference('Figur' , item.fields.Figurer      ),
                    tabref      : store.createReference('Tabell', item.fields.Tabeller     ),
                    kravref     : store.createReference('Krav'  , item.fields.Henvisninger ),
                    book        : store.createReference('Book'  , item.fields.Book         ),
                });
                count++;
            });
            console.log('Krav: ', count);
            fetchNextPage();
        });


    });
};
