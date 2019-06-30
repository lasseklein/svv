<template>
    <div class="tw-bg-white tw-border tw-border-gray-frame tw-py-4" v-bind:class="isAttachedStyle">


        <v-collapse-wrapper>
            <div class="tw-flex tw-flex-row tw-items-baseline tw-justify-between tw-flex-no-wrap tw-text-xs tw-text-gray-dark tw-flex-initial tw-mx-4">
                <div class="tw-flex tw-uppercase tw-grow">
                    <svg viewBox="0 0 21 14" width="21" height="15" class="tw-fill-current tw-text-gray-dark tw-mr-1" v-bind:class="isAttached">
                        <path d="M13.6,1.4c-0.1-0.1-0.4-0.1-0.5,0l-1.4,1.4c-0.1,0.1-0.1,0.4,0,0.5l3.2,3.2c0,0,0,0,0,0H3.2C3,6.6,2.8,6.4,2.8,6.2V1.7
        c0-0.2-0.2-0.4-0.4-0.4h-2C0.2,1.3,0,1.5,0,1.7V9c0,0.2,0.2,0.4,0.4,0.4h14.4c0,0,0,0,0,0l-3.3,3.3c-0.1,0.1-0.1,0.4,0,0.5l1.4,1.4
        c0.1,0.1,0.4,0.1,0.5,0l6.4-6.4c0.1-0.1,0.1-0.4,0-0.5L13.6,1.4z"></path>
                    </svg>
                    {{block.koblet?'Delkrav':'Krav'}} {{block.kravID}}
                    <span class="tw-pl-2 tw-krav tw-font-medium tw-uppercase tw-tracking-wide" v-bind:class="recclass">{{rectype}}</span>
                </div>
                <div class="tw-flex tw-text-right tw-shrink">
                    <span v-collapse-toggle class="tw-self-center tw-italic tw-underline tw-mr-4 tw-cursor-pointer" >Versjon {{block.versjon}}</span>

                    <i class="far fa-star tw-text-lg" v-bind:class="{starred:isActive, far:isActive, fas:isActive}" v-on:click="toggleStar"></i>
                </div>
            </div>
            <div v-collapse-content>
                <div class="arrow_box tw-bg-gray-light tw-mt-2 tw-text-sm tw-mx-4">
                    <p class="tw-px-4 tw-py-2">Versjoner av dette kravet:</p>
                    <p v-for="n in block.versjon*10-9" class="tw-px-4"><a class="tw-ml-2 tw-underline" href="#">Versjon {{(Math.round(10*(block.versjon)-(n-1))/10).toFixed(1)}}</a> – {{fakedate(n)}}</p>
                </div>
            </div>
        </v-collapse-wrapper>



        <div v-html="compiledMarkdown" class="tw-mt-4 tw-mx-4 tw-text-base" v-bind:class="isAttachedKrav"></div>

        <KravExplanation v-bind:text="block.veiledning" />

        <div v-if="block.figref.length || block.tabref.length || block.kravref.length" class="tw-border-gray-light tw-pt-1 tw-border-t tw-mx-4 tw-mt-3">

            <Thumbnail v-bind:item="block.figref" name="Figur" v-bind:isActive="false"/>
            <Table v-bind:item="block" name="Tabell" v-bind:isActive="false" />
            <Reference v-bind:block="block" v-bind:showContent="false" />

            <div v-if="block.vedlegg.length" v-for="vl in block.vedlegg" :key="vl.filename" class="tw-mt-3">
                <a v-bind:href="vl.url" class="tw-underline tw-text-gray-dark tw-text-sm "><i class="fas fa-paperclip tw-mr-3"></i>{{vl.filename}}</a>
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
            fakedate: function(n){
                var now = new Date;
                var date = new Date(now.setMonth(now.getMonth() - (n*12 + Math.random()*12) ));
                return date.getDate()+'.'+(date.getMonth()+1)+' '+date.getFullYear();
            },
            toggleStar: function(){
                this.isActive = !this.isActive;
            },
        },

        computed: {
            compiledMarkdown: function(){
                return marked(this.block.krav, { sanitize: true })
                    .replace(/(\b(?:skal|bør|kan)\b)/gi, '<em>$1</em>')
                    .replace(/<p>/g, '<p class="tw-my-2">')
                    .replace(/<ul>/g,'<ul class="tw-pl-8 tw-list-disc">')
                    .replace(/<li>/g, '<li class="tw-mt-1">')
                    .replace(/<a href/g, '<a class="tw-underline tw-font-medium" href')
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
                    'K':'tw-text-green-dark',
                    'B':'tw-text-orange-dark',
                    'S':'tw-text-red-dark',
                };
                return kravfarge[this.block.kravtype.charAt(0)];
            },
            isAttachedStyle: function() {
                return (this.block.koblet)?'tw-border-t-0':'tw-mt-8';
            },
            isAttachedKrav: function() {
                return (this.block.koblet)?'tw-pl-6':'';
            },
            isAttached: function(){
                return (this.block.koblet)?'':'tw-hidden';
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