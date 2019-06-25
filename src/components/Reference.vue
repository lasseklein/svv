<template>
    <div v-if="block.kravref.length" class="text-sm mt-2">
        <div v-for="ref in block.kravref" :key="block.kravref.id" class="mt-2">

            <div v-if="ref.type==='Krav'">
                <a v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id" class="text-gray-dark underline cursor-pointer">
                    <i class="fas fa-link text-md text-gray-dark mr-4"></i>
                    Krav {{ ref.kravID }}
                </a>
                <div v-if="showContent" class="ml-8 mt-2">
                    <Markdown v-bind:text="ref.krav" />
                </div>
            </div>
            <a v-else v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id" class="text-gray-dark underline cursor-pointer">
                <i class="fas fa-link text-md text-gray-dark mr-4"></i>
                {{ ref.booknr[0]}} {{ ref.kapittel }}.{{ ref.avsnitt }}: {{ref.fagtema}}
            </a>

        </div>
    </div>
</template>


<script>
    import Markdown from "./Markdown";

    export default {
        name: 'Reference',
        props: ['block','showContent'],
        components: {
            Markdown,
        },

    };
</script>