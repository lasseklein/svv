<template>
    <div v-if="block.Avsnitt==='0'" class="">
        <h2 class="text-gray-dark uppercase text-3xl mb-6">{{block.Kapittel}} {{block.Fagtema}}</h2>
    </div>
    <div v-else-if="block.Avsnitt.length===1" class="">
        <h3 class="text-3xl mt-16 mb-6">{{block.Kapittel}}.{{block.Avsnitt}} <span class="ml-3">{{block.Fagtema}}</span></h3>
    </div>
    <div v-else class="">
        <h3 class="text-xl mt-16 mb-6">{{block.Kapittel}}.{{block.Avsnitt}} <span class="ml-3">{{block.Fagtema}}</span></h3>
    </div>
</template>


<script>
    export default {
        name: 'TitleBlock',
        props: ['block'],
    };
</script>