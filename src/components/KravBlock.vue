<template>
    <div class="kravBlock pr-4 border-r">
        <div class="flex text-xs text-gray-500">
            <div class="w-full text-right italic underline">Versjon {{block.Versjon}}</div>
        </div>
        <div class="flex mb-4">{{block.Krav}}</div>
        <div class="FIGUR flex mb-4" >
            <div v-if="block.figref.length">
                <p>Figurer</p>
                <div v-for="figref in block.figref">
                   Figur {{figref.FigurNr }}: {{ figref.Tekst }}
                    <g-image :src="figref.Figurbilde[0].url"></g-image>
                    <g-image :src="figref.Figurbilde[0].thumbnails.small.url"></g-image>
                </div>

            </div>

        </div>
    </div>
</template>


<script>
    export default {
        name: 'KravBlock',
        props: ['block'],
    };
</script>

