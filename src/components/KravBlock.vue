<template>


    <div class="kravBlock pr-4 bg-gray-bg border border-gray-medium p-3" v-bind:class="isSeparateStyle">
        <div v-bind:class="isSeparateKrav" >

            <div class="flex justify-between text-xs text-gray-dark">
                <div class="uppercase">{{block.koblet?'Delkrav':'Krav'}} {{block.kravID}} <span
                                class="m-2 px-1 krav rounded font-medium uppercase tracking-wide"
                                v-bind:class="block.kravtype">{{rectype}}</span></div>
                <div class="text-right"><span class="italic underline mr-4">Versjon {{block.versjon}}</span> <i class="far fa-star text-lg"></i></div>
            </div>


            <div v-html="compiledMarkdown" class="mt-4 text-lg"></div>


            <KravExplanation v-bind:text="block.veiledning" />

            <div v-if="block.figref.length || block.tabref.length || block.kravref.length" class="references border-gray-light pt-3 mt-4 border-t">

                <!-- FIGURE -->
                <div v-if="block.figref.length" class="">
                    <div v-for="figref in block.figref" :key="block.figref.figurNr" class="text-sm text-gray-800 flex w-full my-2">
                        <div v-for="bilde in figref.figurBilde" :key="block.figurNr" >
                            <a v-bind:href="bilde.url" target="_blank"><div class="w-12 h-8 mr-2" v-bind:style="'background-image: url('+bilde.thumbnails.small.url+')'"> </div></a>
                        </div>
                        <div>Figur {{figref.figurNr }}: {{ figref.tekst }}</div>
                    </div>
                </div>


                <!-- TABLE -->
                <div v-if="block.tabref.length" class="">
                    <div class="">
                        <div v-for="tabref in block.tabref" :key="block.tabref.navn" class="text-sm text-gray-800 flex w-full my-2">
                            <div v-for="bilde in tabref.bilde" :key="block.tabref.navn" >
                                <a v-bind:href="bilde.url" target="_blank"><div class="w-12 h-8 mr-2" v-bind:style="'background-image: url('+bilde.thumbnails.small.url+')'"> </div></a>
                            </div>
                            <div>Tabell {{tabref.navn }}: {{ tabref.tekst }}</div>
                        </div>
                    </div>
                </div>


                <div v-if="block.kravref.length" class="mt-2">
                    Se også:
                    <span v-for="ref in block.kravref" :key="block.sequence" class="text-sm text-gray-dark bg-gray-light p-1 rounded ml-2 cursor-pointer">
                        <span v-if="ref.Type==='Krav'">
                            Krav {{ ref.kravID }}
                        </span>
                        <span v-else>
                            <span v-if="ref.avsnitt==='0'">
                                {{ ref.booknr[0]}}: Kapittel {{ ref.kapittel }}
                            </span>
                            <span v-else>
                                {{ ref.booknr[0]}}: {{ ref.kapittel }}.{{ ref.avsnitt }}
                            </span>
                        </span>
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

    </div>


</template>


<script>

    import marked from "marked";

    import KravExplanation from "./KravExplanation";

    export default {
        name: 'KravBlock',
        components: {
            KravExplanation,
        },
        props: ['block'],

        computed: {
            compiledMarkdown: function(){
                return marked(this.block.krav, { sanitize: true })
                    .replace('<ul>','<ul class="pl-8 list-disc">')
                    .replace('<li>','<li class="mt-1">')
                    .replace('<a href', '<a class="underline font-medium" href')
            },
            rectype: function () {
                let texts = {
                    'K': 'Anbefaling',
                    'B': 'BØR',
                    'S': 'SKAL',
                };
                return texts[this.block.kravtype.charAt(0)];
            },
            isSeparateStyle: function() {
                return (this.block.koblet)?'border-dashed border-t-0':'mt-8';
            },
            isSeparateKrav: function() {
                return (this.block.koblet)?'border-l border-gray-dark pl-4':'';
            }
        },

    };

</script>



<style scoped>

    .krav.Kan { color: darkgreen; }
    .krav.Bør { color: darkorange; }
    .krav.Skal { color: darkred; }

    ul {
        list-style-type: square !important;
        list-style: square !important;
    }

</style>