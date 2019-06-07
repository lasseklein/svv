<template>
    <div v-if="item.length" class="">
        <div v-for="ref in item" :key="item.navn" class="text-sm text-gray-800 flex w-full my-2">
            <div v-for="bilde in ref.bilde" :key="item.navn" >
                <a v-bind:href="bilde.url" target="_blank"><div class="w-12 h-8 mr-2" v-bind:style="'background-image: url('+bilde.thumbnails.small.url+')'"> </div></a>
            </div>
            <div>{{name}} {{ref.navn }}: {{ ref.tekst }}</div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'Thumbnail',
        props: ['item', 'name'],
    };
</script>