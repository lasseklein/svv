// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(({ addContentType }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
  });

  api.createPages(async ({ graphql, createPage }) => {

      const {data} = await graphql(`
        {
          allKrav ( filter: { type:{eq: "Kapittel"}}, sortBy: "sequence", order: ASC ) {
            edges {
              node {
                sequence
                kapittel
                avsnitt
                id
                type
                fagtema
              }
            }
          }
        }
     `);

      data.allKrav.edges.forEach(({ node }) => {
        createPage({
          path: `/kapittel/${node.kapittel}`,
          component: './src/templates/Kapittel.vue',
          //context: {
          //  chapter: node.kapittel
          //}
        })
      });

   });
};
