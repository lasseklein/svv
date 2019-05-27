<template>
    <Layout>

      <template slot="sidebar">
        <div class="sticky top-0 py-4 h-screen">
          <h3 class="px-2 px-4 text-2xl">Håndbok N100</h3>
          <div class="h-full overflow-y-auto">
            <div v-for="edge in $page.allKrav.edges" :key="edge.node.id">
              <template v-if="edge.node.Avsnitt.length === 1">
                <a v-if="edge.node.Fagtema" class="block border-b hover:bg-orange" v-bind:href="'.#refid-'+edge.node.Nr">
                  <span class="block text-sm h-12 px-4 py-2">{{edge.node.Fagtema}}</span>
                </a>
              </template>
                <!-- For andre kapitler: +'?c='+edge.node.Kapittel -->
            </div>
          </div>
        </div>
      </template>

      <template  slot="content">
        <div v-for="edge in $page.allKrav.edges" :key="edge.node.id">
          <a v-bind:id="'refid-'+edge.node.Nr"></a>
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




















