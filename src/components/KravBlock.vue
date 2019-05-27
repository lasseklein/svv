<template>


    <div class="kravBlock pr-4 border border-gray-300 p-3 mb-4">

        <div class="flex mb-4">{{block.Krav}}</div>

        <div class="flex text-xs text-gray-500">
            <div class="w-full text-right italic underline">Versjon {{block.Versjon}}</div>
        </div>

        <div v-if="block.figref.length" class="FIGURE" >
            <a @click="onClick('fig')"><i class="fas fa-angle-right"></i> Figurer ({{block.figref.length}})</a>
            <div v-bind:id="'ref-'+block.Nr" ref="veiledning" v-bind:class="{hidden: fighidden}">
                <div v-for="figref in block.figref" class="text-sm text-gray-800">
                   Figur {{figref.FigurNr }}: {{ figref.Tekst }}
                    <!-- <g-image :src="figref.Figurbilde[0].url"></g-image> -->
                    <div class="w-16 h-12 my-3"
                         v-bind:style="'background-image: url('+figref.Figurbilde[0].thumbnails.small.url+')'">
                    </div>
                </div>
            </div>
        </div>

        <div v-if="block.Tabell" class="TABLE">
            <a @click="onClick('tab')"><i class="fas fa-angle-right"></i> Tabeller</a>
        </div>

        <div v-if="block.Tilknyttet_tekst" class="REF cursor-pointer">
            <a @click="onClick('txt')"><i class="fas fa-angle-right"></i> Veiledning</a>
            <div v-bind:id="'ref-'+block.Nr" ref="veiledning" v-bind:class="{hidden: txthidden}">
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
                txthidden: true
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
