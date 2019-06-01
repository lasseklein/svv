<template>

    <div class="sticky top-0 py-4 h-screen">
        <h3 class="px-4 pb-6 text-2xl">Håndbok N100</h3>
        <div class="h-full overflow-y-auto">
            <div v-for="edge in edges" :key="edge.node.id">
                <template v-if="edge.node.Avsnitt.length === 1">
                    <a v-if="edge.node.Fagtema" class="block border-b border-gray-medium self-center hover:bg-gray-light" v-bind:href="'.#refid-'+edge.node.Nr">
                        <span class="block h-16 px-4 py-2">{{edge.node.Fagtema}}</span>
                    </a>
                </template>
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

