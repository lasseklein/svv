<template>
    <div>
        <div v-html="compiledMarkdown" class="font-sans text-base my-4"></div>
        <Reference v-bind:block="block" />

        <div v-if="block.figref.length || block.tabref.length || block.kravref.length" class="pt-1 pb-2 my-6">

            <Thumbnail v-bind:item="block.figref" name="Figur" v-bind:isActive="true" />
            <Table v-bind:item="block" name="Tabell" v-bind:isActive="true" />

            <div v-if="block.vedlegg.length" v-for="vl in block.vedlegg" :key="vl.filename" class="mt-3">
                <a v-bind:href="vl.url" class="underline text-gray-dark text-sm "><i class="fas fa-paperclip mr-4"></i>{{vl.filename}}</a>
            </div>

        </div>
    </div>

</template>

<script>
    import marked    from "marked";
    import Reference from "./Reference";
    import Thumbnail from "./Thumbnail";
    import Table     from "./Table";

    export default {
        name: 'TextBlock',
        props: ['block'],

        components: {
            Reference,
            marked,
            Thumbnail,
            Table,
        },
        computed: {
            compiledMarkdown: function(){
                return marked(this.block.krav, { sanitize: true })
                    .replace(/<p>/g, '<p class="my-2">')
                    .replace(/<ul>/g,'<ul class="pl-8 list-disc">')
                    .replace(/<li>/g, '<li class="mt-1">')
                    .replace(/<a href/g, '<a class="underline font-medium" href')
            },
         },

    };
</script>