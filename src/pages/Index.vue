<template>
    <Layout>

      <template slot="content">

        <div class="flex flex-row">

          <a v-for="edge in $page.allBook.edges" :key="edge.node.id"
             v-if="edge.node.booknr==='N100'||edge.node.booknr==='V121'"
             v-bind:href="'/'+edge.node.booknr+'/1'"
             class="m-8 w-48"
          >

            <img v-bind:src="edge.node.forside[0].url"  />
            <div class="mt-4 text-center">{{edge.node.booknr}}</div>
            <div class="mt-4 text-center">{{edge.node.tittel}}</div>
          </a>

        </div>
      </template>

    </Layout>
</template>


<script>
  import Layout from '~/layouts/Frontpage.vue'

  export default {
    name: 'Index',
    components: {
      Layout,
    },

  };

</script>


<style scoped>
</style>


<page-query>
  query Book {
    allBook ( sortBy: "sequence", order: ASC ) {
      edges {
        node {
          sequence
          id
          navn
          tittel
          type
          booknr
          forside{
           url
          }

        }
      }
    }
  }
</page-query>



