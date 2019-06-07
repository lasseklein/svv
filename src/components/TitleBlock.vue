<template>
    <div v-if="block.type==='Kapittel'" class="">
        <h2 class="title"><span v-if="block.kapittel!=='0'">{{block.kapittel}} </span>{{block.fagtema}}</h2>
    </div>
    <div v-else-if="block.avsnitt.length===1" class="">
        <h3 class="subtitle">{{block.kapittel}}.{{block.avsnitt}} <span class="ml-3">{{block.fagtema}}</span></h3>
    </div>
    <div v-else class="">
        <h3 class="subsubtitle">{{block.kapittel}}.{{block.avsnitt}} <span class="ml-3">{{block.fagtema}}</span></h3>
    </div>
</template>


<script>
    export default {
        name: 'TitleBlock',
        props: ['block'],
    };
</script>