<template>

    <div class="sticky top-0 py-4 h-screen">
        <h3 class="px-4 pb-6 text-2xl">Håndbok N100</h3>
        <div class="flex flex-col h-full overflow-y-auto">
            <div v-for="edge in $static.allKrav.edges" :key="edge.node.id">
                <a class="block border-t border-gray-medium hover:bg-gray-light" v-bind:class="(chapter===edge.node.kapittel)?'font-bold':''" v-if="edge.node.type==='Kapittel'" v-bind:href="'/kapittel/'+edge.node.kapittel.toLowerCase()">
                    <span class="block h-12 px-4 py-2"><span v-if="edge.node.kapittel!=='0'">{{edge.node.kapittel}}. </span>{{edge.node.fagtema}}</span>
                </a>
                <a class="ml-10 my-2 block" v-else-if="edge.node.type==='Tittel' && edge.node.avsnitt.length===1 && edge.node.kapittel===chapter"> {{edge.node.kapittel}}.{{edge.node.avsnitt}} {{edge.node.fagtema}}</a>
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
