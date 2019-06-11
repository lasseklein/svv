<template>
    <div v-if="item.length" class="">
        <div v-for="ref in item" :key="item.navn" >

            <div v-for="bilde in ref.bilde" :key="item.navn" >

                <v-collapse-wrapper>

                    <div v-bind:href="bilde.url" class="header flex w-full cursor-pointer" v-collapse-toggle>
                        <div class="w-12 h-8 mr-2 flex-grow-0" v-bind:style="'background-image: url('+bilde.thumbnails.small.url+')'"> </div>
                        <div class="flex-grow">{{name}} {{ref.navn }}: {{ ref.tekst }}</div>
                    </div>

                    <div class="my-content my-2" v-collapse-content><a v-bind:href="bilde.url" target="_blank" class="cursor-pointer"><img v-bind:src="bilde.url" /></a></div>

                </v-collapse-wrapper>

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