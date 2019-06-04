<template>
    <div v-html="compiledMarkdown" class="text-2xl my-4"></div>
</template>


<script>
    import marked from "marked";

    export default {
        name: 'TextBlock',
        props: ['text'],

        computed: {
            compiledMarkdown: function(){
                return marked(this.text, { sanitize: true })
                    .replace('<p>','<p class="mb-4">');
            },
         },

    };
</script>