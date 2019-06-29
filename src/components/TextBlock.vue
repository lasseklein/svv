<template>
    <div>
        <div class="tw-font-sans tw-text-base tw-my-4">
            <Markdown v-bind:text="block.krav" />
        </div>

        <Reference v-bind:block="block" v-bind:showContent="true" />

        <div v-if="block.figref.length || block.tabref.length || block.kravref.length" class="tw-pt-1 tw-pb-2">

            <Thumbnail v-bind:item="block.figref" name="Figur" v-bind:isActive="true" class="tw-my-10" v-bind:isTextField="true"/>

            <Table v-bind:item="block" name="Tabell" v-bind:isActive="true" v-bind:isTextField="true"/>

            <div v-if="block.vedlegg.length" v-for="vl in block.vedlegg" :key="vl.filename" class="tw-mt-3 tw-my-10">
                <a v-bind:href="vl.url" class="tw-underline tw-text-gray-dark tw-text-sm "><i class="fas fa-paperclip tw-mr-4"></i>{{vl.filename}}</a>
            </div>

        </div>
    </div>

</template>



<script>

    import Reference from "./Reference";
    import Thumbnail from "./Thumbnail";
    import Table     from "./Table";
    import Markdown  from "./Markdown";

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