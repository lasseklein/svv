<template>


    <div class="kravBlock pr-4 border border-gray-300 p-3 mb-4">

        <div class="flex text-xs text-gray-500">
            <div class="w-full text-right italic underline">Versjon {{block.Versjon}}</div>
        </div>

        <div class="flex mb-4">{{block.Krav}}</div>

        <div v-if="block.figref.length" class="FIGURE" >
            <div v-for="figref in block.figref">
               Figur {{figref.FigurNr }}: {{ figref.Tekst }}
                <g-image :src="figref.Figurbilde[0].url"></g-image>
                <div class="w-16 h-12"
                     v-bind:style="'background-image: url('+figref.Figurbilde[0].thumbnails.small.url+')'">
                </div>
            </div>
        </div>

        <div v-if="block.Tabell" class="TABLE text-red">
            TABELL [{{block.Tabell}}]
        </div>

        <div v-if="block.Tilknyttet_tekst" class="REF cursor-pointer">
            <a @click="onClick()"><i class="fas fa-angle-right"></i> Veiledning</a>
            <div v-bind:id="'ref-'+block.Nr" ref="veiledning" v-bind:class="{hidden: hidden}">
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
                hidden: true,
            }
        },
        methods: {
            onClick () {
                this.hidden = !this.hidden;
            }
        }
    };
</script>
