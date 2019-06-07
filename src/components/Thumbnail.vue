<template>
    <div v-if="item.length" class="">
        <div v-for="ref in item" :key="item.navn" >

            <div v-for="bilde in ref.bilde" :key="item.navn" >
                <a v-bind:href="bilde.url" target="_blank" class="flex w-full hover:bg-gray-light py-2">
                    <div class="w-12 h-8 mr-2 flex-grow-0" v-bind:style="'background-image: url('+bilde.thumbnails.small.url+')'"> </div>
                    <div class="flex-grow">{{name}} {{ref.navn }}: {{ ref.tekst }}</div>
                </a>
                <div class="hidden"><img v-bind:src="bilde.url" /></div>
            </div>

        </div>
    </div>
</template>


<script>
    export default {
        name: 'Thumbnail',
        props: ['item', 'name'],
    };
</script>