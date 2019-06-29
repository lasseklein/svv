<template>
    <div v-if="item.length" class="">
        <v-collapse-group :onlyOneActive="false">
            <div v-for="ref in item" :key="item.navn" >

                <div v-for="bilde in ref.bilde" :key="item.navn" >

                    <v-collapse-wrapper :active="isActive">
                        <div v-bind:href="bilde.url"
                             class="tw-mt-3 tw-header tw-flex tw-flex-row tw-w-full tw-cursor-pointer tw-text-sm tw-whitespace-no-wrap"
                             v-bind:class="{'mt-6':isActive}"
                             v-collapse-toggle >

                            <i class="fas fa-image tw-text-xl tw-text-gray-dark tw-mr-2"></i>
                            {{name}} {{ref.navn }}:
                            <span class="tw-ml-2 tw-text-gray-dark tw-whitespace-normal">
                                {{ ref.tekst }}
                            </span>
                        </div>
                        <div class="my-content" v-collapse-content>
                            <a v-bind:href="bilde.url" target="_blank" class="tw-object-contain">
                                <img v-bind:src="bilde.url" class="tw-h-64 tw-max-w-full tw-cursor-pointer tw-mt-2"/>
                            </a>
                        </div>
                    </v-collapse-wrapper>

                </div>

            </div>
        </v-collapse-group>
    </div>
</template>


<script>
    export default {
        name: 'Thumbnail',
        props: ['item', 'name', 'isActive'],
    }
</script>


<style scoped>

</style>