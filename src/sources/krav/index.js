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






        await base('N100').select({view: 'Prototype'}).eachPage((records, fetchNextPage) => {
            let count = 0;
            records.forEach((record) => {
                const item = record._rawJson;

                krav.addNode({
                    sequence: count++,
                    id: item.id,
                    fields: item.fields,
                });

                console.log('Retrieved', item.fields.Nr);

            });
            fetchNextPage();
        });

         await base('Figurer').select().eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                figurer.addNode({
                    id: item.id,
                    fields: item.fields,
                });

                console.log('Retrieved', item.fields.FigurNr);

            });
            fetchNextPage();
        });



         await base('Tabellinjer').select().eachPage((records, fetchNextPage) => {
            records.forEach((record) => {
                const item = record._rawJson;

                tabeller.addNode({
                    id: item.id,
                    fields: item.fields,
                });

                console.log('Retrieved', item.fields.Value);

            });
            fetchNextPage();
        });



    });
};



/*
query Krav {
  allKrav {
    edges {
      node {
        Krav
        id
        Nr
        Henvisning_til_annen_normal_eller_veiledning
      }
    }
  }
}

*
* */
/*
query Krav {
  allKrav (sortBy: "Nr", order: ASC) {
    edges {
      node {

        Nr
        id
      }
    }
  }
}
*/

/*
query Krav {
  allKrav (filter: {Kapittel:{eq: "B"}} sortBy: "Nr", order: ASC) {
    edges {
      node {
        Nr
        id
      }
    }
  }
}

 */

/*


query Figur {
  allFigur (filter: {id:{eq: "recXGbYMJIrGY568w"}}) {
    edges {
      node {
			Figurbilde {
        thumbnails {
          large {
            url
          }
        }
      }
      id
      }
    }
  }
}




query Krav {
  krav (id:"rec0GrsrelAdl4IOO"){
        Nr
        id
    }
  }

 */


/*
query Krav {
  allKrav (filter: {Kapittel:{eq: "B"}} sortBy: "Nr", order: ASC) {
    edges {
      node {
		Krav
        Nr
        Figurref
        id
      }
    }
  }
}



query Figur {
  allFigur (filter: {id:{eq: "recXGbYMJIrGY568w"}}) {
    edges {
      node {

        id
      }
    }
  }
}

 */