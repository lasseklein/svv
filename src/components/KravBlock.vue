<template>
    <div class="kravblock pr-4 border-r">
        <div class="flex text-xs text-gray-500">
            <div class="w-1/2">{{ block.Nr }}.</div>
            <div class="w-1/2 text-right italic underline">Versjon {{block.Versjon}}</div>
        </div>
        <div class="flex mb-4">{{block.Krav}}</div>
       <div class="flex mb-4" >
            <div>
                <p>Figurer</p>


            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'KravBlock',
        props: ['block'],
    };
</script>

