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
                    .replace(/<p>/g, '<p class="tw-my-2">')
                    .replace(/<ul>/g,'<ul class="tw-pl-8 tw-list-disc">')
                    .replace(/<li>/g, '<li class="tw-mt-1">')
                    .replace(/<a href/g, '<a class="tw-underline tw-font-medium" href')
            },
        },
    };
</script>