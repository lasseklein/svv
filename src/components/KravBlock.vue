<template>
    <div class="kravBlock bg-gray-verylight border border-gray-frame p-4" v-bind:class="isAttachedStyle">

        <v-collapse-wrapper>
            <div class="flex flex-row items-baseline justify-between flex-no-wrap text-xs text-gray-dark ">
                <div class="flex uppercase">
                    <svg viewBox="0 0 21 14" width="21" height="15" class="fill-current text-gray-dark mr-1" v-bind:class="isAttached">
                        <path d="M13.6,1.4c-0.1-0.1-0.4-0.1-0.5,0l-1.4,1.4c-0.1,0.1-0.1,0.4,0,0.5l3.2,3.2c0,0,0,0,0,0H3.2C3,6.6,2.8,6.4,2.8,6.2V1.7
        c0-0.2-0.2-0.4-0.4-0.4h-2C0.2,1.3,0,1.5,0,1.7V9c0,0.2,0.2,0.4,0.4,0.4h14.4c0,0,0,0,0,0l-3.3,3.3c-0.1,0.1-0.1,0.4,0,0.5l1.4,1.4
        c0.1,0.1,0.4,0.1,0.5,0l6.4-6.4c0.1-0.1,0.1-0.4,0-0.5L13.6,1.4z"></path>
                    </svg>
                    {{block.koblet?'Delkrav':'Krav'}} {{block.kravID}}
                    <span class="pl-2 krav font-medium uppercase tracking-wide" v-bind:class="recclass">{{rectype}}</span>
                </div>
                <div class="flex text-right">
                    <span v-collapse-toggle class="self-center italic underline mr-4 cursor-pointer" >Versjon {{block.versjon}}</span>

                    <i class="far fa-star text-lg" v-bind:class="{starred:isActive, far:isActive, fas:isActive}" v-on:click="toggleStar"></i>
                </div>
            </div>
            <div v-collapse-content>
                <div class="bg-gray-light mt-2 arrow_box text-sm">
                    <p class="px-4 py-2">Versjoner av dette kravet:</p>
                    <p v-for="n in block.versjon*10-9" class="px-4 py-1">[Dato]:<a class="ml-2 underline" href="#">Versjon {{(Math.round(10*(block.versjon)-(n-1))/10).toFixed(1)}}</a></p>
                </div>
            </div>
        </v-collapse-wrapper>

        <div v-html="compiledMarkdown" class="mt-4 text-base" v-bind:class="isAttachedKrav"></div>

        <KravExplanation v-bind:text="block.veiledning" />

        <div v-if="block.figref.length || block.tabref.length || block.kravref.length" class="references border-gray-light pt-1 mt-3 border-t">

            <Thumbnail v-bind:item="block.figref" name="Figur" v-bind:isActive="false"/>
            <Table v-bind:item="block" name="Tabell" v-bind:isActive="false" />
            <Reference v-bind:block="block" v-bind:showContent="false" />

            <div v-if="block.vedlegg.length" v-for="vl in block.vedlegg" :key="vl.filename" class="mt-3">
                <a v-bind:href="vl.url" class="underline text-gray-dark text-sm "><i class="fas fa-paperclip mr-4"></i>{{vl.filename}}</a>
            </div>

        </div>

    </div>
</template>


<script>

    import marked from "marked";

    import KravExplanation from "./KravExplanation";
    import Thumbnail from "./Thumbnail";
    import Reference from "./Reference";
    import Table from "./Table";


    export default {
        name: 'KravBlock',
        components: {
            KravExplanation,
            Thumbnail,
            Reference,
            Table,
            marked,
        },
        props: ['block'],

        data() {
            return {
                isActive: false
            }
        },

        methods: {
            toggleStar: function(){
                this.isActive = !this.isActive;
            },
        },

        computed: {
            compiledMarkdown: function(){
                return marked(this.block.krav, { sanitize: true })
                    .replace(/(\b(?:skal|bør|kan)\b)/gi, '<em>$1</em>')
                    .replace(/<p>/g, '<p class="my-2">')
                    .replace(/<ul>/g,'<ul class="pl-8 list-disc">')
                    .replace(/<li>/g, '<li class="mt-1">')
                    .replace(/<a href/g, '<a class="underline font-medium" href')
            },
            rectype: function () {
                let texts = {
                    'K': 'KAN',
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



<style >

    ul {
        list-style-type: square !important;
        list-style: square !important;
    }

    .starred{
        color: #FF9600;
    }

    .arrow_box {
        position: relative;
        background: #ffffff;
        border: 1px solid #000000;
    }
    .arrow_box:after,
    .arrow_box:before {
        bottom: 100%;
        right: 60px;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .arrow_box:after {
        border-color: rgba(255, 255, 255, 0);
        border-bottom-color: #ffffff;
        border-width: 8px;
        margin-right: -8px;
    }
    .arrow_box:before {
        border-color: rgba(0, 0, 0, 0);
        border-bottom-color: #000000;
        border-width: 9px;
        margin-right: -9px;
    }

    @media (max-width: 768px) {
        .arrow_box:after,
        .arrow_box:before {
            /* left: 85%; */
        }
    }

</style>