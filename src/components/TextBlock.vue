<template>
    <div>
        <div class="font-sans text-base my-4">
            <Markdown v-bind:text="block.krav"></Markdown>
        </div>

        <Reference v-bind:block="block" v-bind:showContent="true" />

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
    import Markdown from "./Markdown";

    export default {
        name: 'TextBlock',
        props: ['block'],

        components: {
            Reference,
            Markdown,
            Thumbnail,
            Table,
        },

    };
</script>