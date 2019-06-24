// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
    api.loadSource(({addContentType}) => {
        // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    });

    api.createPages(async ({graphql, createPage}) => {

        const books = [ 'N100', 'V121' ];

        books.forEach(async(book) => {

            console.log("Processing book: ", book);

            const aBook = await graphql(`
                query Krav {
                    allKrav ( 
                        filter: { 
                            type:{
                                eq: "Kapittel"
                            },
                            booknr: {
                                contains: ["${book}"]
                            }
                        }, 
                        sortBy: "sequence", 
                        order: ASC 
                    ) {
                        edges {
                            node {
                                sequence
                                kapittel
                                kapittelID
                                avsnitt
                                id
                                type
                                fagtema
                                booknr
                                book {
                                    tittel
                                }
                            }
                        }
                    }
                }
           `);

            aBook.data.allKrav.edges.forEach(({node}) => {

                createPage({
                    path: `/${node.kapittelID}`,
                    component: './src/templates/Kapittel.vue',
                    context: {
                        chapter: node.kapittel,
                        book: book,
                        bookTitle: node.book[0].tittel,
                    },
                })
            });

        });

    });
};
