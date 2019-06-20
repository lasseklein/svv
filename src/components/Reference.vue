<template>
    <div v-if="block.kravref.length" class="text-sm mt-2">
        <div v-for="ref in block.kravref" :key="block.kravref.id" class="text-gray-dark underline cursor-pointer mt-2">

            <a v-if="ref.type==='Krav'" v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id"><i class="fas fa-link text-xl text-gray-dark mr-2"></i>Krav {{ ref.kravID }}</a>
            <a v-else v-bind:href="'/'+ref.booknr+'/'+ref.kapittel+'#'+ref.id"><i class="fas fa-link text-xl text-gray-dark mr-2"></i>{{ ref.booknr[0]}} {{ ref.kapittel }}.{{ ref.avsnitt }}: {{ref.fagtema}}</a>

        </div>
    </div>
</template>


<script>
    export default {
        name: 'Reference',
        props: ['block'],
    };
</script>