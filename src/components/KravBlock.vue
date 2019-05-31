<template>


    <div class="kravBlock pr-4 bg-gray-bg border border-gray-light p-3 mb-8">

        <div class="flex justify-between text-xs text-gray-500">
            <div class="">Krav {{block.KravID}} <span v-bind:class="'m-2 px-1 krav rounded font-medium uppercase tracking-wider '+block.Kravtype">{{rectype}}</span></div>
            <div class="text-right italic underline text-gray-dark">Versjon {{block.Versjon}}</div>
        </div>

        <div class="flex my-4 text-lg">{{block.Krav}}</div>


        <div v-if="block.Tilknyttet_tekst" class="container flex flex-col lg:flex-row flex-no-wrap justify-center w-full m-auto mb-2 fade-in  border-gray-light">
            <!-- EXPLANATION -->
            <div class="accordion-item rounded overflow-hidden w-auto md:w-full inactive">
                <div v-on:click="onClick" class="accordion-title-row flex items-center cursor-pointer py-2">
                    <div class="flex pointer-events-none">
                        <h2 class="mb-0 mr-1">Veiledning</h2>
                    </div>
                    <div class=" pointer-events-none"><svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow"> <title>cheveron down</title> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>
                </div>

                <div class="accordion-content list-reset leading-normal mx-4 mb-2 hidden">
                    {{ block.Tilknyttet_tekst }}
                </div>
            </div>
        </div>



        <div v-if="block.figref.length || block.tabref.length || block.kravref.length" class="references border-gray-medium pt-3 border-t">

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


            <div v-if="block.kravref.length" class="">
                Se også:
                <span v-for="ref in block.kravref" :key="block.Nr" class="text-sm text-gray-dark bg-gray-light p-1 rounded ml-2 cursor-pointer">
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

    export default {

        name: 'KravBlock',
        props: ['block'],

        methods: {
           onClick (e) {

               var hideothers = true; // Funker ikke for mobil der andre må skjules

                const accordionContentPanes = document.querySelectorAll(".accordion-content");

                accordionContentPanes.forEach(function(content) {
                    if (content.previousElementSibling === e.target){
                        content.classList.toggle("hidden");
                        content.parentElement.classList.toggle("active");
                        content.parentElement.classList.toggle("inactive");
                    }
                    else if (hideothers) {
                        content.classList.add('hidden');
                        content.parentElement.classList.remove("active");
                        content.parentElement.classList.add("inactive");
                    }
                });
            },
        },
        computed: {
            rectype: function () {
                let texts = {
                    'K': 'KAN',
                    'B': 'BØR',
                    'S': 'SKAL',
                };
                return texts[this.block.Kravtype.charAt(0)];
            }
        },

    };


</script>



<style scoped>

    .krav.Kan { color: darkgreen; }
    .krav.Bør { color: darkorange; }
    .krav.Skal { color: darkred; }

    /* ACCORDION */

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