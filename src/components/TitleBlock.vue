<template>
    <div v-if="block.Avsnitt==='0'">
        <h2 class="text-orange text-3xl mb-4">{{block.Fagtema}}</h2>
    </div>
    <div v-else>
        <h3 class="text-xl mb-4">{{block.Fagtema}}</h3>
    </div>
</template>


<script>
    export default {
        name: 'TitleBlock',
        props: ['block'],
    };
</script>