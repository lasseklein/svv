<template>
    <div v-if="block.type==='Kapittel'" class="">
        <h2 class="text-gray-dark uppercase text-3xl mt-3 mb-6">{{block.kapittel}} {{block.fagtema}}</h2>
    </div>
    <div v-else-if="block.avsnitt.length===1" class="">
        <h3 class="text-3xl mt-16 mb-6">{{block.kapittel}}.{{block.avsnitt}} <span class="ml-3">{{block.fagtema}}</span></h3>
    </div>
    <div v-else class="">
        <h3 class="text-xl mt-16 mb-6">{{block.kapittel}}.{{block.avsnitt}} <span class="ml-3">{{block.fagtema}}</span></h3>
    </div>
</template>


<script>
    export default {
        name: 'TitleBlock',
        props: ['block'],
    };
</script>