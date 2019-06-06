<template>

    <div class="sticky top-0 py-4 h-screen">
        <h3 class="px-4 pb-6 text-2xl">Håndbok N100</h3>
        <div class="h-full overflow-y-auto">
            <div v-for="edge in $static.allKrav.edges" :key="edge.node.id">
                <a v-if="edge.node.fagtema" class="block border-b border-gray-medium self-center hover:bg-gray-light" v-bind:href="'.#refid-'+edge.node.sequence">
                    <span class="block h-16 px-4 py-2">{{edge.node.kapittel}} {{edge.node.fagtema}}</span>
                </a>
                <!-- For andre kapitler: +'?c='+edge.node.Kapittel -->
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
        allKrav ( filter: { type:{eq: "Kapittel"}}, sortBy: "sequence", order: ASC ) {
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
