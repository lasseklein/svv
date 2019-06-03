<template>


    <div v-bind:class="'kravBlock pr-4 bg-gray-bg border border-gray-medium p-3 '+ isSeparateStyle">

        <div class="flex justify-between text-xs text-gray-dark">
            <div class="">{{block.Avhengig?'Delkrav':'Krav'}} {{block.KravID}} <span
                            class="m-2 px-1 krav rounded font-medium uppercase tracking-wider"
                            v-bind:class="block.Kravtype">{{rectype}}</span></div>
            <div class="text-right"><span class="italic underline mr-4">Versjon {{block.Versjon}}</span> <i class="far fa-star text-lg"></i></div>
        </div>


        <div v-html="block.Krav" class="my-4 text-lg"></div>

        <KravExplanation v-bind:text="block.Tilknyttet_tekst" />

        <div v-if="block.figref.length || block.tabref.length || block.kravref.length" class="references border-gray-light pt-3 border-t">

            <!-- FIGURE -->
            <div v-if="block.figref.length" class="">
                <div v-for="figref in block.figref" :key="block.figref.FigurNr" class="text-sm text-gray-800 flex w-full my-2">
                    <div v-for="bilde in figref.Figurbilde" :key="block.FigurNr" >
                        <a v-bind:href="bilde.url" target="_blank"><div class="w-12 h-8 mr-2" v-bind:style="'background-image: url('+bilde.thumbnails.small.url+')'"> </div></a>
                    </div>
                    <div>Figur {{figref.FigurNr }}: {{ figref.Tekst }}</div>
                </div>
            </div>


            <!-- TABLE -->
            <div v-if="block.tabref.length" class="">
                <div class="">
                    <div v-for="tabref in block.tabref" :key="block.tabref.Navn" class="text-sm text-gray-800 flex w-full my-2">
                        <div v-for="bilde in tabref.Bilde" :key="block.tabref.Navn" >
                            <a v-bind:href="bilde.url" target="_blank"><div class="w-12 h-8 mr-2" v-bind:style="'background-image: url('+bilde.thumbnails.small.url+')'"> </div></a>
                        </div>
                        <div>Tabell {{tabref.Navn }}: {{ tabref.Tekst }}</div>
                    </div>
                </div>
            </div>


            <div v-if="block.kravref.length" class="mt-2">
                Se også:
                <span v-for="ref in block.kravref" :key="block.sequence" class="text-sm text-gray-dark bg-gray-light p-1 rounded ml-2 cursor-pointer">
                    <span v-if="ref.Type==='Krav'">
                        Krav {{ ref.KravID }}
                    </span>
                    <span v-else>
                        <span v-if="ref.Avsnitt==='0'">
                            {{ ref.Book_Number[0]}}: Kapittel {{ ref.Kapittel }}
                        </span>
                        <span v-else>
                            {{ ref.Book_Number[0]}}: {{ ref.Kapittel }}.{{ ref.Avsnitt }}
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
                return texts[this.block.Kravtype.charAt(0)];
            },
            isSeparateStyle: function() {
                return (this.block.Avhengig)?'border-dashed border-t-0':'mt-8';
            }
        },

    };

</script>



<style scoped>

    .krav.Kan { color: darkgreen; }
    .krav.Bør { color: darkorange; }
    .krav.Skal { color: darkred; }


    /* ACCORDION */
    .accordion-item.active .accordion-title-row .accordion-arrow {
        transform: rotate(-180deg);
        transition: ease .3s;
    }

    .accordion-item.active .accordion-content {
        transition: ease .3s;
        animation-name: fadeIn;
        animation-duration: .6s;
        animation-fill-mode: both;
        will-change: transform;
    }

    .fade-in {
        animation-name: fadeIn;
        animation-duration: .6s;
        animation-fill-mode: both;
    }

    @keyframes fadeIn {
        from { opacity: 0; }  to { opacity: 1; }
    }


</style>