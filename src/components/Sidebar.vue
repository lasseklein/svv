<template>

    <div class="sticky top-0">

        <div class="block md:hidden mx-4 ">
            <i class="fas fa-hamburger"></i> Meny for mobil kommer her
        </div>

        <div id="thesidebar" class="hidden md:block flex flex-col h-full overflow-y-auto">

            <h3 class="ml-4 mt-2">N100 Veg- og gateutforming</h3>

            <input class="border border-gray-medium px-2 py-1 mx-3 mb-2 text-sm" type="text" name="søk" placeholder="Søk kommer her" >

            <scrollactive class="nav-scroll-items"
                          active-class="activeitem"
                          :duration=400
                          :offset=80
                          bezier-easing-value=".5,0,.35,1" >

                <div v-for="edge in $static.allKrav.edges" :key="edge.node.id">

                    <a v-bind:class="(chapter===edge.node.kapittel)?'font-bold':''"
                       v-if="edge.node.type==='Kapittel'"
                       v-bind:href="edge.node.kapittelID"
                       class="flex content-center hover:bg-gray-light cursor-pointer h-10" >

                        <div class="text-sm self-center px-4">
                            <span v-if="edge.node.kapittel.match(/[A-Z]/)">{{edge.node.kapittel}} </span>
                            {{edge.node.fagtema}}
                        </div>
                    </a>


                    <a v-bind:href="'#'+edge.node.id"
                       v-else-if="edge.node.type==='Tittel' && edge.node.avsnitt.length===1 && edge.node.kapittel===chapter"
                       class="scrollactive-item flex border-l border-gray-medium ml-5 pl-2 cursor-pointer hover:bg-gray-light h-10 ">
                        <div class="text-sm self-center">{{edge.node.fagtema}}</div>
                    </a>


                </div>

            </scrollactive>

        </div>
    </div>


</template>


<script>

    export default {
        name: 'Sidebar',
        props: ['chapter'],
    }

</script>


<style scoped>
</style>


<static-query>

    query Krav {
        allKrav ( filter: { type:{in: ["Kapittel","Tittel"]}}, sortBy: "sequence", order: ASC ) {
            edges {
                node {
                    sequence
                    kapittel
                    kapittelID
                    avsnitt
                    id
                    type
                    fagtema
                }
            }
        }
    }

</static-query>
