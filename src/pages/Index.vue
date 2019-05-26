<template>
    <Layout>
      <template slot="sidebar">
        Sidebar kommer her
      </template>

      <template  slot="content">
      <h1>N100</h1>

        <div v-for="edge in $page.allKrav.edges" :key="edge.node.Nr" class="block py-4">
            <div v-if="edge.node.Type === 'Krav'">
              <KravBlock :block="edge.node" />
            </div>
            <div v-else="edge.node.Type === 'Tittel'">
              <TitleBlock :block="edge.node" />
            </div>
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
          Figurref
          id
          Type
          Fagtema
        }
      }
    }
  }

</page-query>


