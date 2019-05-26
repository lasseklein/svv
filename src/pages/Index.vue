<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />
    
    <h1>N100</h1>

    <div v-for="edge in $page.allKrav.edges" :key="edge.node.Nr">
      <div v-if="edge.node.Type === 'Krav'">
        <KravBlock :block="edge.node" />
      </div>
      <div v-else="edge.node.Type === 'Tittel'">

      </div>
    </div>
  </Layout>
</template>


<script>
  import KravBlock from '../components/KravBlock'

  export default {
    components: {
      KravBlock,
    },
 };
</script>


<style>
.home-links a {
  margin-right: 1rem;
}
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
        }
      }
    }
  }

</page-query>


