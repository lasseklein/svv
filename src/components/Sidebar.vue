<template>

    <div class="sticky top-0 py-4 h-screen">
        <h3 class="px-4 pb-6 text-2xl">Håndbok N100</h3>
        <div class="h-full overflow-y-auto">
            <div v-for="edge in $static.allKrav.edges" :key="edge.node.id">
                <a v-if="edge.node.type==='Kapittel'" class="block border-t border-gray-medium self-center hover:bg-gray-light" v-bind:href="'/kapittel/'+edge.node.kapittel.toLowerCase()">
                    <span class="block h-16 px-4 py-2">{{edge.node.kapittel}}. {{edge.node.fagtema}}</span>
                </a>
                <!-- <a v-else-if="edge.node.type==='Tittel' && edge.node.avsnitt.length === 1" class="ml-10 block"> {{edge.node.kapittel}}.{{edge.node.avsnitt}} {{edge.node.fagtema}}</a> -->
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        name: 'Sidebar',
        props: ['edges'],
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
