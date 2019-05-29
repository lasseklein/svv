<template>


    <div class="kravBlock pr-4 bg-gray-bg p-3 mb-8">

        <div class="flex justify-between text-xs text-gray-500">
            <div class="">Krav {{block.KravID}} <span v-bind:class="'m-2 px-1 krav rounded font-medium uppercase tracking-wider '+block.Kravtype">{{rectype}}</span></div>
            <div class="text-right italic underline">Versjon {{block.Versjon}}</div>
        </div>

        <div class="flex my-4 text-lg">{{block.Krav}}</div>


        <div class="container flex flex-col lg:flex-row flex-no-wrap justify-center w-full m-auto my-2 fade-in">

            <!-- FIGURE -->
            <div v-if="block.figref.length" class="accordion-item rounded overflow-hidden w-auto md:w-full inactive">
                <div v-on:click="onClick" class="accordion-title-row flex items-center cursor-pointer px-4 py-2 hover:bg-gray-medium">
                    <div class="flex pointer-events-none">
                        <h2 class="mb-0 mr-1">Figurer ({{block.figref.length}})</h2>
                    </div>
                    <div><svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow"> <title>cheveron down</title> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>
                </div>

                <div class="accordion-content list-reset leading-normal px-8 py-4 bg-grey-lighter hidden">
                    <div v-for="figref in block.figref" :key="block.id" class="text-sm text-gray-800 ml-4">
                        <div class="w-16 h-12 my-3" v-bind:style="'background-image: url('+figref.Figurbilde[0].thumbnails.small.url+')'"> </div>
                        <p>Figur {{figref.FigurNr }}: {{ figref.Tekst }}</p>
                    </div>
                </div>
            </div>

            <!-- TABLE -->
            <div v-if="block.Tabell" class="accordion-item rounded overflow-hidden w-auto md:w-full inactive">
                <div v-on:click="onClick" class="accordion-title-row flex items-center cursor-pointer px-4 py-2 hover:bg-gray-medium">
                    <div class="flex pointer-events-none">
                        <h2 class="mb-0 mr-1">Tabeller</h2>
                    </div>
                    <div><svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow"> <title>cheveron down</title> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>
                </div>

                <div class="accordion-content list-reset leading-normal px-8 py-4 bg-grey-lighter hidden">
                    Tabeller kommer her
                </div>
            </div>

            <!-- REFERENCE -->
            <div v-if="block.Tilknyttet_tekst" class="accordion-item rounded overflow-hidden w-auto md:w-full inactive">
                <div v-on:click="onClick" class="accordion-title-row flex items-center cursor-pointer px-4 py-2 hover:bg-gray-medium">
                    <div class="flex pointer-events-none">
                        <h2 class="mb-0 mr-1">Veiledning</h2>
                    </div>
                    <div><svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow"> <title>cheveron down</title> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>
                </div>

                <div class="accordion-content list-reset leading-normal px-8 py-4 hidden">
                    {{ block.Tilknyttet_tekst }}
                </div>
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

                const accordionItems = document.querySelectorAll(".accordion-item");
                const accordionContentPanes = document.querySelectorAll(".accordion-content");

                //var testContainer = document.querySelector('#test');
                //var fourChildNode = testContainer.querySelector('.four');

                accordionContentPanes.forEach(function(content) {
                    if (content.previousElementSibling === e.target){
                        content.classList.toggle("hidden");
                        content.parentElement.classList.toggle("active");
                        content.parentElement.classList.toggle("inactive");
                    }
                    else {
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
                    'K': 'Frivillig',
                    'B': 'Anbefalt',
                    'S': 'Påkrevet',
                }
                return texts[this.block.Kravtype.charAt(0)];
            }
        }

    }


</script>



<style scoped>

    .krav.Kan { color: darkgreen; }
    .krav.Bør { color: darkorange; }
    .krav.Skal { color: darkred; }

    /* ACCORDION */
    .accordion-item.active .accordion-title-row .accordion-arrow {
        transform: rotate(-180deg);
        transition: ease .3s transform;
    }

    .accordion-item.active .accordion-content {
        transition: ease .3s all;
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