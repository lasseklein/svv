<template>
    <article>
        <g-link :to="product.path">
            <figure v-if="image">
                <img :src="image.url" :alt=image.name />
            </figure>
            <h2>{{product.title}}</h2>
        </g-link>
        <p class="btn-line">
            <BuyButton :product="product" />
        <p>{{excerpt}}</p>
    </article>
</template>
