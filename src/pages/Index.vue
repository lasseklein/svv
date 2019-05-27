<template>
    <Layout>
      <template slot="sidebar">
        <div class="sticky top-0 py-4 px-4">
          <h3 class="px-2 text-2xl">Håndbok N100</h3>
          <div v-for="edge in $page.allKrav.edges" :key="edge.node.id">
            <div v-if="edge.node.Fagtema" class="px-2 py-2 border-b">
              {{ edge.node.Nr}}. {{edge.node.Fagtema}}
            </div>
          </div>
        </div>
      </template>

      <template  slot="content">
        <h1>N100</h1>

        <div v-for="edge in $page.allKrav.edges" :key="edge.node.id">
          <a :id="edge.node.Nr"></a>
          <template v-if="edge.node.Type === 'Krav'">
            <KravBlock :block="edge.node" />
          </template>

          <template v-else="edge.node.Type === 'Tittel'">
            <TitleBlock :block="edge.node" />
          </template>

        </div>

      </template>

    </Layout>
</template>


<script>
  import KravBlock from '../components/KravBlock'
  import TitleBlock from '../components/TitleBlock'

  export default {
    components: {
      KravBlock,
      TitleBlock,
    },
 };
</script>


<style>
</style>


<page-query>
  query Krav  {
    allKrav (filter: { Kapittel:{eq: "B"}}, sortBy: "Nr", order: ASC) {
      edges {
        node {
          Krav
          Nr
          Figur
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




















