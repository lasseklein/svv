<template>
        <h1 v-if="block.type==='Kapittel'"><span v-if="block.kapittel!=='0'">{{block.kapittel}}. </span>{{block.fagtema}}</h1>
        <h2 v-else-if="block.avsnitt.length===1">{{block.kapittel}}.{{block.avsnitt}} <span class="tw-ml-3">{{block.fagtema}}</span></h2>
        <h3 v-else-if="block.avsnitt.length===3">{{block.kapittel}}.{{block.avsnitt}} <span class="tw-ml-3">{{block.fagtema}}</span></h3>
        <h4 v-else>{{block.kapittel}}.{{block.avsnitt}} <span class="tw-ml-3">{{block.fagtema}}</span></h4>
</template>


<script>
    export default {
        name: 'TitleBlock',
        props: ['block'],
    };
</script>