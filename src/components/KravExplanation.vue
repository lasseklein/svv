<template>

    <v-expansion-panel v-if="text">
        <v-expansion-panel-content >
            <template v-slot:header>
                <div class="shrink tw-mr-2">Veiledning til kravet</div>
            </template>
            <v-card color="transparent">
                <v-card-text>
                    <Markdown v-bind:text="text" class="tw-mx-2" />
                </v-card-text>
            </v-card>
        </v-expansion-panel-content>
    </v-expansion-panel>

</template>


<script>
    import Markdown from "./Markdown";

    export default {
        components: {
            Markdown,
        },

        name: 'KravExplanation',
        props: ['text'],
 
    }
</script>


<style scoped>

    .v-expansion-panel{
        box-shadow: 0px 0px 0px 0px rgba(0,0,0,0);
        position: relative;
        left: -10px; /* TODO: remove this hack to make vuejs align with tailwind */
    }
    .v-expansion-panel__header{
    }

    li.v-expansion-panel__container{
        list-style: none;
    }

    .v-card__text{
        padding-top: 0;
        padding-bottom: 0;
    }

    .v-expansion-panel__container,
    .v-expansion-panel__body {
        background-color: transparent !important;
    }

</style>