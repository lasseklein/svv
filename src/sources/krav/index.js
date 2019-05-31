const Airtable = require('airtable');

module.exports = function (api, opts) {
    const base = new Airtable({apiKey: opts.apiKey}).base(opts.base);

    api.loadSource(async store => {

        const krav = store.addContentType({
            typeName: 'Krav',
            route: '/krav/:id',
        });

        const figurer = store.addContentType({
            typeName: 'Figur',
            route: '/figur/:id',
        });

        const tabeller = store.addContentType({
            typeName: 'Tabell',
            route: '/tabell/:id',
        });

        await base('Figurer').select().eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                figurer.addNode({
                    id: item.id,
                    fields: item.fields,
                });
                console.log('Figur: ', item.id);
            });
            fetchNextPage();
        });

         await base('Tabeller').select().eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                tabeller.addNode({
                    id: item.id,
                    fields: item.fields,
                });
                console.log('Tabell: ', item.id);
            });
            fetchNextPage();
        });

        await base('Book').select({view: 'Prototype'}).eachPage((records, fetchNextPage) => {
            let count = 0;
            records.forEach((record) => {
                const item = record._rawJson;

                krav.addNode({
                    sequence: count++,
                    id: item.id,
                    fields: item.fields,
                    figref: store.createReference('Figur', item.fields.Figurer),
                    tabref: store.createReference('Tabell', item.fields.Tabeller),
                    kravref: store.createReference('Krav', item.fields.Henvisninger),
                });
                console.log('Krav: ', item.id);
                if(item.fields.Figurer) { console.log('Has ref: ', item.fields.Figurer); }
            });
            fetchNextPage();
        });

    });
};
