<template>
    <Layout>
        <template slot="sidebar">
            <Sidebar v-bind:chapter="$context.chapter" v-bind:book="$context.book"
                     v-bind:bookTitle="$context.bookTitle"/>
        </template>

        <template slot="content">
            <div v-for="edge in $page.allKrav.edges" :key="edge.node.sequence" class="tw-max-w-3xl tw-mx-0 md:tw-mx-10">

                <section v-bind:id="edge.node.id"></section>
                <TitleBlock v-if="edge.node.type==='Kapittel'||edge.node.type ==='Tittel'" v-bind:block="edge.node"/>
                <TextBlock v-else-if="edge.node.type==='Tekst'" v-bind:block="edge.node"/>
                <KravBlock v-else="edge.node.type==='Krav'" v-bind:block="edge.node"/>

            </div>
        </template>

    </Layout>
</template>


<script>
  import Layout     from '~/layouts/Default.vue'
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

</script>


<style scoped>

</style>


<page-query>

    query Krav ( $chapter: String, $book: String ) {
        allKrav (
            filter: {
                kapittel: {
                    eq: $chapter
                },
                booknr: {
                    contains: [$book]
                }
            },
            sortBy: "sequence",
            order: ASC
        ) {
            edges {
                node {
                    sequence
                    tekst
                    kravID
                    kravtype
                    kapittel
                    avsnitt
                    id
                    type
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
                        legend
                        beskrivelse
                        bilde {
                            url
                        }
                        lineref (
                            sortBy: "sequence",
                            order: ASC
                        ) {
                            rowtitle
                            coltitle
                            value
                            sequence
                        }
                    }
                    kravref {
                        id
                        booknr
                        kapittel
                        avsnitt
                        kravID
                        tekst
                        type
                    }
                    figref {
                        tekst
                        navn
                        bilde {
                            url
                        }
                    }
                }
            }
        }
    }

</page-query>

