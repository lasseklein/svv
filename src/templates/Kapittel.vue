<template>
    <Layout>
      <template slot="sidebar">
        <Sidebar v-bind:chapter="$context.chapter" />
       </template>

      <template  slot="content">

        <div v-for="edge in $page.allKrav.edges" :key="edge.node.sequence" class="block">

          <section v-bind:id="edge.node.id"></section>
          <TitleBlock v-if="edge.node.type==='Kapittel'||edge.node.type ==='Tittel'" v-bind:block="edge.node" />
          <TextBlock v-else-if="edge.node.type==='Tekst'" v-bind:block="edge.node" />
          <KravBlock v-else   ="edge.node.type==='Krav'"  v-bind:block="edge.node" />

        </div>

      </template>

    </Layout>
</template>


<script>
  import Layout from '~/layouts/Default.vue'
  import KravBlock  from '../components/KravBlock';
  import TitleBlock from '../components/TitleBlock';
  import TextBlock  from '../components/TextBlock';
  import Sidebar    from '../components/Sidebar';

  export default {
    name: 'Index',
    components: {
      Layout,
      KravBlock,
      TitleBlock,
      TextBlock,
      Sidebar,
    },

  };
// Removed from page query (, $book: String) filter: , booknr: {contains: [$book]}
</script>


<style scoped>

</style>


<page-query>
  query Krav ($chapter: String) {
    allKrav ( filter: { kapittel: {eq: $chapter }}, sortBy: "sequence", order: ASC ) {
      edges {
        node {
          sequence
          krav
          kravID
          kravtype
          kapittel
          avsnitt
          id
          type
          fagtema
          versjon
          veiledning
          vedlegg {
            filename
            url
          }
          koblet
          tabref {
            navn
            tekst
            bilde {
              url
              thumbnails {
                small {
                  url
                }
              }
            }
          }
          kravref {
            id
            booknr
            kapittel
            avsnitt
            kravID
            type
          }
          figref {
            tekst
            navn
            bilde {
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

