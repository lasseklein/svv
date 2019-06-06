<template>
    <Layout>

      <template slot="sidebar">
        <Sidebar />
       </template>

      <template  slot="content">
          <g-link to="/kapittel-b">Kapittel B</g-link>
          <g-link to="/kapittel-c">Kapittel C</g-link>
          <g-link to="/kapittel-d">Kapittel D</g-link>
          <g-link to="/kapittel-e">Kapittel E</g-link>
        <div v-for="edge in $page.allKrav.edges" :key="edge.node.sequence" class="block">
          <a v-bind:id="'refid-'+edge.node.sequence"></a>

          <template v-if="edge.node.type === 'Kapittel' || edge.node.type === 'Tittel'">
            <TitleBlock v-bind:block="edge.node" />
          </template>

          <template v-else-if="edge.node.type === 'Tekst'">
            <TextBlock v-bind:text="edge.node.krav" />
          </template>

          <template v-else="edge.node.type === 'Krav'">
            <KravBlock v-bind:block="edge.node" />
          </template>

        </div>

      </template>

    </Layout>
</template>


<script>
  export default {
    name: 'Index',
    components: {
      KravBlock,
      TitleBlock,
      TextBlock,
      Sidebar,
    },
  };
  import KravBlock  from '../components/KravBlock';
  import TitleBlock from '../components/TitleBlock';
  import TextBlock  from '../components/TextBlock';
  import Sidebar    from '../components/Sidebar';


</script>


<style scoped>
</style>


<page-query>
  query Krav {
    allKrav ( filter: { kapittel: {eq: "B"}}, sortBy: "sequence", order: ASC ) {
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
            booknr
            kapittel
            avsnitt
            kravID
            type
          }
          figref {
            tekst
            figurNr
            figurBilde {
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




















