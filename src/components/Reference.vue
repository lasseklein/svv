<template>
    <div v-if="block.kravref.length" class="text-sm mt-2">
        Henvisning:
        <span v-for="ref in block.kravref" :key="block.kravref.id" class="text-gray-dark p-1 ml-2 underline cursor-pointer">

            <a v-if="ref.type==='Krav'" v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id">Krav {{ ref.kravID }}</a>
            <a v-else v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id">{{ ref.booknr[0]}} {{ ref.kapittel }}.{{ ref.avsnitt }}</a>

        </span>
    </div>
</template>


<script>
    export default {
        name: 'Reference',
        props: ['block'],
    };
</script>