<template>
    <div v-if="text" v-html="compiledMarkdown(text)"></div>
</template>


<script>
    import marked from "marked";

    export default {
        name: 'Markdown',
        props: ['text'],

        components: {
            marked,
        },

        methods: {
            compiledMarkdown: function () {
                return marked(this.text, {sanitize: true})
                    .replace(/<p>/g, '<p class="my-2">')
                    .replace(/<ul>/g,'<ul class="pl-8 list-disc">')
                    .replace(/<li>/g, '<li class="mt-1">')
                    .replace(/<a href/g, '<a class="underline font-medium" href')
            },
        },
    };
</script>