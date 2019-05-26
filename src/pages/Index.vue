<template>
    <Layout>
      <template slot="sidebar">
        <div class="sticky top-0 py-4">
          Sidebar kommer her
        </div>
      </template>

      <template  slot="content">
        <h1>N100</h1>

        <template v-for="edge in $page.allKrav.edges">

          <template v-if="edge.node.Type === 'Krav'">
            <KravBlock :block="edge.node"  />
          </template>

          <template v-else="edge.node.Type === 'Tittel'">
            <TitleBlock :block="edge.node" />
          </template>

        </template>

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
          Figurref
          id
          Type
          Fagtema
          Versjon
        }
      }
    }
  }

</page-query>

