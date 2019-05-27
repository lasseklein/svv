<template>
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
</template>


