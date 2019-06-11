<template>

    <div class="sticky top-0 py-4">

        <div class="block md:hidden mx-4 ">
            <i class="fas fa-hamburger"></i> Meny for mobil kommer her
        </div>

        <div class="hidden md:block">

            <div class="px-4 pb-2 text-2xl">Håndbok N100</div>

            <div class="pb-2">
                <input class="border border-gray-medium px-2 py-1 mx-3 mb-2 text-sm" type="text" name="søk" placeholder="Søk kommer her">
            </div>

            <div class="flex flex-col h-full overflow-y-auto">
                <div v-for="edge in $static.allKrav.edges" :key="edge.node.id">

                    <a class="flex block content-center hover:bg-gray-light"
                       v-bind:class="(chapter===edge.node.kapittel)?'font-bold':''"
                       v-if="edge.node.type==='Kapittel'"
                       v-bind:href="'/kapittel/'+edge.node.kapittel.toLowerCase()">
                        <span class="block text-sm self-center h-10 px-4 py-2">
                            <span v-if="edge.node.kapittel!=='0'">{{edge.node.kapittel}} </span>
                            {{edge.node.fagtema}}
                        </span>
                    </a>

                    <a class="block hover:bg-gray-light" v-else-if="edge.node.type==='Tittel' && edge.node.avsnitt.length===1 && edge.node.kapittel===chapter" v-bind:href="'#refid-'+edge.node.sequence">
                        <span class="border-l border-gray-medium ml-5 block text-sm h-8 pl-3 pt-1 pb-2">{{edge.node.fagtema}}</span>
                    </a>

                </div>
            </div>
        </div>

    </div>

</template>

<script>

    export default {
        name: 'Sidebar',
        props: ['chapter'],

    }

</script>


<style scoped>

</style>


<static-query>

    query Krav {
        allKrav ( filter: { type:{in: ["Kapittel","Tittel"]}}, sortBy: "sequence", order: ASC ) {
            edges {
                node {
                    sequence
                    kapittel
                    kapittelID
                    avsnitt
                    id
                    type
                    fagtema
                }
            }
        }
    }

</static-query>
