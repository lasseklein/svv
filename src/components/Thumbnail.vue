<template>
    <div v-if="item.length" class="">
        <div v-for="ref in item" :key="item.navn" >

            <div v-for="bilde in ref.bilde" :key="item.navn" >

                <v-collapse-wrapper>

                    <div v-bind:href="bilde.url" class="header flex flex-row w-full cursor-pointer" v-collapse-toggle>
                        <!-- <div class="w-12 h-8 mr-2 border border-gray-frame flex-grow-0" v-bind:style="'background-image: url('+bilde.thumbnails.small.url+')'"> </div> -->
                        <i class="fas fa-image text-xl text-gray-dark mr-2"></i><div class="flex-grow text-sm">{{name}} {{ref.navn }}:<span class="ml-2 text-gray-dark">{{ ref.tekst }}</span></div>
                    </div>

                    <div class="my-content my-2" v-collapse-content><a v-bind:href="bilde.url" target="_blank" class="cursor-pointer object-contain"><img v-bind:src="bilde.url" /></a></div>

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