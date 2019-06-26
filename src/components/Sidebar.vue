<template>

    <div>

            <h4 class="ml-4 mt-2">{{book}} {{bookTitle}}</h4>

            <input class="border border-gray-medium px-2 py-1 mx-3 mb-2 text-sm" type="text" name="søk" placeholder="Søk kommer her" >

            <scrollactive class="nav-scroll-items"
                          active-class="activeitem"
                          :duration=400
                          :offset=80
                          bezier-easing-value=".5,0,.35,1" >
            <v-list
                    dense
                    class="pt-0">
                <div v-for="edge in $static.allKrav.edges" :key="edge.node.id">
                <v-list-tile
                        v-if="edge.node.type==='Kapittel'&&edge.node.booknr[0]===book||'Tittel'&&edge.node.avsnitt.length===1&&edge.node.kapittel===chapter&&edge.node.booknr[0]===book"
                        @click="">
                    <v-list-tile-content>
                        <v-list-tile-title>
                            <a v-bind:class="(chapter===edge.node.kapittel)?'font-bold':''"
                               v-if="edge.node.type==='Kapittel' && edge.node.booknr[0]===book"
                               v-bind:href="edge.node.kapittelID+'#'+edge.node.id"
                               class="content-center" >
                                <div class="text-sm text-black self-center px-4 py-1 ">
                                    <span v-if="edge.node.kapittel.match(/[A-Z]/)">{{edge.node.kapittel}} </span>
                                    {{edge.node.fagtema}}
                                </div>
                            </a>
                            <a v-bind:href="'#'+edge.node.id"
                               v-else-if="edge.node.type==='Tittel' && edge.node.avsnitt.length===1 && edge.node.kapittel===chapter && edge.node.booknr[0]===book"
                               class="scrollactive-item flex border-l border-gray-medium ml-5 pl-2 text-black h-full">
                                <div class="text-sm self-center">{{edge.node.fagtema}}</div>
                            </a>
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                </div>
            </v-list>
            </scrollactive>

    </div>

</template>


<script>

    export default {
        name: 'Sidebar',
        props: ['chapter', 'book', 'bookTitle'],
    }

</script>


<style >

    .v-list__tile.v-list__tile--link.theme--light,
    .v-list__tile__title
    {
        margin: 0;
        padding: 0;
        height: 35px !important;
    }

</style>


<static-query>

    query Krav {
        allKrav (
            filter: {
                type:{
                    in: ["Kapittel","Tittel"]
                }
            },
            sortBy: "sequence",
            order: ASC
        ) {
            edges {
                node {
                    sequence
                    kapittel
                    kapittelID
                    avsnitt
                    id
                    type
                    fagtema
                    booknr
                }
            }
        }
    }

</static-query>
