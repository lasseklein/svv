<template>

<div v-if="text" class="container flex flex-col lg:flex-row flex-no-wrap justify-center w-full m-auto mb-2 fade-in  border-gray-light">
    <div class="accordion-item rounded overflow-hidden w-auto md:w-full inactive">
        <div v-on:click="onClick" class="accordion-title-row flex items-center cursor-pointer py-2">
            <div class="flex pointer-events-none">
                <h2 class="mb-0 mr-1">Veiledning</h2>
            </div>
            <div class=" pointer-events-none"><svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow"> <title>cheveron down</title> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></div>
        </div>

        <div class="accordion-content list-reset leading-normal mb-2 hidden">
            {{ text }}
        </div>
    </div>
</div>

</template>


<script>

    export default {
        name: 'KravExplanation',
        props: ['text'],

        methods: {
            onClick (e) {

                var hideothers = true; // Funker ikke for mobil der andre må skjules

                const accordionContentPanes = document.querySelectorAll(".accordion-content");

                accordionContentPanes.forEach(function(content) {
                    if (content.previousElementSibling === e.target){
                        content.classList.toggle("hidden");
                        content.parentElement.classList.toggle("active");
                        content.parentElement.classList.toggle("inactive");
                    }
                    else if (hideothers) {
                        content.classList.add('hidden');
                        content.parentElement.classList.remove("active");
                        content.parentElement.classList.add("inactive");
                    }
                });
            },
        },

    }
</script>