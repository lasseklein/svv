<template>
    <div>

        <div class="container flex flex-col flex-wrap justify-center max-w-md m-auto my-10 fade-in px-2">

            <div class="accordion-item rounded-t overflow-hidden w-full bg-white inactive">
                <div v-on:click="onClick" class="accordion-title-row flex justify-between items-center cursor-pointer px-6 py-4 hover:bg-orange">

                    <div class="flex">
                        <svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-green mr-2">
                            <title>shield</title>
                            <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z"></path>
                        </svg>
                        <h2 class="font-bold text-lg mb-0">Skills</h2>
                    </div>

                    <div>
                        <svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow">
                            <title>cheveron down</title>
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                    </div>
                </div>

                <div class="accordion-content list-reset leading-normal px-8 py-4 bg-grey-lighter hidden">
                    Content 1
                </div>
            </div>

            <div class="accordion-item overflow-hidden w-full bg-white inactive">
                <div v-on:click="onClick" class="accordion-title-row flex justify-between items-center cursor-pointer px-6 py-4 hover:bg-orange">
                    <div class="flex">
                        <svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-blue mr-2">
                            <title>link</title>
                            <path d="M9.26 13a2 2 0 0 1 .01-2.01A3 3 0 0 0 9 5H5a3 3 0 0 0 0 6h.08a6.06 6.06 0 0 0 0 2H5A5 5 0 0 1 5 3h4a5 5 0 0 1 .26 10zm1.48-6a2 2 0 0 1-.01 2.01A3 3 0 0 0 11 15h4a3 3 0 0 0 0-6h-.08a6.06 6.06 0 0 0 0-2H15a5 5 0 0 1 0 10h-4a5 5 0 0 1-.26-10z"></path>
                        </svg>
                        <h2 class="font-bold text-lg">Links</h2>
                    </div>

                    <div>
                        <svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow">
                            <title>cheveron down</title>
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                    </div>
                </div>
                <div class="accordion-content list-reset leading-normal px-8 py-4 bg-grey-lighter hidden">
                    Content 2
                </div>
            </div>

            <div class="accordion-item overflow-hidden w-full bg-white rounded-b inactive">

                <div v-on:click="onClick"
                     class="accordion-title-row flex justify-between items-center cursor-pointer px-6 py-4 hover:bg-orange">
                    <div class="flex">
                        <svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-orange-dark mr-2">
                            <title>trophy</title>
                            <path d="M15 9a3 3 0 0 0 3-3h2a5 5 0 0 1-5.1 5 5 5 0 0 1-3.9 3.9V17l5 2v1H4v-1l5-2v-2.1A5 5 0 0 1 5.1 11H5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3V4H2v2H0V2h5V0h10v2h5v4h-2V4h-3v5z"></path>
                        </svg>
                        <h2 class="font-bold text-lg">Stuff I've Done</h2>
                    </div>

                    <div>
                        <svg viewBox="0 0 20 20" width="20" height="20" class="fill-current text-grey-dark accordion-arrow">
                            <title>cheveron down</title>
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path>
                        </svg>
                    </div>
                </div>
                <div class="accordion-content list-reset leading-normal px-8 py-4 bg-grey-lighter hidden">
                    Content 3
                </div>
            </div>
        </div>

    </div>

</template>

<script>


    export default {
        name: 'AccordionTabs',
        methods: {
            onClick (e) {

                const accordionItems = document.querySelectorAll(".accordion-item");
                const accordionContentPanes = document.querySelectorAll(".accordion-content");

                //var testContainer = document.querySelector('#test');
                //var fourChildNode = testContainer.querySelector('.four');

                accordionContentPanes.forEach(function(content) {
                    if (content.previousElementSibling === e.target){
                        content.classList.toggle("hidden");
                        content.parentElement.classList.toggle("active");
                        content.parentElement.classList.toggle("inactive");
                    }
                    else {
                        content.classList.add('hidden');
                        content.parentElement.classList.remove("active");
                        content.parentElement.classList.add("inactive");
                    }
               });

            }
        }
    }


   function addClass(el, klass) {
       el.classList.add(klass);
   }

   function removeClass(el, klass) {
       el.classList.remove(klass);
   }

</script>




<style scoped>

    .accordion-item.active .accordion-title-row .accordion-arrow {
        transform: rotate(-180deg);
        transition: ease .3s transform;
    }

    .accordion-item.active .accordion-content {
        transition: ease .3s all;
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