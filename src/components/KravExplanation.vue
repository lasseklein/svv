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
        methods: {
            onClick (e) { // TODO: Bytte ut med hyllevare-accordion med chevron

                var hideothers = true; // Funker ikke for mobil der andre må skjules

                const accordionContentPanes = document.querySelectorAll(".accordion-content");

                accordionContentPanes.forEach(function(content) {
                    if (content.previousElementSibling === e.target){
                        content.classList.toggle("hidden");
                        content.parentElement.classList.toggle("isactive");
                        content.parentElement.classList.toggle("isinactive");
                    }
                    else if (hideothers) {
                        content.classList.add('hidden');
                        content.parentElement.classList.remove("isactive");
                        content.parentElement.classList.add("isinactive");
                    }
                });
            },
        },

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

    /* ACCORDION */
    .accordion-item.isactive .accordion-title-row .accordion-arrow {
        transform: rotate(-180deg);
        transition: ease .3s;
    }

    .accordion-item.isactive .accordion-content {
        transition: ease .3s;
        animation-name: fadeIn;
        animation-duration: .6s;
        animation-fill-mode: both;
        will-change: transform;
    }

    .fade-in {
        animation-name: fadeIn;
        animation-duration: .6s;
        animation-fill-mode: both;
    }

    @keyframes fadeIn {
        from { opacity: 0; }  to { opacity: 1; }
    }

</style>