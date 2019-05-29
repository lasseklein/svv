<template>


    <div class="kravBlock pr-4 bg-gray-100 p-3 mb-8">

        <div class="flex text-xs text-gray-500">
            <div class="w-full text-right italic underline">Versjon {{block.Versjon}}</div>
        </div>

        <div class="flex mb-4 text-lg">{{block.Krav}}</div>


        <div v-if="block.figref.length" class="FIGURE" >
            <a @click="onClick('fig')" class="cursor-pointer"><i class="fas fa-angle-right"></i> Figurer ({{block.figref.length}})</a>
            <div v-bind:id="'ref-'+block.Nr" ref="veiledning" v-bind:class="{hidden: fighidden}">
                <div v-for="figref in block.figref" :key="block.id" class="text-sm text-gray-800 ml-4">
                    <div class="w-16 h-12 my-3"
                         v-bind:style="'background-image: url('+figref.Figurbilde[0].thumbnails.small.url+')'">
                    </div>
                    <p>Figur {{figref.FigurNr }}: {{ figref.Tekst }}</p>
                </div>
            </div>
        </div>

        <div v-if="block.Tabell" class="TABLE">
            <a @click="onClick('tab')" class="cursor-pointer"><i class="fas fa-angle-right"></i> Tabeller</a>
        </div>

        <div v-if="block.Tilknyttet_tekst" class="REF">
            <a @click="onClick('txt')" class="cursor-pointer"><i class="fas fa-angle-right"></i> Veiledning</a>
            <div v-bind:id="'ref-'+block.Nr" ref="veiledning" v-bind:class="{hidden: txthidden}" class="ml-4">
                {{ block.Tilknyttet_tekst }}
            </div>
        </div>
    </div>


</template>


<script>
    export default {

        name: 'KravBlock',
        props: ['block'],

        data: function () {
            return {
                fighidden: true,
                txthidden: true,
            }
        },

        methods: {
            onClick (i) {
                switch(i){
                    case 'fig':
                        this.fighidden = !this.fighidden;
                        break;
                    case 'txt':
                        this.txthidden = !this.txthidden;
                        break;
                    case 'tab':
                        this.tabhidden = !this.tabhidden;
                        break;
                }
            }
        }
    };
</script>
