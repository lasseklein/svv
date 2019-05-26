<template>
    <div>
        <span class="text-xs text-gray-400">{{ block.Nr }}.</span>
        <h2 class="text-xl mb-4">{{block.Fagtema}}</h2>
    </div>
</template>


<script>
    export default {
        name: 'TitleBlock',
        props: ['block'],
    };
</script>