<template>
    <Layout>

      <template slot="sidebar">
        <Sidebar v-bind:edges="$page.allKrav.edges" />
       </template>

      <template  slot="content">
        <div v-for="edge in $page.allKrav.edges" :key="edge.node.sequence" class="block">
          <a v-bind:id="'refid-'+edge.node.Nr"></a>

          <template v-if="edge.node.Type === 'Tittel'">
            <TitleBlock v-bind:block="edge.node" />
          </template>

          <template v-else="edge.node.Type === 'Krav'">
            <KravBlock v-bind:block="edge.node" />
          </template>

        </div>

      </template>

    </Layout>
</template>


<script>
  import KravBlock from '../components/KravBlock';
  import TitleBlock from '../components/TitleBlock';
  import Sidebar from '../components/Sidebar';

  export default {
    name: 'Index',
    components: {
        KravBlock,
        TitleBlock,
        Sidebar,
    },
  };

</script>


<style scoped>
</style>


<page-query>
  query Krav  {
    allKrav ( filter: { Kapittel:{eq: "D"}}, sortBy: "sequence", order: ASC ) {
      edges {
        node {
          sequence
          Krav
          KravID
          Kravtype
          Kapittel
          Avsnitt
          Nr
          id
          Type
          Fagtema
          Versjon
          Figur
          Tilknyttet_tekst
          Avhengig
          tabref {
            Navn
            Tekst
            Bilde {
              url
              thumbnails {
                small {
                  url
                }
              }
            }
          }
          kravref {
            Book_Number
            Kapittel
            Avsnitt
            KravID
            Type
          }
          figref {
            Tekst
            FigurNr
            Figurbilde {
              url
              thumbnails {
                small {
                  url
                }
              }
            }
          }

        }
      }
    }
  }


</page-query>




















