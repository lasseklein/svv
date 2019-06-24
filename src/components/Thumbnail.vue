<template>
    <div v-if="item.length" class="">
        <div v-for="ref in item" :key="item.navn" >

            <div v-for="bilde in ref.bilde" :key="item.navn" >

                <v-collapse-wrapper :active="isActive">

                    <div v-bind:href="bilde.url" class="mt-3 header flex flex-row w-full cursor-pointer text-sm whitespace-no-wrap" v-collapse-toggle>
                        <!-- <div class="w-12 h-8 mr-2 border border-gray-frame flex-grow-0" v-bind:style="'background-image: url('+bilde.thumbnails.small.url+')'"> </div> -->
                        <i class="fas fa-image text-xl text-gray-dark mr-2"></i>{{name}} {{ref.navn }}:<span class="ml-2 text-gray-dark whitespace-normal">{{ ref.tekst }}</span>
                    </div>

                    <div class="my-content" v-collapse-content>
                        <a v-bind:href="bilde.url" target="_blank" class=" object-contain"><img v-bind:src="bilde.url" class="img-zoomable cursor-pointermt-2"/></a>
                    </div>

                </v-collapse-wrapper>

            </div>

        </div>
    </div>
</template>


<script>

    export default {
        name: 'Thumbnail',
        props: ['item', 'name', 'isActive'],

</script>


<style scoped>

</style>