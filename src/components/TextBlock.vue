<template>
    <div v-html="compiledMarkdown" class="text-lg my-4"></div>
</template>


<script>
    import marked from "marked";

    export default {
        name: 'TextBlock',
        props: ['text'],

        computed: {
            compiledMarkdown: function(){
                return marked(this.text, { sanitize: true })
                    .replace(/<p>/g, '<p class="mb-4">')
                    .replace(/<a href/g, '<a class="underline font-medium" href')
                    .replace(/<ul>/g,'<ul class="pl-8 list-disc">')
                    .replace(/<li>/g, '<li class="mb-4">');
            },
         },

    };
</script>