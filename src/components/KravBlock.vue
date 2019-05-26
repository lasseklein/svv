<template>
    <article>
        <p>{{ block.Nr }}. {{block.Krav}}</p>
    </article>
</template>


<script>


    export default {
        name: 'KravBlock',
        props: ['block'],
    };
</script>