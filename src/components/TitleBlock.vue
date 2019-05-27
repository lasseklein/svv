<template>
    <div v-if="block.Avsnitt==='0'" class="ml-3">
        <h2 class="text-orange text-3xl mb-6">{{block.Fagtema}}</h2>
    </div>
    <div v-else class="ml-3">
        <h3 class="text-xl mt-16 mb-6">{{block.Fagtema}}</h3>
    </div>
</template>


<script>
    export default {
        name: 'TitleBlock',
        props: ['block'],
    };
</script>