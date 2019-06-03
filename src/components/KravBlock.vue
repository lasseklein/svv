<template>


    <div v-bind:class="'kravBlock pr-4 bg-gray-bg border border-gray-medium p-3 '+ isSeparateStyle">

        <div class="flex justify-between text-xs text-gray-dark">
            <div class="">{{block.koblet?'Delkrav':'Krav'}} {{block.kravID}} <span
                            class="m-2 px-1 krav rounded font-medium uppercase tracking-wider"
                            v-bind:class="block.kravtype">{{rectype}}</span></div>
            <div class="text-right"><span class="italic underline mr-4">Versjon {{block.versjon}}</span> <i class="far fa-star text-lg"></i></div>
        </div>


        <div v-html="block.krav" class="my-4 text-lg"></div>

        <KravExplanation v-bind:text="block.veiledning" />

        <div v-if="block.figref.length || block.tabref.length || block.kravref.length" class="references border-gray-light pt-3 border-t">

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
                            {{ ref.booknr[0]}}: kapittel {{ ref.kapittel }}
                        </span>
                        <span v-else>
                            {{ ref.booknr[0]}}: {{ ref.kapittel }}.{{ ref.avsnitt }}
                        </span>
                    </span>
                </span>
            </div>

        </div>

    </div>


</template>


<script>

    import KravExplanation from "./KravExplanation";

    export default {
        name: 'KravBlock',
        components: {
            KravExplanation,
        },
        props: ['block'],

        computed: {
            rectype: function () {
                let texts = {
                    'K': 'KAN',
                    'B': 'BØR',
                    'S': 'SKAL',
                };
                return texts[this.block.kravtype.charAt(0)];
            },
            isSeparateStyle: function() {
                return (this.block.koblet)?'border-dashed border-t-0':'mt-8';
            }
        },

    };

</script>



<style scoped>

    .krav.Kan { color: darkgreen; }
    .krav.Bør { color: darkorange; }
    .krav.Skal { color: darkred; }


</style>