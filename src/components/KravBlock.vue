<template>


    <div class="kravBlock pr-4 bg-gray-verylight border border-gray-frame p-3" v-bind:class="isAttachedStyle">


        <div class="flex flex-row items-baseline justify-between flex-no-wrap text-xs text-gray-dark ">

            <div class="flex uppercase">
                <svg viewBox="0 0 21 14" width="21" height="15" class="fill-current text-gray-dark mr-1" v-bind:class="isAttached">
                    <path d="M13.6,1.4c-0.1-0.1-0.4-0.1-0.5,0l-1.4,1.4c-0.1,0.1-0.1,0.4,0,0.5l3.2,3.2c0,0,0,0,0,0H3.2C3,6.6,2.8,6.4,2.8,6.2V1.7
    c0-0.2-0.2-0.4-0.4-0.4h-2C0.2,1.3,0,1.5,0,1.7V9c0,0.2,0.2,0.4,0.4,0.4h14.4c0,0,0,0,0,0l-3.3,3.3c-0.1,0.1-0.1,0.4,0,0.5l1.4,1.4
    c0.1,0.1,0.4,0.1,0.5,0l6.4-6.4c0.1-0.1,0.1-0.4,0-0.5L13.6,1.4z"></path>
                </svg>
                {{block.koblet?'Krav':'Krav'}} {{block.kravID}}
                <span class="pl-2 krav font-medium uppercase tracking-wide" v-bind:class="recclass">{{rectype}}</span>
            </div>

            <div class="flex text-right">
                <span class="self-center italic underline mr-4">Versjon {{block.versjon}}</span>
                <i class="far fa-star text-lg"></i>
            </div>
        </div>

        <div v-html="compiledMarkdown" class="mt-4 text-base" v-bind:class="isAttachedKrav"></div>


        <KravExplanation v-bind:text="block.veiledning" />


        <div v-if="block.figref.length || block.tabref.length || block.kravref.length" class="references border-gray-light pt-3 mt-4 border-t">

            <Thumbnail v-bind:item="block.figref" name="Figur" />
            <Thumbnail v-bind:item="block.tabref" name="Tabell" />


            <div v-if="block.kravref.length" class="text-sm mt-2">
                Se også:
                <span v-for="ref in block.kravref" :key="block.sequence" class="text-gray-dark p-1 ml-2 underline cursor-pointer">

                    <a v-if="ref.type==='Krav'" v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id">Krav {{ ref.kravID }}</a>
                    <a v-else v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id">{{ ref.booknr[0]}} {{ ref.kapittel }}.{{ ref.avsnitt }}</a>

                </span>
            </div>


            <div v-if="block.vedlegg.length" class="mt-2">
                <i class="fas fa-paperclip"></i> Vedlegg:
                <span v-for="vl in block.vedlegg" :key="vl.filename">
                    <a v-bind:href="vl.url">{{vl.filename}}</a>
                </span>
            </div>

        </div>


    </div>


</template>


<script>

    import marked from "marked";


    import KravExplanation from "./KravExplanation";
    import Thumbnail from "./Thumbnail";

    // TODO: Show/hide for bilder og figurer

    export default {
        name: 'KravBlock',
        components: {
            KravExplanation,
            Thumbnail,
            marked,
        },
        props: ['block'],

        computed: {
            compiledMarkdown: function(){
                return marked(this.block.krav, { sanitize: true })
                    .replace(/<p>/g, '<p class="my-2">')
                    .replace(/<ul>/g,'<ul class="pl-8 list-disc">')
                    .replace(/<li>/g, '<li class="mt-1">')
                    .replace(/<a href/g, '<a class="underline font-medium" href')
            },
            rectype: function () {
                let texts = {
                    'K': 'Anbefaling',
                    'B': 'BØR',
                    'S': 'SKAL',
                };
                return texts[this.block.kravtype.charAt(0)];
            },
            recclass: function(){
                let kravfarge = {
                    'K':'text-green-dark',
                    'B':'text-orange-dark',
                    'S':'text-red-dark',
                };
                return kravfarge[this.block.kravtype.charAt(0)];
            },
            isAttachedStyle: function() {
                return (this.block.koblet)?'border-t-0':'mt-8';
            },
            isAttachedKrav: function() {
                return (this.block.koblet)?'pl-6':'';
            },
            isAttached: function(){
                return (this.block.koblet)?'':'hidden';
            },

        },

    };

</script>



<style scoped>

    ul {
        list-style-type: square !important;
        list-style: square !important;
    }

</style>