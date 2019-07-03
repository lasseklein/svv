
<template>
    <v-app  class="app font-sans">


        <v-navigation-drawer
                mobile-break-point="1024"
                v-model="drawer"
                fixed
                clipped
                class="grey lighten-4"
                app
        >
                <slot name="sidebar" />
        </v-navigation-drawer>



        <v-toolbar app
                   clipped-left
                   flat
                   fixed
                   dark
                   color="#444f55"
        >
            <span class="tw-block lg:tw-hidden"><v-toolbar-side-icon @click="drawer = !drawer" ></v-toolbar-side-icon></span>
            <v-toolbar-title>
                <span class="title"><a href="/" class="tw-text-gray-light">SVV</a></span>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-toolbar-items>
                <v-btn flat><a href="/" class="tw-text-gray-light tw-text-md">Håndbøker</a></v-btn>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn flat v-on="on" ><a href="#" class="tw-text-gray-light tw-text-md"><i class="fas fa-history tw-mr-2"></i>Gjeldende versjon</a></v-btn>
                    </template>
                    <span>Her kommer valg av tidligere versjonar av manualen</span>
                </v-tooltip>

            </v-toolbar-items>


        </v-toolbar>



        <v-content>
            <v-container
                    fluid
                    class="grey lighten-4">

                <slot name="content" />

            </v-container>
        </v-content>



    </v-app>

</template>

<script>
    export default {
        name: 'Default',

        data () {
            return {
                items: [
                    { title: 'Home', icon: 'D' },
                    { title: 'About', icon: 'QA' }
                ],
                drawer: null
            }
        },
    }


</script>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>




<style>
</style>
