<template>
    <div>
        <div v-html="compiledMarkdown" class="font-sans text-base my-4"></div>
        <Reference v-bind:block="block" />
    </div>

</template>

<script>
    import marked from "marked";
    import Reference from "./Reference";

    // TODO: Få inn block og vise figurer og bilder her også.

    export default {
        name: 'TextBlock',
        props: ['block'],

        components: {
            Reference,
            marked,
        },
        computed: {
            compiledMarkdown: function(){
                return marked(this.block.krav, { sanitize: true })
                    .replace(/<p>/g, '<p class="mb-4">')
                    .replace(/<a href/g, '<a class="underline font-medium" href')
                    .replace(/<ul>/g,'<ul class="pl-8 list-disc">')
                    .replace(/<li>/g, '<li class="mb-4">');
            },
         },

    };
</script>