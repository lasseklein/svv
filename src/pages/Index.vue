<template>
    <Layout>

      <template slot="sidebar">
        <Sidebar v-bind:edges="$page.allKrav.edges" />
       </template>

      <template  slot="content">
        <div v-for="edge in $page.allKrav.edges" :key="edge.node.id" class="block">
          <a v-bind:id="'refid-'+edge.node.Nr"></a>

          <template v-if="edge.node.Type === 'Tittel'">
            <TitleBlock :block="edge.node" />
          </template>

          <template v-else="edge.node.Type === 'Krav'">
            <KravBlock :block="edge.node" />
          </template>

        </div>

      </template>

    </Layout>
</template>


<script>
  import KravBlock from '../components/KravBlock'
  import TitleBlock from '../components/TitleBlock'
  import Sidebar from '../components/Sidebar'

  export default {
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
    allKrav (filter: { Kapittel:{eq: "B"}}, sortBy: "Nr", order: ASC) {
      edges {
        node {
          Krav
          Kapittel
          Avsnitt
          Nr
          Figur
          Tabell
          Tilknyttet_tekst
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
          id
          Type
          Fagtema
          Versjon
        }
      }
    }
  }


</page-query>




















