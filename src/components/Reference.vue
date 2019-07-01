<template>
    <div v-if="block.kravref.length" class="tw-text-sm tw-mt-2">
        <div v-for="ref in block.kravref" :key="block.kravref.id" class="tw-mt-2">

            <div v-if="ref.type==='Krav'" v-bind:class="[showContent ? 'tw-bg-white tw-border tw-border-gray-frame tw-p-4 tw-mt-4' : '']">
                <a v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id" class="tw-text-gray-dark tw-underline tw-cursor-pointer">
                    <i class="fas fa-link tw-text-md tw-text-gray-dark tw-mr-3"></i>{{ ref.booknr[0]}} Krav {{ ref.kravID }}</a>
                <div v-if="showContent" class="tw-ml-8 tw-mt-2"><Markdown v-bind:text="ref.tekst" /></div>
            </div>
            <a v-else v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id" class="tw-text-gray-dark tw-underline tw-cursor-pointer">
                <i class="fas fa-link tw-text-md tw-text-gray-dark tw-mr-3"></i>{{ ref.booknr[0]}} {{ ref.kapittel }}.{{ ref.avsnitt }}: {{ref.fagtema}}</a>

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